<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { type ToastType, useToastStore } from '@/stores/toast'

  const toast = useToastStore()

  // re-render trigger for the progress bar (1s tick)
  const now = ref(Date.now())
  let timer: number
  onMounted(() => {
    timer = window.setInterval(() => {
      now.value = Date.now()
      // cleanup expired items whose timer may have been swallowed
      const expired = toast.items.filter(i => Date.now() >= i.expiresAt)
      expired.forEach(i => toast.dismiss(i.id))
    }, 250)
  })
  onBeforeUnmount(() => window.clearInterval(timer))

  const ICONS: Record<ToastType, string> = {
    default: 'lucide:info',
    success: 'lucide:check-circle',
    warning: 'lucide:alert-triangle',
    danger: 'lucide:alert-octagon',
  }

  const accentClass = (type: ToastType) =>
    ({
      default: 'toast-default',
      success: 'toast-success',
      warning: 'toast-warning',
      danger: 'toast-danger',
    })[type]

  const progress = (expiresAt: number, duration: number) => {
    const remaining = Math.max(0, expiresAt - now.value)
    return (remaining / duration) * 100
  }
</script>

<template>
  <div class="toast-wrapper">
    <transition-group name="toast">
      <div
        v-for="item in toast.items"
        :key="item.id"
        class="toast-items"
        :class="accentClass(item.type)">
        <app-icon
          :icon="ICONS[item.type]"
          class="toast-icon" />
        <div class="toast-content">
          <p
            v-if="item.title"
            class="toast-title">
            {{ item.title }}
          </p>
          <p class="toast-message">
            {{ item.message }}
          </p>
        </div>
        <button
          type="button"
          class="toast-close"
          aria-label="Tutup"
          @click="toast.dismiss(item.id)">
          <app-icon icon="lucide:x" />
        </button>
        <div
          class="toast-progress"
          :style="{ width: progress(item.expiresAt, item.duration) + '%' }"></div>
      </div>
    </transition-group>
  </div>
</template>

<style lang="postcss" scoped>
.toast-wrapper {
  @apply pointer-events-none fixed bottom-6 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-xs flex-col items-end gap-2 sm:right-6;
}

.toast-items {
  @apply pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg p-3 pr-8 shadow-lg;
  @apply bg-white text-slate-800 dark:bg-surface dark:text-white;
  @apply border border-slate-200 dark:border-white/10;
  @apply transition-all duration-300 ease-out;
}

.toast-icon {
  @apply h-5 w-5 flex-shrink-0;
}

.toast-content {
  @apply flex-1 text-sm leading-snug;
}

.toast-title {
  @apply font-semibold leading-tight;
}

.toast-message {
  @apply opacity-80;
}

.toast-close {
  @apply absolute right-1.5 top-1.5 rounded p-1 opacity-50 transition-opacity hover:opacity-100;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-1;
}

.toast-close :deep(svg) {
  @apply h-3.5 w-3.5;
}

.toast-progress {
  @apply absolute bottom-0 left-0 h-0.5 transition-[width] duration-200 ease-linear;
}

/* per-type accents */
.toast-default .toast-icon {
  @apply text-slate-500 dark:text-gray-400;
}

.toast-default .toast-progress {
  @apply bg-slate-400;
}

.toast-success .toast-icon {
  @apply text-emerald-500;
}

.toast-success .toast-progress {
  @apply bg-emerald-500;
}

.toast-success {
  @apply border-l-4 border-l-emerald-500;
}

.toast-warning .toast-icon {
  @apply text-amber-500;
}

.toast-warning .toast-progress {
  @apply bg-amber-500;
}

.toast-warning {
  @apply border-l-4 border-l-amber-500;
}

.toast-danger .toast-icon {
  @apply text-red-500;
}

.toast-danger .toast-progress {
  @apply bg-red-500;
}

.toast-danger {
  @apply border-l-4 border-l-red-500;
}

/* enter/leave: slide + scale + fade */
.toast-enter-from {
  opacity: 0;
  transform: translateX(120%) scale(0.95);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(120%) scale(0.95);
}

.toast-leave-active {
  @apply absolute transition-all duration-300 ease-out;
  width: 100%;
}
</style>
