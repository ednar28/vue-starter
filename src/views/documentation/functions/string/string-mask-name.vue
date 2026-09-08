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
      <app-doc-result>
        <code class="text-sm font-mono">{{ maskName('Budi') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ maskName('Jonathan') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ maskName('Jonathan', true) }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
