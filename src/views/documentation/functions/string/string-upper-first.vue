<script setup lang="ts">
  import { stringUpperFirst } from '@/functions/string'

  const code = [
    "import { stringUpperFirst } from '@/functions/string'",
    '',
    "stringUpperFirst('hello') // 'Hello'",
    "stringUpperFirst('world') // 'World'",
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="stringUpperFirst"
    description="Mengubah karakter pertama string menjadi uppercase."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ stringUpperFirst('hello') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ stringUpperFirst('world') }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
