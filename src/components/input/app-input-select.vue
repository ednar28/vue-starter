<script setup lang="ts">
  import { nanoid } from 'nanoid'
  import { computed, ref, type SelectHTMLAttributes } from 'vue'
  import AppInputLabel from './app-input-label.vue'

  const emit = defineEmits<{
    (e: 'changed', data: SelectHTMLAttributes['value']): void,
    (e: 'update:modelValue', data: SelectHTMLAttributes['value']): void,
  }>()

  const props = defineProps<{
    modelValue?: SelectHTMLAttributes['value'],
    id?: string,
    disabled?: boolean,
    label?: string,
    required?: boolean,
    error?: string | string[],
    placeholder?: string,
    loading?: boolean,
  }>()

  const modelValue = computed({
    // Map null/undefined to empty string for proper required behavior
    get: () => (props.modelValue == null ? '' : props.modelValue),
    set: (value) => {
      // When cleared back to placeholder, emit null to parent
      emit('update:modelValue', value === '' ? null : value)
    },
  })

  const focus = ref(false)

  const defaultId = nanoid()
  const inputId = computed(() => props.id ?? defaultId)
</script>

<template>
  <div>
    <app-input-label
      :for-id="inputId"
      :label="props.label"
      :required="props.required" />
    <div
      class="form-input relative cursor-pointer overflow-hidden"
      :class="{
        'input-ring': focus,
        'cursor-not-allowed bg-gray-50 dark:bg-white/5': disabled || loading,
        '!border-primary': error === '' || error,
      }">
      <div
        class="pointer-events-none absolute inset-y-0 left-2 z-20 flex items-center text-xs text-gray-500 dark:text-gray-400"
        :class="{ 'w-6': $slots.icon, 'w-1': !$slots.icon }">
        <slot name="icon"></slot>
      </div>
      <select
        :id="inputId"
        ref="selectRef"
        v-model="modelValue"
        :required="required"
        class="inset-0 z-10 h-full w-full bg-transparent !absolute"
        :class="{
          'pl-8': $slots.icon,
          'cursor-not-allowed': disabled || loading,
        }"
        :disabled="disabled || loading"
        @focus="focus = true"
        @blur="focus = false"
        @change="emit('changed', $event)">
        <option
          v-if="placeholder"
          value=""
          disabled>
          {{ loading ? 'Tunggu sebentar...' : placeholder }}
        </option>
        <slot></slot>
      </select>
      <select
        class="ghost-select h-full w-full cursor-none text-transparent"
        disabled>
        <slot></slot>
      </select>

      <div
        class="absolute inset-y-0 right-2 z-10 flex items-center text-xs text-gray-500 dark:text-gray-400"
        :class="{
          'pointer-events-none': !modelValue,
        }">
        <app-icon
          v-if="loading"
          icon="lucide:loader"
          class="animate-spin" />
        <app-button
          v-else-if="modelValue"
          variant="none"
          type="icon"
          :disabled="disabled"
          class="pb-0.1"
          :class="{
            'cursor-not-allowed': disabled,
            'cursor-pointer': !disabled,
          }"
          @click="modelValue = ''">
          <app-icon icon="lucide:x" />
        </app-button>
        <app-icon
          v-else
          icon="lucide:chevron-down" />
      </div>
    </div>
    <app-input-error-message :message="error" />
  </div>
</template>

<style lang="postcss" scoped>
  select {
    @apply block flex-1 cursor-pointer appearance-none rounded pl-2 pr-7 text-sm;
    @apply bg-transparent text-gray-900 dark:text-gray-100;
  }

  option {
    @apply bg-white text-gray-900 dark:bg-surface dark:text-gray-100;
  }

  select.ghost-select {
    @apply text-transparent;
  }
</style>
