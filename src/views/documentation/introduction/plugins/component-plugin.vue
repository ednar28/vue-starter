<script setup lang="ts">
  defineProps<{
    title: string,
    icon: string,
    description: string,
    packages: string[],
  }>()
</script>

<template>
  <app-card>
    <div class="relative z-10 mb-4 flex items-center gap-3">
      <div class="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
        <app-icon
          :icon="icon"
          class="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 class="text-sm text-gray-900 font-semibold dark:text-white">
          {{ title }}
        </h3>
        <p class="text-xs text-gray-500 leading-tight dark:text-gray-400">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="relative z-10 flex flex-wrap gap-2">
      <div
        v-for="pkg in packages"
        :key="pkg"
        class="rounded-lg bg-gray-100 px-2.5 py-1.5 text-[11px] text-gray-600 font-mono dark:bg-white/10 dark:text-gray-300">
        {{ pkg }}
      </div>
    </div>
  </app-card>
</template>
