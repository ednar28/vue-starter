<script setup lang="ts">
  import { ref } from 'vue'
  import TheFooter from '@/components/layout/footer/the-footer.vue'
  import TheNavbar from '@/components/layout/navbar/the-navbar.vue'
  import DocumentationSidebar from './documentation-sidebar.vue'

  const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-canvas">
    <div class="flex">
      <documentation-sidebar
        :sidebar-open="sidebarOpen"
        @close="sidebarOpen = false" />

      <!-- Mobile sidebar overlay -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm lg:hidden"
        @click="sidebarOpen = false"></div>

      <div class="min-w-0 flex-1">
        <the-navbar
          title="Dokumentasi"
          @toggle-menu="sidebarOpen = !sidebarOpen" />

        <!-- Main content -->
        <main>
          <div class="container mx-auto py-10">
            <router-view />
          </div>
          <the-footer />
        </main>
      </div>
    </div>
  </div>
</template>
