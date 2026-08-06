<script setup lang="ts">
  import { useAppModal } from '@/components/modal'

  const { open: openSlideModal, close: closeSlideModal } = useAppModal('slideModal')

  const code = [
    '<app-button @click="openModal()">',
    '  Open Slide Modal',
    '</app-button>',
    '',
    '<app-modal-slide-bottom ref="modal" title="Slide Modal">',
    '  <app-modal-content class="text-gray-700">',
    '    Slide modal content...',
    '  </app-modal-content>',
    '  <app-modal-footer>',
    '    <app-button variant="info" @click="modal?.close()">',
    '      Close',
    '    </app-button>',
    '  </app-modal-footer>',
    '</app-modal-slide-bottom>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Slide Bottom Modal"
    description="Modal slide dari bawah layar, cocok untuk mobile experience."
    :code="code">
    <div class="flex items-center space-x-4">
      <app-button
        @click="openSlideModal()">
        Open Slide Modal
      </app-button>
    </div>

    <app-modal-slide-bottom
      ref="slideModal"
      title="Slide Bottom Modal">
      <app-modal-content class="text-gray-700">
        Modal ini muncul dengan animasi slide dari bawah layar. Sangat cocok untuk tampilan mobile.
      </app-modal-content>
      <app-modal-footer>
        <app-button
          variant="info"
          @click="closeSlideModal()">
          Close
        </app-button>
      </app-modal-footer>
    </app-modal-slide-bottom>
  </app-doc-section>
</template>
