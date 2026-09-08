<script setup lang="ts">
  import { RouterView } from 'vue-router'

  const appName = __APP_NAME__
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <app-background />

    <app-theme-toggle floating />

    <div class="relative min-h-screen flex items-center justify-center px-4 py-10">
      <div class="max-w-md w-full space-y-8">
        <div class="flex flex-col items-center">
          <div class="mb-4 size-12 flex items-center justify-center rounded-xl from-primary to-orange-500 bg-gradient-to-br shadow-lg shadow-orange-500/20">
            <app-icon
              icon="lucide:book-open"
              class="size-8 text-white" />
          </div>
          <h1 class="text-3xl font-bold">
            {{ appName }}
          </h1>
        </div>

        <router-view />
      </div>
    </div>
  </div>
</template>
