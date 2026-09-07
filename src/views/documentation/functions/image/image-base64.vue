<script setup lang="ts">
  const code = [
    "import { base64ToBlob } from '@/functions/image/img'",
    '',
    'const blob = await base64ToBlob("data:image/webp;base64,...")',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="base64ToBlob"
    description="Mengubah string base64 menjadi Blob object."
    :code="code">
    <app-doc-result hide-label>
      <p class="text-xs">
        Async function — mengembalikan <code>Promise&lt;Blob&gt;</code>.
      </p>
    </app-doc-result>
  </app-doc-section>
</template>
