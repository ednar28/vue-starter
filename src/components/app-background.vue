<script setup lang="ts">
  const bubbles = [
    { size: 3, left: '8%', duration: '16s', delay: '-2s', drift: '3rem' },
    { size: 2, left: '18%', duration: '12s', delay: '-7s', drift: '-2.5rem' },
    { size: 4, left: '28%', duration: '18s', delay: '-11s', drift: '4rem' },
    { size: 1.5, left: '36%', duration: '10s', delay: '-4s', drift: '-1.5rem' },
    { size: 2.5, left: '46%', duration: '15s', delay: '-9s', drift: '2rem' },
    { size: 5, left: '55%', duration: '20s', delay: '-1s', drift: '-4rem' },
    { size: 2, left: '64%', duration: '13s', delay: '-6s', drift: '2.5rem' },
    { size: 3.5, left: '72%', duration: '17s', delay: '-13s', drift: '-3rem' },
    { size: 1.5, left: '80%', duration: '11s', delay: '-3s', drift: '1.5rem' },
    { size: 4.5, left: '88%', duration: '19s', delay: '-8s', drift: '-5rem' },
    { size: 2.5, left: '94%', duration: '14s', delay: '-5s', drift: '2rem' },
    { size: 3, left: '12%', duration: '16s', delay: '-15s', drift: '-3rem' },
  ]
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="animate-aurora absolute from-orange-200/70 via-orange-50 to-orange-200/50 bg-gradient-to-br -inset-24 dark:from-white/[0.04] dark:via-primary/[0.07] dark:to-transparent"></div>
    <div
      v-for="(b, i) in bubbles"
      :key="i"
      class="bubble absolute"
      :style="{
        width: `${b.size}rem`,
        height: `${b.size}rem`,
        left: b.left,
        animationDuration: b.duration,
        animationDelay: b.delay,
        '--drift': b.drift,
      }"></div>
  </div>
</template>

<style scoped>
  @keyframes aurora {
    0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
    50% { transform: translate3d(-4rem, 2rem, 0) rotate(-2deg); }
  }

  .animate-aurora { animation: aurora 14s ease-in-out infinite; }

  @keyframes bubble-rise {
    0% { transform: translate3d(0, 0, 0) scale(0.8); opacity: 0; }
    10% { opacity: 0.9; }
    90% { opacity: 0.9; }
    100% { transform: translate3d(var(--drift, 2rem), -90vh, 0) scale(1.05); opacity: 0; }
  }

  .bubble {
    bottom: -4rem;
    border-radius: 9999px;
    background:
      radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 45%),
      radial-gradient(circle at 68% 68%, rgba(249, 115, 22, 0.12), rgba(249, 115, 22, 0) 55%),
      radial-gradient(circle, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 70%);
    border: 1.5px solid rgba(0, 0, 0, 0.08);
    box-shadow:
      inset -5px -5px 12px rgba(255, 255, 255, 0.25),
      inset 4px 4px 10px rgba(255, 255, 255, 0.35),
      0 8px 24px rgba(0, 0, 0, 0.08),
      0 0 20px rgba(249, 115, 22, 0.1);
    animation: bubble-rise 14s linear infinite;
  }

  :global(html.dark) .bubble {
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow:
      inset -5px -5px 12px rgba(255, 255, 255, 0.06),
      inset 4px 4px 10px rgba(255, 255, 255, 0.08),
      0 8px 24px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(249, 115, 22, 0.15);
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-aurora, .bubble { animation: none !important; }
  }
</style>
