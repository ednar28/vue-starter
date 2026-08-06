<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.byte(1024) // "1 KB"',
    'fmt.byte(1048576) // "1 MB"',
    'fmt.byte(1073741824) // "1 GB"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Byte Formatter"
    description="Mengubah angka byte menjadi format yang mudah dibaca (KB, MB, GB, dll)."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ fmt.byte(1024) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.byte(1048576) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.byte(1073741824) }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
