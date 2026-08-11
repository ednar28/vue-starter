<script setup lang="ts">
  import { useToastStore } from '@/stores/toast'

  const toast = useToastStore()

  const code = [
    "import { useToastStore } from '@/stores/toast'",
    '',
    'const toast = useToastStore()',
    "toast.add('Contoh Toast')",
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Demo"
    description="Klik tombol di bawah untuk menampilkan toast notification."
    :code="code"
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome>
    <app-button
      @click="toast.add('Contoh Toast')">
      Lihat Toast
    </app-button>
  </app-doc-section>
</template>
