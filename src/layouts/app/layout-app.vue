<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <div class="absolute inset-0 from-orange-50 via-white to-orange-50/30 bg-gradient-to-br"></div>
    <div class="absolute h-80 w-80 rounded-full bg-orange-200/20 blur-3xl -right-40 -top-40"></div>
    <div class="absolute h-80 w-80 rounded-full bg-orange-300/10 blur-3xl -bottom-32 -left-40"></div>

    <div class="relative mx-auto max-w-5xl px-6 py-10">
      <router-view />
    </div>
  </div>
</template>
