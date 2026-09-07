<script setup lang="ts">
  import { useModal } from '@/components/modal'
  import AppModalBase from '@/components/modal/app-modal-base.vue'
  import AppModalBtnClose from '@/components/modal/app-modal-btn-close.vue'
  import AppModalTitle from '@/components/modal/app-modal-title.vue'

  defineProps<{
    title?: string,
    isSmall?: boolean,
  }>()

  const { isOpen, open, close } = useModal()

  defineExpose({ open, close })
</script>

<template>
  <app-modal-base v-model="isOpen">
    <transition
      enter-from-class="!-bottom-full"
      leave-to-class="!-bottom-full">
      <!-- Full-screen container to center the panel -->
      <div
        v-if="isOpen"
        class="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-screen-sm transition-all duration-300 ease">
        <!-- The actual dialog panel -->
        <div
          v-click-outside="close"
          class="overflow-hidden border border-gray-200 rounded-t-2xl bg-white p-4 text-left align-middle text-gray-900 shadow-xl dark:border-white/10 dark:bg-surface lg:p-6 dark:text-gray-100 dark:shadow-none"
          :class="{ 'lg:max-w-md': isSmall }">
          <div class="space-y-6">
            <app-modal-title>{{ title }}</app-modal-title>

            <slot></slot>
          </div>

          <app-modal-btn-close @click="isOpen = false" />
        </div>
      </div>
    </transition>
  </app-modal-base>
</template>

<style lang="postcss" scoped>
  :deep() {
    .modal-content {
      @apply max-h-[calc(100vh-200px)] overflow-auto;

      /* prevent focus ring clipped by overflow-auto */
      @apply pl-2 pr-3 py-2 -my-2 -ml-2 -mr-4;

      /* prevent uggly layout shift when scrollbar appear/disappear */
      @apply scrollbar-stable;
    }
    .modal-footer {
      @apply mt-6 flex items-center justify-center space-x-4;
    }
  }
</style>
