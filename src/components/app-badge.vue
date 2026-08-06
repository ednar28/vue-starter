<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    label: string,
    icon?: boolean,
    variant?: 'primary' | 'warning' | 'danger' | 'info' | 'success',
  }>()

  const variantClasses = {
    primary: 'bg-primary/10 text-primary ring-primary/20',
    warning: 'bg-amber-50 text-amber-700 ring-amber-200',
    danger: 'bg-red-50 text-red-700 ring-red-200',
    info: 'bg-blue-50 text-blue-700 ring-blue-200',
    success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  }

  const iconClasses = {
    primary: 'bg-primary',
    warning: 'bg-amber-700',
    danger: 'bg-red-700',
    info: 'bg-blue-700',
    success: 'bg-emerald-700',
  }

  const v = computed(() => props.variant || 'primary')
</script>

<template>
  <div :class="['mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide ring-1', variantClasses[v]]">
    <span
      v-if="icon"
      :class="['h-1.5 w-1.5 rounded-full', iconClasses[v]]"></span>
    {{ label }}
  </div>
</template>
