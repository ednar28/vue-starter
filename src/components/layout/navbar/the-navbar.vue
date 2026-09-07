<script setup lang="ts">
  interface Props {
    title?: string,
    menuIcon?: string,
  }

  withDefaults(defineProps<Props>(), {
    title: 'Dokumentasi',
    menuIcon: 'lucide:menu',
  })

  const emit = defineEmits<{
    (e: 'toggle-menu'): void,
  }>()
</script>

<template>
  <header class="sticky top-0 z-40 h-16 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
    <div class="container mx-auto h-full flex items-center justify-between">
      <h1 class="text-xl text-gray-900 font-semibold">
        {{ title }}
      </h1>
      <button
        type="button"
        class="rounded-xl p-2 text-gray-500 transition-all lg:hidden active:scale-95 hover:bg-gray-100 hover:text-gray-700"
        aria-label="Toggle menu"
        @click="emit('toggle-menu')">
        <app-icon
          :icon="menuIcon"
          class="h-5 w-5" />
      </button>
    </div>
  </header>
</template>
