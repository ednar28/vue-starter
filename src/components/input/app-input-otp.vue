<script setup lang="ts">
  import { nextTick, onMounted, reactive, ref } from 'vue'
  import inputOtpBox from './app-input-otp-box.vue'

  const length = 6

  defineProps<{
    error?: string | string[],
  }>()

  const emit = defineEmits<{
    (e: 'on-complete'): void,
    (e: 'on-change', value: string): void,
  }>()

  const activeInput = ref(-1)
  const otp = reactive<string[]>([])

  const handleOnFocus = (index: number) => {
    activeInput.value = index
  }
  const handleOnBlur = () => {
    activeInput.value = -1
  }
  // Helper to return OTP from input
  const checkFilledAllInputs = () => {
    if (otp.join('').length === length) {
      emit('on-complete')
    }
  }
  // Focus on input by index
  const focusInput = (input: number) => {
    activeInput.value = Math.max(Math.min(length - 1, input), 0)
  }
  // Focus on next input
  const focusNextInput = () => {
    focusInput(activeInput.value + 1)
  }
  // Focus on previous input
  const focusPrevInput = () => {
    focusInput(activeInput.value - 1)
  }
  // Change OTP value at focused input
  const changeCodeAtFocus = (value: string) => {
    otp[activeInput.value] = value
    emit('on-change', otp.join(''))
    checkFilledAllInputs()
  }
  // Handle pasted OTP
  const handleOnPaste = (event: ClipboardEvent) => {
    event.preventDefault()

    const pastedData =
      event.clipboardData?.getData('text/plain').slice(0, length - activeInput.value) ?? ''

    if (!pastedData.match(/^\d+$/)) {
      return
    }

    // Paste data from focused input onwards
    const currentCharsInOtp = otp.slice(0, activeInput.value)
    const combinedWithPastedData = currentCharsInOtp.concat(pastedData.split(''))
    for (let index = 0; index < length; index++) {
      otp[index] = combinedWithPastedData[index]
    }
    focusInput(combinedWithPastedData.slice(0, length).length)
    emit('on-change', otp.join(''))
    checkFilledAllInputs()
  }
  // Handle OTP change
  const handleOnChange = (value: string) => {
    if (value) {
      changeCodeAtFocus(value)
      focusNextInput()
    } else {
      // non numeric will be empty string
      // change with something else first to trigger re-render
      otp[activeInput.value] = 'A'
      nextTick(() => {
        otp[activeInput.value] = ''
      })
    }
  }
  // Handle cases of backspace, delete, left arrow, right arrow
  const handleOnKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
    case 'Backspace':
      event.preventDefault()
      // backspace when current focused has no value, go to previous input
      if (!otp[activeInput.value]) {
        focusPrevInput()
      }
      changeCodeAtFocus('')
      break
    case 'Delete':
      event.preventDefault()
      changeCodeAtFocus('')
      break
    case 'ArrowLeft':
      event.preventDefault()
      focusPrevInput()
      break
    case 'ArrowRight':
      event.preventDefault()
      focusNextInput()
      break
    default:
      break
    }
  }

  onMounted(() => {
    // autofocus to first input
    focusInput(0)
  })

  const clearInput = () => {
    otp.length = 0
    activeInput.value = 0
  }
  defineExpose({ clearInput })
</script>
<template>
  <div>
    <div class="mb-6 flex justify-center space-x-2">
      <input-otp-box
        v-for="(item, i) in length"
        :key="item"
        :focus="activeInput === i"
        :value="otp[i]"
        @on-change="handleOnChange"
        @on-keydown="handleOnKeyDown"
        @on-paste="handleOnPaste"
        @on-focus="handleOnFocus(i)"
        @on-blur="handleOnBlur" />
    </div>
    <app-input-error-message :message="error" />
  </div>
</template>
