<script setup lang="ts">
  defineProps<{
    title: string,
    description: string,
    badge?: string,
  }>()
</script>

<template>
  <header class="mb-10">
    <app-badge
      :label="badge || 'Dokumentasi'"
      :icon="true" />
    <h1 class="text-3xl text-gray-900 font-bold tracking-tight lg:text-5xl sm:text-4xl">
      {{ title }}
    </h1>
    <p class="mt-4 max-w-2xl text-base text-gray-500 leading-relaxed sm:text-lg">
      <app-preview-html :text="description" />
    </p>
    <div class="mt-6 h-px w-20 from-primary/40 to-transparent bg-gradient-to-r"></div>
  </header>
</template>
