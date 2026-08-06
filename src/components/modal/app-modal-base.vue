<script setup lang="ts">
  const isOpen = defineModel<boolean>()
</script>

<template>
  <teleport to="body">
    <!-- dark overlay -->
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black bg-opacity-25"
        @click="isOpen = false"></div>
    </transition>

    <slot></slot>
  </teleport>
</template>
