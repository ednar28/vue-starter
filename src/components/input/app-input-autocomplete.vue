<script setup lang="ts">
  import { nanoid } from 'nanoid'

  const emit = defineEmits<{
    (e: 'keydown', event: KeyboardEvent): void,
  }>()

  defineOptions({
    inheritAttrs: false,
  })
  const id = nanoid()
  const model = defineModel<string>({ required: true })
</script>

<template>
  <app-input
    v-model="model"
    v-bind="$attrs"
    :list="id"
    @keydown="emit('keydown', $event)" />
  <datalist :id="id">
    <slot></slot>
  </datalist>
</template>
