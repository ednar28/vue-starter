<script setup lang="ts">
  import DOMPurify from 'dompurify'
  import { computed } from 'vue'

  const props = defineProps<{
    text?: string,
  }>()

  const content = computed(() => DOMPurify.sanitize(props.text ?? ''))
</script>

<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="editor-preview"
      v-html="content"></div>
  </div>
</template>
