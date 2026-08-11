<script setup lang="ts">
  import components from './sidebar/components'
  import functions from './sidebar/functions'
  import gettingStarted from './sidebar/getting-started'
  import stores from './sidebar/stores'

  defineProps<{
    sidebarOpen: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void,
  }>()

  const appName = __APP_NAME__
  const navItems = [
    gettingStarted,
    components,
    stores,
    functions,
  ]
</script>

<template>
  <aside
    :class="[
      'fixed lg:sticky top-0 z-50 h-screen w-72 lg:w-72 bg-[#0F172A] border-r border-white/5 overflow-y-auto transition-all duration-300 ease-out lg:translate-x-0 lg:max-h-screen',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
    <div class="h-full flex flex-col">
      <!-- Brand -->
      <div class="shrink-0 border-b border-white/5 p-6">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 flex items-center justify-center rounded-xl from-primary to-orange-500 bg-gradient-to-br shadow-lg shadow-orange-500/20">
            <app-icon
              icon="lucide:book-open"
              class="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 class="text-sm text-gray-100 font-semibold">
              {{ appName }}
            </h1>
            <p class="text-xs text-gray-500">
              Dokumentasi
            </p>
          </div>
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 overflow-y-auto p-4 space-y-6">
        <div
          v-for="(group, index) in navItems"
          :key="index">
          <h3 class="mb-2 px-3 text-xs text-gray-500 font-semibold tracking-wider uppercase">
            {{ group.category }}
          </h3>
          <ul class="list-none space-y-0.5">
            <li
              v-for="item in group.items"
              :key="item.path.name">
              <router-link
                :to="item.path"
                class="group flex items-center gap-3 rounded-xl px-6 py-2.5 text-sm text-gray-400 transition-all duration-200 active:scale-[0.98] hover:bg-white/10 hover:text-white"
                exact-active-class="bg-white/10 text-primary font-semibold shadow-sm shadow-orange-500/5"
                @click="emit('close')">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- GitHub link -->
      <div class="shrink-0 border-t border-white/5 p-4">
        <a
          href="https://github.com/ednar28/vue-starter"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white">
          <app-icon
            icon="lucide:github"
            class="h-4 w-4" />
          GitHub Repository
        </a>
      </div>
    </div>
  </aside>
</template>
