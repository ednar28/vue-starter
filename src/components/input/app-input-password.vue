<script setup lang="ts">
  import { computed, ref } from 'vue'

  const props = defineProps<{
    label?: string,
    modelValue: string,
    error?: string | string[],
    autocomplete?: string,
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void,
  }>()

  const value = computed({
    set: (text: string) => {
      emit('update:modelValue', text)
    },
    get: () => props.modelValue,
  })

  const showPassword = ref(false)
</script>

<template>
  <app-input
    v-model="value"
    :label="label"
    :autocomplete="autocomplete"
    :type="showPassword ? 'text' : 'password'"
    required
    :error="error">
    <template
      v-if="value"
      #inline>
      <button
        type="button"
        class="absolute right-2 z-10 flex cursor-pointer select-none items-center justify-center p-1 text-gray-400 transition-colors dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        @click="showPassword = !showPassword">
        <app-icon :icon="showPassword ? 'lucide:eye-off' : 'lucide:eye'" />
      </button>
    </template>
  </app-input>
</template>

<style lang="postcss" scoped>
  :deep() {
    input[type='password'],
    input[type='text'] {
      @apply pr-12;
    }
  }
</style>
