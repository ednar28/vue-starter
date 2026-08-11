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
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ fmt.number(2500000) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.number('1000') }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
