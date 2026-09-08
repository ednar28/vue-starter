<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { RouterView } from 'vue-router'
  import AppToast from '@/components/app-toast.vue'
  import { useAppStore } from '@/stores/app'
  import AppPwaUpdatePrompt from './components/app-pwa-update-prompt.vue'

  const appStore = useAppStore()

  onBeforeMount(() => {
    appStore.initTheme()
  })
</script>

<template>
  <router-view />
  <app-pwa-update-prompt />
  <app-toast />
</template>

<style lang="postcss" scoped>
</style>
