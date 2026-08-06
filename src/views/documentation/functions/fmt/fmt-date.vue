<script setup lang="ts">
  import { fmt } from '@/functions'

  const code = [
    "import { fmt } from '@/functions'",
    '',
    'fmt.date(new Date()) // "29 Jul 2026"',
    "fmt.date(new Date(), 'dd/MM/yyyy') // '29/07/2026'",
    "fmt.date(new Date(), 'yyyy-MM-dd HH:mm') // '2026-07-29 09:01'",
    'fmt.dateLong(new Date()) // "Selasa, 29 Juli 2026 09:01"',
    'fmt.dateShort(new Date()) // "09:01" (if today)',
    'fmt.dateRelative(new Date()) // "beberapa detik yang lalu"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Date Formatter"
    description="Format tanggal menggunakan <a href='https://date-fns.org/' target='_blank' class='text-primary underline underline-offset-2 hover:text-primary-600'>date-fns</a> dengan locale Indonesia. Lihat <a href='https://date-fns.org/docs/format' target='_blank' class='text-primary underline underline-offset-2 hover:text-primary-600'>dokumentasi format tokens</a>."
    :code="code">
    <div class="space-y-3">
      <div class="rounded-lg bg-gray-50 p-4">
        <p class="mb-2 text-xs text-gray-600 font-semibold">
          Contoh Hasil:
        </p>
        <code class="text-sm text-gray-700">{{ fmt.date(new Date()) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.date(new Date(), 'dd/MM/yyyy') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.date(new Date(), 'yyyy-MM-dd HH:mm') }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.dateLong(new Date()) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.dateShort(new Date()) }}</code>
      </div>
      <div class="rounded-lg bg-gray-50 p-4">
        <code class="text-sm text-gray-700">{{ fmt.dateRelative(new Date()) }}</code>
      </div>
    </div>
  </app-doc-section>
</template>
