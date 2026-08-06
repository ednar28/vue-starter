<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    multiple?: boolean,
    accept?: string,
  }>()

  const emit = defineEmits<{
    (e: 'change', files: File[]): void,
  }>()

  const onChange = (event: Event) => {
    const files = (event.target as HTMLInputElement).files
    if (files) {
      emit('change', Array.from(files))
    }
    if (refInput.value) {
      refInput.value.value = ''
    }
  }

  const refInput = ref<HTMLInputElement>()
  const open = () => {
    refInput.value?.click()
  }
</script>

<template>
  <div>
    <input
      ref="refInput"
      type="file"
      :multiple="multiple"
      :accept="accept"
      class="hidden"
      @change="onChange">
    <slot :open="open"></slot>
  </div>
</template>
