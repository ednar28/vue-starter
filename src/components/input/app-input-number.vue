<script setup lang="ts">
  import { nanoid } from 'nanoid'
  import { Money3Component as InputMoney } from 'v-money3'
  import { computed } from 'vue'
  import AppInputLabel from '@/components/input/app-input-label.vue'

  const props = defineProps<{
    modelValue: number,
    id?: string,
    max?: number,
    min?: number,
    label?: string,
    required?: boolean,
    disabled?: boolean,
    placeholder?: string,
    error?: string[],
    prefix?: string,
    suffix?: string,
    maxBy?:
      | 'tinyint'
      | 'utinyint'
      | 'smallint'
      | 'usmallint'
      | 'mediumint'
      | 'umediumint'
      | 'int'
      | 'uint'
      | 'bigint',
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void,
  }>()

  // https://github.com/jonathanpmartins/v-money3#properties
  const options = computed(() => ({
    decimal: ',',
    thousands: '.',
    precision: 0,
    min: props.min ?? 0,
    max: limitMax.value,
    // focusOnRight: true,
  }))

  const limitMax = computed(() => {
    if (props.max) {
      return props.max
    }

    const maxBy = props.maxBy ?? 'uint'
    switch (maxBy) {
    case 'tinyint':
      return 100 // 127
    case 'utinyint':
      return 255 // 255
    case 'smallint':
      return 30_000 // 32,767
    case 'usmallint':
      return 50_000 // 65,535
    case 'mediumint':
      return 5_000_000 // 8,388,607
    case 'umediumint':
      return 10_000_000 // 16,777,215
    case 'int':
      return 1_000_000_000 // 2,147,483,647
    case 'uint':
      return 1_000_000_000 // 4,294,967,295
    case 'bigint':
      return Number.MAX_SAFE_INTEGER
    default:
      return 4_000_000_000 // same as uint
    }
  })

  const defaultId = nanoid()
  const inputId = computed(() => props.id ?? defaultId)

  const textInput = computed({
    set: (val) => {
      emit('update:modelValue', Number(val))
    },
    get: () => props.modelValue,
  })
</script>

<template>
  <div>
    <app-input-label
      :for-id="inputId"
      :label="props.label"
      :required="props.required" />
    <div class="relative flex items-center">
      <input-money
        :id="inputId"
        v-model="textInput"
        v-select-on-focus
        v-bind="options"
        :disabled="disabled"
        class="form-input"
        autocomplete="off"
        :class="{ '!pl-10': prefix, '!pr-10': suffix }" />
      <span
        v-if="prefix"
        class="prefix">
        {{ prefix }}
      </span>
      <span
        v-if="suffix"
        class="suffix">
        {{ suffix }}
      </span>
    </div>
    <app-input-error-message :message="error" />
  </div>
</template>

<style lang="postcss" scoped>
  .prefix {
    @apply absolute left-4 text-gray-400 pointer-events-none text-sm z-10;
  }
  .input-has-text .prefix.suffix {
    @apply inline;
  }

  .suffix {
    @apply absolute right-4 text-gray-400 pointer-events-none text-sm z-10;
  }
</style>
