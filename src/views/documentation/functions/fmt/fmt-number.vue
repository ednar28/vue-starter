<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.number(2500000) // "2.500.000"',
    "fmt.number('1000') // '1.000'",
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Number Formatter"
    description="Format angka dengan separator ribuan sesuai locale Indonesia."
    :code="code">
    <div class="space-y-3">
      <app-doc-result>
        <code class="text-sm font-mono">{{ fmt.number(2500000) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.number('1000') }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
