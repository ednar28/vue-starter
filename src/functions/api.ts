import type { AxiosProgressEvent, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useToastStore } from '@/stores/toast'

export const useApi = () => {
  const app = useAppStore()
  const toast = useToastStore()
  const route = useRoute()
  const router = useRouter()

  let controller = new AbortController()
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 300000, // 300s / 5m
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    signal: controller.signal,
    withCredentials: true,
    withXSRFToken: true,
  }

  const REQUEST = async <T>(conf: AxiosRequestConfig, retryIfCsrfError = true): Promise<T> => {
    try {
      const response = await axios.request({ ...config, ...conf })
      return response.data
    } catch (error) {
      if (isCsrfTokenError(error) && retryIfCsrfError) {
        await GET('/sanctum/csrf-cookie')
        return await REQUEST<T>(conf, false)
      } else {
        handleErrors(error)
        return Promise.reject(error)
      }
    }
  }
  const GET = <T>(url: string, params = {}) => {
    return REQUEST<T>({ method: 'get', url, params })
  }
  const POST = <T>(url: string, data: object = {}) => {
    return REQUEST<T>({ method: 'post', url, data })
  }
  const PUT = <T>(url: string, data: object) => {
    return REQUEST<T>({ method: 'put', url, data })
  }
  const DELETE = <T>(url: string, data = {}) => {
    return REQUEST<T>({ method: 'delete', url, data })
  }
  const POSTFORMDATA = <T>(
    url: string,
    formData: FormData,
    onUploadProgress?: (event: AxiosProgressEvent) => void,
  ) => {
    return REQUEST<T>({
      headers: { ...config.headers, 'Content-Type': 'multipart/form-data' },
      method: 'post',
      url,
      data: formData,
      onUploadProgress,
    })
  }

  const onError = {
    unauthorized: () => {
      const shouldRedirectToHome = () => {
        // route where authenticated user should not be able to access
        return ['login', 'forget password', 'forbidden'].includes(route.name as string)
      }
      if (!shouldRedirectToHome()) {
        const path = route.fullPath.substring(1)
        const query = path ? { r: path } : undefined
        router.replace({ name: 'login', query })
      }
      // throw new UnauthenticatedException()
    },
    maintenance: () => {
      // router.replace({ name: 'maintenance' })
      app.setMaintenance(true)
    },
    forbidden: () => {
      router.replace({ name: 'forbidden' })
      // throw new ForbiddenException()
    },
    notFound: () => {
      throw new NotFoundException()
    },
    validationFailed: (errors: FormError) => {
      toast.warning('Terdapat kesalahan pada data yang dikirim')
      setTimeout(() => {
        const errorMessage = document.querySelector('.error-message')
        errorMessage?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      throw new ValidationErrorException(errors)
    },
    tooManyRequest: () => {
      toast.warning('Terlalu banyak melakukan request', 'Tunggu sebentar')
    },
    internalServerError: () => {
      toast.danger('Error pada sisi server', 'Akan segera kami perbaiki')
    },
    networkError: () => {
      toast.danger('Tidak terhubung dengan internet')
    },
  }

  /* https://github.com/axios/axios#handling-errors */
  const handleErrors = (error: unknown) => {
    if (!axios.isAxiosError(error)) {
      /**
       * Not axios error
       * Something happened in setting up the request that triggered an Error
       */
      console.error('[NotAxiosError]', error)
      return
    }

    if (error.response) {
      /**
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      switch (error.response.status) {
        case 401:
          onError.unauthorized()
          break
        case 403:
          onError.forbidden()
          break
        case 404:
          onError.notFound()
          break
        case 422:
          onError.validationFailed(error.response.data.errors)
          break
        case 429:
          onError.tooManyRequest()
          break
        case 500:
          onError.internalServerError()
          break
        case 503:
          onError.maintenance()
          break
        default:
          break
      }
      if (error.message === 'Network Error') {
        onError.networkError()
      }
      console.error('[Axios error]', error)
      return 'AxiosError'
    }

    /**
     * The request was made but no response was received.
     * `error.request` is an instance of XMLHttpRequest
     * in the browser and an instance of
     * http.ClientRequest in node.js
     */
    // if (error.request) {
    // }
    console.error('[API] Axios error but no response', error)
    return
  }

  const formErrors = (error: unknown): FormError => {
    if (error instanceof ValidationErrorException) {
      return error.getErrors()
    }
    return {}
  }

  const isCsrfTokenError = (error: unknown): boolean => {
    return axios.isAxiosError(error) && error.response?.status === 419
  }

  return {
    GET,
    POST,
    DELETE,
    PUT,
    POSTFORMDATA,
    config,
    formErrors,
    abort: () => {
      controller.abort()
      controller = new AbortController()
      config.signal = controller.signal
    },
  }
}

export class UnauthenticatedException extends Error {
  constructor () {
    super()
    this.name = 'UnauthenticatedException'
  }
}

export class ValidationErrorException extends Error {
  constructor (private errors: FormError) {
    super()
    this.name = 'ValidationErrorException'
  }
  getErrors () {
    return this.errors
  }
}

export class NotFoundException extends Error {
  constructor () {
    super()
    this.name = 'NotFoundException'
  }
}

// export class ForbiddenException extends Error {
//   constructor() {
//     super()
//     this.name = 'ForbiddenException'
//   }
// }
