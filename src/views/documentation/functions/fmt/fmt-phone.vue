<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.phone("628123456789") // "62-812-345-6789"',
    'fmt.phone("0812345678") // "081-234-5678"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Phone Formatter"
    description="Format nomor telepon dengan spacing untuk kemudahan membaca."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ fmt.phone('628123456789') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.phone('081234567890') }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
