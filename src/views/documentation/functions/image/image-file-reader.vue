<script setup lang="ts">
  const code = [
    "import { filereader } from '@/functions/image/img'",
    '',
    'const base64 = await filereader(selectedFile)',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="filereader"
    description="Membaca file dan mengubahnya menjadi string base64."
    :code="code">
    <div class="rounded-lg bg-gray-50 p-4">
      <p class="text-xs text-gray-500">
        Async function — mengembalikan <code>Promise&lt;string | null&gt;</code>.
      </p>
    </div>
  </app-doc-section>
</template>
