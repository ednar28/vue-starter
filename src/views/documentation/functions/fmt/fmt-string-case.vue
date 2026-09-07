<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.kebabCase("hello world") // "hello-world"',
    'fmt.titleCase("hello world") // "Hello World"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="String Case Formatter"
    description="Mengubah format string ke kebab-case atau Title Case."
    :code="code">
    <div class="space-y-3">
      <app-doc-result>
        <code class="text-sm font-mono">{{ fmt.kebabCase('hello world') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.titleCase('hello world') }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
