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
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ fmt.kebabCase('hello world') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.titleCase('hello world') }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
