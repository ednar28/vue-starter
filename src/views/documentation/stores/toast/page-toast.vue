<script setup lang="ts">
  import ToastDemo from './toast-demo.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="useToastStore"
      badge="Stores"
      description="Pinia store untuk global toast notification. Cara singkat, tanpa harus atur context/component lain." />

    <toast-demo />
  </div>
</template>
