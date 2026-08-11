<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.duration(50) // "0:50"',
    'fmt.duration(150) // "2:30"',
    'fmt.duration(3600) // "1:00:00"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Duration Formatter"
    description="Mengubah detik menjadi format H:M:SS."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ fmt.duration(50) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.duration(150) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.duration(3600) }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
