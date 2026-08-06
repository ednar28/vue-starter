import type { App } from 'vue'
import AppInput from './app-input.vue'
import AppInputAutocomplete from './app-input-autocomplete.vue'
import AppInputCheckbox from './app-input-checkbox.vue'
import AppInputDate from './app-input-date.vue'
import AppInputDatepicker from './app-input-datepicker.vue'
import AppInputErrorMessage from './app-input-error-message.vue'
import AppInputFile from './app-input-file.vue'
import AppInputImage from './app-input-image.vue'
import AppInputNumber from './app-input-number.vue'
import AppInputOtp from './app-input-otp.vue'
import AppInputPassword from './app-input-password.vue'
import AppInputSearch from './app-input-search.vue'
import AppInputSelect from './app-input-select.vue'
import AppInputTel from './app-input-tel.vue'

export const useInput = {
  install (app: App) {
    app.component('AppInputCheckbox', AppInputCheckbox)
    app.component('AppInputDate', AppInputDate)
    app.component('AppInputDatepicker', AppInputDatepicker)
    app.component('AppInputErrorMessage', AppInputErrorMessage)
    app.component('AppInputFile', AppInputFile)
    app.component('AppInputImage', AppInputImage)
    app.component('AppInputNumber', AppInputNumber)
    app.component('AppInputOtp', AppInputOtp)
    app.component('AppInputPassword', AppInputPassword)
    app.component('AppInputSearch', AppInputSearch)
    app.component('AppInputSelect', AppInputSelect)
    app.component('AppInputTel', AppInputTel)
    app.component('AppInputAutocomplete', AppInputAutocomplete)
    app.component('AppInput', AppInput)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppInputCheckbox: typeof AppInputCheckbox,
    AppInputDate: typeof AppInputDate,
    AppInputDatepicker: typeof AppInputDatepicker,
    AppInputErrorMessage: typeof AppInputErrorMessage,
    AppInputFile: typeof AppInputFile,
    AppInputImage: typeof AppInputImage,
    AppInputNumber: typeof AppInputNumber,
    AppInputOtp: typeof AppInputOtp,
    AppInputPassword: typeof AppInputPassword,
    AppInputSearch: typeof AppInputSearch,
    AppInputSelect: typeof AppInputSelect,
    AppInputTel: typeof AppInputTel,
    AppInputAutocomplete: typeof AppInputAutocomplete,
    AppInput: typeof AppInput,
  }
}
