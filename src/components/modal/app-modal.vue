<script setup lang="ts">
  import { useModal } from '@/components/modal'
  import AppModalBtnClose from '@/components/modal/app-modal-btn-close.vue'
  import AppModalTitle from '@/components/modal/app-modal-title.vue'

  defineProps<{
    title?: string,
  }>()

  const { isOpen, open, close } = useModal()

  defineExpose({ open, close })
</script>

<template>
  <teleport to="body">
    <!-- dark overlay -->
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black bg-opacity-25"
        @click="isOpen = false"></div>
    </transition>

    <transition name="slidedown">
      <div
        v-if="isOpen"
        class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center sm:p-4">
        <div
          class="pointer-events-initial relative max-w-120 min-w-64 flex-1 overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl">
          <app-modal-btn-close @click="close" />

          <app-modal-title class="mb-4 h-8">
            {{ title }}
          </app-modal-title>

          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="postcss" scoped>
  :deep() {
    .modal-content {
      @apply max-h-[calc(100vh-200px)] overflow-auto;

      /* prevent focus ring clipped by overflow-auto */
      @apply pl-2 pr-3 py-2 -my-2 -ml-2 -mr-4;
    }
    .modal-footer {
      @apply mt-4 flex items-center justify-center pt-2 space-x-3;
    }
  }
</style>
