<script setup lang="ts">
  import { maskName } from '@/functions/string'

  const code = [
    "import { maskName } from '@/functions/string'",
    '',
    "maskName('Budi') // 'B**i'",
    "maskName('Jonathan') // 'J******n'",
    "maskName('Jonathan', true) // '*****han'",
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="maskName"
    description="Menyamarkan nama. Default menampilkan karakter pertama dan terakhir. Opsi showLast menampilkan 3 karakter terakhir."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ maskName('Budi') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ maskName('Jonathan') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ maskName('Jonathan', true) }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
