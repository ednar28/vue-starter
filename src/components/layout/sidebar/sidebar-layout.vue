<script setup lang="ts">
  import SidebarHeader from './sidebar-header.vue'
  import SidebarItem from './sidebar-item.vue'

  interface Props {
    sidebarOpen: boolean,
    navItems: SidebarGroup[],
    title?: string,
    subtitle?: string,
    icon?: string,
  }

  withDefaults(defineProps<Props>(), {
    title: __APP_NAME__,
    subtitle: undefined,
    icon: 'lucide:book-open',
  })

  const emit = defineEmits<{
    (e: 'close'): void,
  }>()
</script>

<template>
  <aside
    :class="[
      'fixed lg:sticky top-0 z-50 h-screen w-72 lg:w-72 bg-white border-r border-gray-100 shadow-[1px_0_16px_rgba(15,23,42,0.06)] overflow-y-auto transition-all duration-300 ease-out lg:translate-x-0 lg:max-h-screen dark:bg-surface dark:border-white/10 dark:shadow-none',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
    <div class="h-full flex flex-col">
      <slot name="header">
        <sidebar-header
          :title="title"
          :subtitle="subtitle"
          :icon="icon" />
      </slot>

      <nav class="flex-1 overflow-y-auto p-4 space-y-6">
        <div
          v-for="(group, index) in navItems"
          :key="index">
          <h3 class="mb-2 px-3 text-[11px] text-gray-400 font-semibold tracking-[0.08em] uppercase dark:text-gray-500">
            {{ group.category }}
          </h3>
          <ul class="list-none space-y-1">
            <sidebar-item
              v-for="item in group.items"
              :key="item.label"
              :label="item.label"
              :to="item.path"
              @close="emit('close')" />
          </ul>
        </div>
      </nav>

      <slot name="footer"></slot>
    </div>
  </aside>
</template>
