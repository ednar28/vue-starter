<script setup lang="ts">
  defineProps<{
    label: string,
    direction?: 'ltr' | 'rtl',
    activeDevice?: 'desktop' | 'tablet' | 'mobile',
    activeTheme?: 'light' | 'dark',
  }>()
</script>
<template>
  <div
    :class="[
      'mx-auto overflow-hidden rounded-[22px] border shadow-sm transition-all duration-300',
      activeDevice === 'desktop' ? 'max-w-4xl' : '',
      activeDevice === 'tablet' ? 'max-w-md' : '',
      activeDevice === 'mobile' ? 'max-w-sm' : '',
      activeTheme === 'dark' ? 'bg-slate-950 text-slate-100 border-slate-800' : 'bg-white text-slate-900 border-gray-200'
    ]">
    <div
      class="flex items-center justify-between border-b px-4 py-3">
      <div class="flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
      </div>
      <span class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500 font-semibold tracking-[0.24em] uppercase">
        {{ label }} theme
      </span>
    </div>
    <div
      class="p-6"
      :dir="direction">
      <slot></slot>
    </div>
  </div>
</template>
