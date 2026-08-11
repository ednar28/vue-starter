<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { jsSearch } from '@/functions/string'

  const code = [
    "import { jsSearch } from '@/functions/string'",
    '',
    'const items = [',
    "  { id: 1, name: 'Jakarta' },",
    "  { id: 2, name: 'Bandung' },",
    "  { id: 3, name: 'Bogor' },",
    ']',
    '',
    "jsSearch('jak', items, (item) => item.name)",
    "// [{ id: 1, name: 'Jakarta' }]",
    '',
    "jsSearch('ban', items, (item) => item.name)",
    "// [{ id: 2, name: 'Bandung' }]",
  ].join('\n')

  const demoItems = [
    { id: 1, name: 'Jakarta' },
    { id: 2, name: 'Bandung' },
    { id: 3, name: 'Bogor' },
    { id: 4, name: 'Surabaya' },
    { id: 5, name: 'Semarang' },
  ]

  const searchQuery = ref('')

  const filteredItems = computed(() =>
    searchQuery.value ? jsSearch(searchQuery.value, demoItems, (item) => item.name) : demoItems,
  )
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="jsSearch"
    description="Filter array berdasarkan string pencarian. Case-insensitive dan mengabaikan spasi."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Demo Interaktif:
        </p>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Ketik untuk mencari..."
          class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
        <div class="mt-3 space-y-2">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="rounded bg-white p-2 text-sm text-gray-700 shadow-sm">
            {{ item.name }}
          </div>
          <div
            v-if="filteredItems.length === 0"
            class="text-sm text-gray-500 italic">
            Tidak ada hasil ditemukan
          </div>
        </div>
      </div>
    </div>
  </app-doc-section>
</template>
