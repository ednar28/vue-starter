<script setup lang="ts">
  import { useModal } from '@/components/modal'
  import AppModalBase from '@/components/modal/app-modal-base.vue'
  import AppModalBtnClose from '@/components/modal/app-modal-btn-close.vue'
  import AppModalTitle from '@/components/modal/app-modal-title.vue'

  defineProps<{
    title?: string,
  }>()

  const { isOpen, open, close } = useModal()

  defineExpose({ open, close })
</script>

<template>
  <app-modal-base v-model="isOpen">
    <transition
      enter-from-class="!-right-full"
      leave-to-class="!-right-full">
      <!-- Full-screen container to center the panel -->
      <div
        v-if="isOpen"
        class="fixed inset-y-0 right-0 z-50 transition-all duration-300 ease">
        <!-- The actual dialog panel -->
        <div
          class="h-full max-w-96 w-[calc(100vw-16px)] rounded-l-2xl bg-white p-4 shadow-xl lg:p-6">
          <div class="h-full flex flex-col">
            <app-modal-title class="mb-6">
              {{ title }}
            </app-modal-title>

            <slot></slot>
          </div>

          <app-modal-btn-close @click="close()" />
        </div>
      </div>
    </transition>
  </app-modal-base>
</template>

<style lang="postcss" scoped>
  :deep() {
    .modal-content {
      @apply flex-1 overflow-auto;

      /* prevent focus ring clipped by overflow-auto */
      @apply pl-2 pr-3 pt-2 -my-2 -ml-2 -mr-5 pb-6;

      /* prevent uggly layout shift when scrollbar appear/disappear */
      @apply scrollbar-stable;
    }
    .modal-footer {
      @apply flex items-center justify-center space-x-4 pt-4 mt-2;
    }
  }
</style>
