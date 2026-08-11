<script setup lang="ts">
  import { useAppModal } from '@/components/modal'

  const { open: openDefaultModal, close: closeDefaultModal } = useAppModal('defaultModal')

  const code = [
    '<app-button @click="openDefaultModal()">',
    '  Open Modal',
    '</app-button>',
    '',
    '<app-modal ref="defaultModal" title="Modal Title">',
    '  <app-modal-content class="text-gray-700">',
    '    Modal content here...',
    '  </app-modal-content>',
    '  <app-modal-footer>',
    '    <app-button variant="info" @click="closeDefaultModal()">',
    '      Cancel',
    '    </app-button>',
    '    <app-button @click="closeDefaultModal()">',
    '      Confirm',
    '    </app-button>',
    '  </app-modal-footer>',
    '</app-modal>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default Modal"
    description="Modal default muncul di tengah layar dengan animasi slide down."
    :code="code">
    <div class="flex items-center space-x-4">
      <app-button
        @click="openDefaultModal()">
        Open Default Modal
      </app-button>
    </div>

    <app-modal
      ref="defaultModal"
      title="Default Modal">
      <app-modal-content class="text-gray-700">
        Ini adalah contoh modal default. Modal ini muncul di tengah layar dengan overlay gelap di belakangnya.
      </app-modal-content>
      <app-modal-footer>
        <app-button
          variant="info"
          @click="closeDefaultModal()">
          Cancel
        </app-button>
        <app-button
          @click="closeDefaultModal()">
          Confirm
        </app-button>
      </app-modal-footer>
    </app-modal>
  </app-doc-section>
</template>
