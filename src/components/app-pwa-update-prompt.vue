<script setup lang="ts">
  // https://vite-plugin-pwa.netlify.app/frameworks/vue.html#periodic-sw-updates
  import { useLocalStorage } from '@vueuse/core'
  import { useRegisterSW } from 'virtual:pwa-register/vue'
  import { ref, watchEffect } from 'vue'
  import { useAppModal } from './modal'

  const { needRefresh, updateServiceWorker } = useRegisterSW()

  const updating = ref(false)
  const updatePromptShownAt = useLocalStorage('update_prompt_shown_at', 0)

  const btnUpdateClicked = async () => {
    updating.value = true
    try {
      await updateServiceWorker()
    } catch (error) {
      console.log(error)
      window.location.reload()
    }
  }

  const { modal, open, close } = useAppModal()
  const closePrompt = () => {
    close()
    updatePromptShownAt.value = Date.now()
  }

  const ASK_AGAIN_AFTER = 24 * 60 * 60 * 1000 // 24 hours in miliseconds
  watchEffect(() => {
    if (needRefresh.value && updatePromptShownAt.value + ASK_AGAIN_AFTER < Date.now()) {
      open()
    }
  })
</script>

<template>
  <app-modal
    ref="modal"
    title="Update Tersedia">
    <app-modal-footer>
      <app-button
        variant="secondary"
        :disabled="updating"
        :class="{ 'cursor-not-allowed': updating }"
        @click="closePrompt()">
        Lain kali
      </app-button>
      <app-button
        :loading="updating"
        :class="{ 'cursor-not-allowed': updating }"
        @click="btnUpdateClicked">
        Update
      </app-button>
    </app-modal-footer>
  </app-modal>
</template>
