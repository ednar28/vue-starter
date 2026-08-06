<script setup lang="ts">
  import VCodeBlock from '@wdns/vue-code-block'

  const { code } = defineProps<{ code: string }>()
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
