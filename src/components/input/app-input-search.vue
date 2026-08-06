<script setup lang="ts">
  import { watchDebounced } from '@vueuse/core'

  const modelValue = defineModel<string>({ default: '' })

  defineProps<{
    placeholder?: string,
    loading?: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'submit', value: string): void,
  }>()

  watchDebounced(
    modelValue,
    () => {
      emit('submit', modelValue.value)
    },
    { debounce: 500 },
  )
</script>

<template>
  <app-input
    v-model="modelValue"
    type="search"
    :placeholder="placeholder ?? 'Cari...'"
    @keyup.enter="emit('submit', modelValue)">
    <template #inline>
      <div class="absolute inset-y-0 left-3 z-10 flex items-center text-sm text-gray">
        <app-icon icon="lucide:search" />
      </div>
      <div class="absolute inset-y-0 right-2 z-10 flex items-center text-xs text-gray">
        <div
          v-if="loading"
          class="h-6 w-6 flex items-center justify-center">
          <app-icon
            icon="lucide:loader"
            class="animate-spin" />
        </div>
        <app-button
          v-else-if="modelValue"
          variant="secondary"
          type="icon"
          @click="modelValue = ''">
          <app-icon icon="lucide:x" />
        </app-button>
      </div>
    </template>
  </app-input>
</template>

<style lang="postcss" scoped>
  :deep() input {
    @apply pl-9 pr-8 placeholder-shown:pr-4;
  }
</style>
