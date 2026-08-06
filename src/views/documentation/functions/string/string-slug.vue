<script setup lang="ts">
  import { slug } from '@/functions/string'

  const code = [
    "import { slug } from '@/functions/string'",
    '',
    "slug('Hello World') // 'hello-world'",
    "slug('Vue Starter Kit') // 'vue-starter-kit'",
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="slug"
    description="Mengubah string menjadi slug yang aman untuk URL."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ slug('Hello World') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ slug('Vue Starter Kit') }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
