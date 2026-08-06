<script setup lang="ts">
  const code = [
    '<app-modal>',
    '  <app-modal-content>  // konten utama, scrollable',
    '  <app-modal-footer>   // area tombol aksi',
    '</app-modal>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Slots"
    description=""
    :code="code">
    <app-slots-table
      :rows="[
        { name: 'default', desc: 'Konten modal (biasanya app-modal-content + app-modal-footer)' },
      ]" />
  </app-doc-section>
</template>
