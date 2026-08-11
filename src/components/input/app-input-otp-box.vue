<script setup lang="ts">
  import { computed, ref, watch } from 'vue'

  const props = defineProps<{
    value?: string,
    focus: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'on-change', data: string): void,
    (e: 'on-keydown', data: KeyboardEvent): void,
    (e: 'on-paste', data: ClipboardEvent): void,
    (e: 'on-focus'): void,
    (e: 'on-blur'): void,
  }>()

  const inputRef = ref<HTMLInputElement>()
  const model = computed({
    get: () => props.value ?? '',
    set: (newValue) => {
      // if not numeric, replace with empty string
      if (!newValue.match(/^\d+$/)) {
        newValue = ''
      }
      emit('on-change', newValue)
    },
  })

  watch(
    () => props.focus,
    (newFocusValue, oldFocusValue) => {
      // Check if focusedInput changed
      // Prevent calling function if input already in focus
      if (oldFocusValue !== newFocusValue && inputRef.value && props.focus) {
        inputRef.value.focus()
        inputRef.value.select()
      }
    },
  )
  const handleOnKeyDown = (event: KeyboardEvent) => {
    emit('on-keydown', event)
  }
  const handleOnPaste = (event: ClipboardEvent) => {
    emit('on-paste', event)
  }
  const handleOnFocus = () => {
    inputRef.value?.select()
    emit('on-focus')
  }
  const handleOnBlur = () => {
    emit('on-blur')
  }
</script>
<template>
  <div class="flex items-center">
    <input
      ref="inputRef"
      v-model="model"
      type="text"
      inputmode="numeric"
      autocomplete="off"
      min="0"
      max="9"
      maxlength="1"
      pattern="[0-9]"
      class="block h-10 w-10 border rounded text-center text-sm"
      @keydown="handleOnKeyDown"
      @paste="handleOnPaste"
      @focus="handleOnFocus"
      @blur="handleOnBlur">
  </div>
</template>
