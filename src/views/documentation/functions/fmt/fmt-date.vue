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
      <app-doc-result>
        <code class="text-sm font-mono">{{ fmt.date(new Date()) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.date(new Date(), 'dd/MM/yyyy') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.date(new Date(), 'yyyy-MM-dd HH:mm') }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.dateLong(new Date()) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.dateShort(new Date()) }}</code>
      </app-doc-result>
      <app-doc-result hide-label>
        <code class="text-sm font-mono">{{ fmt.dateRelative(new Date()) }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
