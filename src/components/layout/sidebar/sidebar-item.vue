<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  defineProps<{
    label: string,
    to: RouteLocationRaw,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void,
  }>()
</script>

<template>
  <li>
    <router-link
      :to="to"
      class="group flex items-center gap-3 rounded-xl px-6 py-2.5 text-sm text-gray-400 transition-all duration-200 active:scale-[0.98] hover:bg-white/10 hover:text-white"
      exact-active-class="bg-white/10 text-primary font-semibold shadow-sm shadow-orange-500/5"
      @click="emit('close')">
      {{ label }}
    </router-link>
  </li>
</template>
