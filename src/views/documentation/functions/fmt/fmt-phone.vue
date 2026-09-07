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
      <app-doc-result>
        <code class="text-sm font-mono">{{ fmt.phone('628123456789') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.phone('081234567890') }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
