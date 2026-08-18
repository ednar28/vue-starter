<script setup lang="ts">
  defineProps<{
    title: string,
    icon: string,
    description: string,
    packages: string[],
  }>()
</script>

<template>
  <div class="relative overflow-hidden border border-gray-100 rounded-2xl from-white to-gray-50 bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
    <div class="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 -mr-12 -mt-12"></div>

    <div class="relative z-10">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-primary/10">
          <app-icon
            :icon="icon"
            class="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 class="text-sm text-gray-900 font-semibold">
            {{ title }}
          </h3>
          <p class="text-xs text-gray-500 leading-tight">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="space-x-2 space-y-2">
        <div
          v-for="pkg in packages"
          :key="pkg"
          class="inline-block rounded-lg bg-gray-100 px-2.5 py-1.5 text-[11px] text-gray-600 font-mono">
          {{ pkg }}
        </div>
      </div>
    </div>
  </div>
</template>
