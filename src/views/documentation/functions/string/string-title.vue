<script setup lang="ts">
  import { stringTitle } from '@/functions/string'

  const code = [
    "import { stringTitle } from '@/functions/string'",
    '',
    "stringTitle('john doe') // 'John Doe'",
    "stringTitle('vue starter kit') // 'Vue Starter Kit'",
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="stringTitle"
    description="Mengubah setiap kata agar huruf pertamanya menjadi uppercase."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ stringTitle('john doe') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ stringTitle('vue starter kit') }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
