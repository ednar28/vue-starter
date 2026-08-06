<script setup lang="ts">
  import { reactive } from 'vue'
  import { useAppModal } from '@/components/modal'

  const { open: openFormModal, close: closeFormModal } = useAppModal('formModal', () => resetForm())
  const formData = reactive({
    name: '',
    email: '',
  })

  const resetForm = () => {
    formData.name = ''
    formData.email = ''
  }

  const handleSubmit = () => {
    alert('Form submitted: ' + JSON.stringify(formData))
    closeFormModal()
  }

  const code = [
    '<app-button @click="openModal()">',
    '  Open Form Modal',
    '</app-button>',
    '',
    '<app-modal ref="modal" title="Form Modal">',
    '  <app-modal-form @submit="handleSubmit">',
    '    <app-input',
    '      v-model="formData.name"',
    '      label="Name"',
    '      placeholder="cth: Rizky"',
    '      required',
    '    />',
    '    <app-input',
    '      v-model="formData.email"',
    '      type="email"',
    '      label="Email"',
    '      placeholder="cth: rizky@example.com"',
    '      required',
    '    />',
    '  </app-modal-form>',
    '',
    '  <app-modal-footer>',
    '    <app-button variant="info" @click="modal?.close()">',
    '      Cancel',
    '    </app-button>',
    '    <app-button type="submit" @click="handleSubmit">',
    '      Submit',
    '    </app-button>',
    '  </app-modal-footer>',
    '</app-modal>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Modal with Form"
    description="Modal yang berisi form input untuk mengumpulkan data dari user."
    :code="code">
    <div class="flex items-center space-x-4">
      <app-button
        @click="openFormModal()">
        Open Form Modal
      </app-button>
    </div>

    <app-modal
      ref="formModal"
      title="Form Modal">
      <app-modal-form @submit="handleSubmit">
        <app-input
          v-model="formData.name"
          v-focus
          label="Name"
          placeholder="cth: Rizky"
          required />
        <app-input
          v-model="formData.email"
          type="email"
          label="Email"
          placeholder="cth: rizky@example.com"
          required />
      </app-modal-form>

      <app-modal-footer>
        <app-button
          variant="info"
          @click="closeFormModal()">
          Cancel
        </app-button>
        <app-button
          type="submit"
          @click="handleSubmit">
          Submit
        </app-button>
      </app-modal-footer>
    </app-modal>
  </app-doc-section>
</template>
