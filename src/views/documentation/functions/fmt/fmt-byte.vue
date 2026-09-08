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
      <app-doc-result>
        <code class="text-sm font-mono">{{ fmt.byte(1024) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.byte(1048576) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.byte(1073741824) }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
