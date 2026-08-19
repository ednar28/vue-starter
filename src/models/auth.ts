import { reactive, ref } from 'vue'

export function useAuthLogin () {
  const submitting = ref(false)
  const errors = ref<FormError>({})
  const form = reactive({
    email: '',
    password: '',
    remember: false,
  })

  const submit = async () => {
    submitting.value = true
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return true
  }

  return {
    submitting,
    errors,
    form,
    submit,
  }
}
