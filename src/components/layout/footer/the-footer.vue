<script setup lang="ts">
  const appName = __APP_NAME__
  const appVersion = __APP_VERSION__
</script>

<template>
  <footer class="border-t border-gray-200/60 px-6 py-2 dark:border-white/10">
    <div class="flex items-center justify-between">
      <p class="text-left text-xs text-gray-400 dark:text-gray-500">
        &copy; {{ new Date().getFullYear() }} {{ appName }}
      </p>
      <p class="text-xs text-primary font-bold">
        v{{ appVersion }}
      </p>
    </div>
  </footer>
</template>
