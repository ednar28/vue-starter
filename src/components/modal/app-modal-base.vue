<script setup lang="ts">
  const isOpen = defineModel<boolean>()
</script>

<template>
  <teleport to="body">
    <!-- dark overlay -->
    <transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] dark:bg-black/60"
        @click="isOpen = false"></div>
    </transition>

    <slot></slot>
  </teleport>
</template>
