<script setup lang="ts">
  import type { InputHTMLAttributes } from 'vue'
  import { computed } from 'vue'

  const props = defineProps<{
    modelValue: InputHTMLAttributes['checked'],
    value?: InputHTMLAttributes['value'],
    required?: boolean,
    disabled?: boolean,
    indeterminate?: boolean,
    label?: string,
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: InputHTMLAttributes['checked']): void,
  }>()

  const model = computed({
    set: (value) => {
      emit('update:modelValue', value)
    },
    get: () => props.modelValue,
  })

  const isIndeterminate = computed(() => {
    return props.indeterminate ?? false
  })
</script>

<template>
  <label :class="['flex items-center', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <input
      v-if="value === undefined"
      v-model="model"
      type="checkbox"
      :disabled="disabled"
      class="peer cursor-pointer"
      :required="required ?? false"
      :indeterminate.prop="isIndeterminate">
    <input
      v-else
      v-model="model"
      type="checkbox"
      :value="value"
      :required="required ?? false"
      :disabled="disabled"
      class="peer cursor-pointer"
      :indeterminate.prop="isIndeterminate">

    <div class="ml-2 text-sm peer-hover:text-black peer-disabled:opacity-40 peer-hover:peer-disabled:text-current">
      <template v-if="label">{{ label }}</template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </label>
</template>

<style lang="postcss" scoped>
  input {
    @apply accent-primary-600;
  }
</style>
