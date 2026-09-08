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
      <app-doc-result>
        <code class="text-sm font-mono">{{ stringTitle('john doe') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ stringTitle('vue starter kit') }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
