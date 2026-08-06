<script setup lang="ts">
  import { ref } from 'vue'
  import DocumentationFooter from './documentation-footer.vue'
  import DocumentationSidebar from './documentation-sidebar.vue'

  const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Mobile header -->
    <header class="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 px-4 py-3 backdrop-blur-xl lg:hidden">
      <div class="flex items-center justify-between">
        <h1 class="text-lg text-gray-900 font-semibold">
          Dokumentasi
        </h1>
        <button
          class="rounded-xl p-2 text-gray-500 transition-all active:scale-95 hover:bg-gray-100 hover:text-gray-700"
          @click="sidebarOpen = !sidebarOpen">
          <app-icon
            icon="lucide:menu"
            class="h-5 w-5" />
        </button>
      </div>
    </header>

    <div class="flex">
      <documentation-sidebar
        :sidebar-open="sidebarOpen"
        @close="sidebarOpen = false" />

      <!-- Mobile sidebar overlay -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm lg:hidden"
        @click="sidebarOpen = false"></div>

      <!-- Main content -->
      <main class="min-w-0 flex-1">
        <div class="container mx-auto py-10">
          <router-view />
        </div>
        <documentation-footer />
      </main>
    </div>
  </div>
</template>
