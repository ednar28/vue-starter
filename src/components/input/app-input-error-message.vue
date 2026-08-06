<script setup lang="ts">
  import { computed } from 'vue'
  import { stringUpperFirst } from '@/functions/string'

  const props = defineProps<{ message?: string | string[] }>()

  const message = computed(() => {
    if (Array.isArray(props.message) && props.message.length) {
      return stringUpperFirst(props.message[0])
    }

    if (typeof props.message === 'string' && props.message && props.message != '') {
      return stringUpperFirst(props.message)
    }

    return null
  })
</script>

<template>
  <span class="text-left text-xs text-danger-500">{{ message }}</span>
</template>

<style lang="postcss" scoped>

</style>
