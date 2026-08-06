<script setup lang="ts">
  import { nanoid } from 'nanoid'
  import { computed } from 'vue'
  import AppInputLabel from '@/components/input/app-input-label.vue'
  import { fmt } from '@/functions'

  const props = defineProps<{
    id?: string,
    modelValue: string,
    type?: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    error?: string | string[],
    maxLength?: number,
    rows?: number,
    disabled?: boolean,
    autocomplete?: string,
    list?: string,
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void,
    (e: 'keydown', event: KeyboardEvent): void,
  }>()

  const value = computed({
    set: (val) => {
      emit('update:modelValue', val)
    },
    get: () => props.modelValue,
  })

  const onInput = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement
    emit('update:modelValue', eventTarget.value)
  }

  const defaultId = nanoid()
  const inputId = computed(() => props.id ?? defaultId)

  defineOptions({
    inheritAttrs: false,
  })
</script>

<template>
  <div v-bind="$attrs">
    <app-input-label
      :for-id="inputId"
      :label="props.label"
      :required="props.required" />
    <div class="relative flex items-center">
      <textarea
        v-if="type === 'textarea'"
        :id="inputId"
        class="form-input min-h-20"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        :rows="rows ?? 3"
        :required="required"
        :maxlength="maxLength"
        @input="onInput"></textarea>
      <input
        v-else
        :id="inputId"
        class="form-input"
        :list="list"
        :disabled="disabled"
        :autocomplete="autocomplete ?? 'off'"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :required="required"
        :maxlength="maxLength"
        @input="onInput"
        @keydown="emit('keydown', $event)">
      <div
        v-if="maxLength !== undefined"
        class="absolute bottom-1 right-2 bg-white text-3xs text-gray-500">
        {{ fmt.number(maxLength - value.length) }}
      </div>
      <slot name="inline"></slot>
    </div>
    <slot></slot>
    <app-input-error-message :message="error" />
  </div>
</template>

<style lang="postcss" scoped>
  input[list]::-webkit-calendar-picker-indicator,
  input[list]::-webkit-list-button {
    display: none !important;
  }
</style>
