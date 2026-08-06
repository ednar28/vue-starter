<script setup lang="ts">
  import { nanoid } from 'nanoid'
  import { computed } from 'vue'
  import { fmt } from '@/functions'

  const props = defineProps<{
    id?: string,
    type?: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    error?: string | string[],
    disabled?: boolean,
    modelValue?: Date | string,
    min?: Date,
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value?: Date | string): void,
  }>()

  const model = computed({
    set: (val) => {
      emit('update:modelValue', val ? val : undefined)
    },
    get: () => {
      if (props.type === 'datetime-local') {
        if (props.modelValue) {
          return fmt.date(props.modelValue, "yyyy-MM-dd'T'HH:mm")
        }

        return ''
      }

      if (props.modelValue) {
        return fmt.date(props.modelValue, 'yyyy-MM-dd')
      }

      return ''
    },
  })

  const formattedDate = computed(() => {
    if (props.modelValue) {
      if (props.type === 'datetime-local') {
        return fmt.dateLong(props.modelValue)
      }
      return fmt.date(props.modelValue, 'd MMM yyyy')
    }

    return ''
  })

  const defaultId = nanoid()
  const inputId = computed(() => props.id ?? 'text-' + defaultId)

  const openDatePicker = () => {
    const el = document.getElementById(inputId.value)
    if (el && el instanceof HTMLInputElement) {
      el.showPicker()
    }
  }
</script>

<template>
  <div class="relative">
    <input
      :id="inputId"
      v-model="model"
      :type="type ?? 'date'"
      class="absolute inset-0 opacity-0 -z-1"
      :disabled="disabled"
      :required="required"
      :min="min ? fmt.date(min, 'yyyy-MM-dd') : undefined"
      tabindex="9999">
    <app-input
      :id="inputId"
      :model-value="formattedDate"
      :label="label"
      :error="error"
      :required="required"
      readonly
      class="min-w-32"
      :placeholder="placeholder"
      @focus="openDatePicker()"
      @click="openDatePicker()">
      <template #inline>
        <div
          class="datepicker-icon"
          :class="{
            'text-gray-300': disabled,
          }">
          <app-icon icon="lucide:calendar" />
        </div>
      </template>
    </app-input>
  </div>
</template>

<style lang="postcss" scoped>
  .datepicker-icon {
    @apply absolute bottom-0 flex items-center text-sm leading-0 pr-2 right-0 pointer-events-none;
    @apply text-gray;
    @apply h-9; /* height of form-input */
  }
</style>
