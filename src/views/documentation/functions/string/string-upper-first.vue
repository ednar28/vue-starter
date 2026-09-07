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
      <app-doc-result>
        <code class="text-sm font-mono">{{ stringUpperFirst('hello') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ stringUpperFirst('world') }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
