<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import AppToast from '@/components/app-toast.vue'
  import AppPwaUpdatePrompt from './components/app-pwa-update-prompt.vue'
</script>

<template>
  <router-view />
  <app-pwa-update-prompt />
  <app-toast />
</template>

<style lang="postcss" scoped>
</style>
