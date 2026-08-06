<script setup lang="ts">
  const code = [
    '// app-modal',
    'title?: string      // judul modal',
    '',
    '// app-modal-slide-bottom',
    'title?: string      // judul modal',
    'isSmall?: boolean   // ukuran kecil untuk modal slide',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description=""
    :code="code">
    <app-props-table
      :rows="[
        { name: 'title', type: 'string', desc: 'Judul modal yang tampil di header' },
        { name: 'isSmall', type: 'boolean', desc: 'slide-bottom only: Ukuran kecil, gunakan lg:max-w-md' },
      ]" />
  </app-doc-section>
</template>
