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
    <app-doc-result hide-label>
      <p class="text-xs">
        Async function — mengembalikan <code>Promise&lt;string | null&gt;</code>.
      </p>
    </app-doc-result>
  </app-doc-section>
</template>
