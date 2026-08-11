<script setup lang="ts">
  const code = [
    '// @/components/modal',
    'function useAppModal(refModal = \'modal\', onBeforeOpen?) {',
    '  const modal = useTemplateRef(refModal)',
    '  const open = (...args) => {',
    '    onBeforeOpen?.(...args)',
    '    modal.value?.open()',
    '  }',
    '  const close = () => {',
    '    modal.value?.close()',
    '  }',
    '  return { modal, open, close }',
    '}',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="useAppModal"
    description="Hook untuk menghubungkan aksi tombol dengan modal melalui ref yang sudah terdefinisi."
    :code="code">
    <div class="border border-gray-200 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
      <p class="mb-2 font-medium">
        Fungsi utama:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>useAppModal(refModal, onBeforeOpen)</strong> membuat helper <code>open()</code> dan <code>close()</code> untuk modal.</li>
        <li><strong>refModal</strong> adalah nama ref modal yang ingin dipakai, default <code>modal</code>.</li>
        <li><strong>onBeforeOpen</strong> adalah callback opsional yang menerima argumen dari <code>open()</code> sebelum modal dibuka.</li>
        <li><strong>modal</strong> adalah ref instance modal, sedangkan <code>open()</code> dan <code>close()</code> dipakai untuk mengontrol tampilannya.</li>
      </ul>
    </div>
  </app-doc-section>
</template>
