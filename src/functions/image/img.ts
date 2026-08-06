import type { Ref } from 'vue'

export const base64ToBlob = async (base64Image: string) => {
  const res = await fetch(base64Image)
  return await res.blob()
}

export const filereader = (file: File) => {
  return new Promise<string | null>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      if (e.target === null) return reject(null)
      if (!e.target.result) return reject(null)
      const imageBase64 = String(e.target.result)
      resolve(imageBase64)
    }
  })
}

export const onFileChange = async (event: Event, image: Ref<string | undefined>) => {
  if (
    !(event.target instanceof HTMLInputElement && event.target.files?.length)
  ) {
    return
  }
  const files = event.target.files
  renderImage(files[0], image)
}

const renderImage = (file: File, image: Ref<string | undefined>) => {
  if (typeof FileReader !== 'function') {
    alert('Sorry, FileReader API not supported')
    return
  }

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      image.value = e.target?.result as string
      setTimeout(resolve, 250)
    }
  })
}
