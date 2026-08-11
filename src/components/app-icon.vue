<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  defineProps<{
    icon: string,
  }>()
</script>

<template>
  <icon
    :icon="icon"
    class="icon inline-block" />
</template>
