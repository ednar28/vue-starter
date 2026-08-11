<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'submit'): void,
  }>()
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <div class="space-y-4">
      <slot></slot>
    </div>
  </form>
</template>
