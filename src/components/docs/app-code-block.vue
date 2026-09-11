<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  const { code } = defineProps<{ code: string }>()

  const VCodeBlock = defineAsyncComponent(() => import('@wdns/vue-code-block'))
</script>

<template>
  <div>
    <v-code-block
      highlightjs
      lang="html"
      theme="monokai-sublime"
      :code="code" />
  </div>
</template>

<style lang="postcss" scoped>

</style>
