<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.duration(50) // "0:50"',
    'fmt.duration(150) // "2:30"',
    'fmt.duration(3600) // "1:00:00"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Duration Formatter"
    description="Mengubah detik menjadi format H:M:SS."
    :code="code">
    <div class="space-y-3">
      <app-doc-result>
        <code class="text-sm font-mono">{{ fmt.duration(50) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.duration(150) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.duration(3600) }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
