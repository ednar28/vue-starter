<script setup lang="ts">
  import { computed, watchEffect } from 'vue'
  import { sanitizePhone } from '@/functions/fmt/phone'

  const props = defineProps<{
    label?: string,
    placeholder?: string,
    modelValue: string,
    error?: string | string[],
    required?: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void,
    (e: 'input', event: Event): void,
  }>()

  const value = computed({
    set: (text: string) => {
      emit('update:modelValue', sanitizePhone(text))
    },
    get: () => sanitizePhone(props.modelValue),
  })

  watchEffect(() => {
    emit('update:modelValue', sanitizePhone(props.modelValue))
  })
</script>

<template>
  <div>
    <app-input
      v-model="value"
      type="tel"
      :label="label"
      :placeholder="placeholder"
      :error="error"
      :required="required"
      @input="emit('input', $event)">
      <template #inline>
        <span class="prefix">+62</span>
      </template>
    </app-input>
  </div>
</template>

<style lang="postcss" scoped>
  :deep() {
    .prefix {
      @apply absolute left-4 text-gray-400 pointer-events-none text-sm;
    }
    .input-has-text .prefix {
      @apply inline;
    }
    input[type='tel'] {
      @apply pl-12;
    }
  }
</style>
