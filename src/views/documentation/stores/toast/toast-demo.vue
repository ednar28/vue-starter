<script setup lang="ts">
  import { useToastStore } from '@/stores/toast'

  const toast = useToastStore()
</script>

<template>
  <app-doc-section
    title="Demo"
    description="Klik tombol di bawah untuk menampilkan berbagai varian toast notification."
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome>
    <div class="flex gap-2">
      <app-button
        variant="info"
        @click="toast.add('Pesan default tanpa tipe khusus')">
        Info
      </app-button>
      <app-button
        variant="success"
        @click="toast.success('Operasi berhasil dilakukan')">
        Success
      </app-button>
      <app-button
        variant="primary"
        @click="toast.warning('Peringatan penting', 'Periksa data Anda')">
        Warning
      </app-button>
      <app-button
        variant="danger"
        @click="toast.danger('Terjadi kesalahan', 'Silakan coba lagi')">
        Danger
      </app-button>
    </div>
  </app-doc-section>
</template>
