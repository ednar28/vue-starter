<script setup lang="ts">
  const code = [
    '<app-button variant="primary" :loading="true">Loading</app-button>',
    '<app-button variant="primary" :disabled="true">Disabled</app-button>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Button Loading dan Disabled"
    description="Tombol dapat dibuat dalam keadaan loading dan disabled. Property loading dapat digunakan untuk membuat tombol loading, dan property disabled untuk membuat tombol disabled."
    :code="code">
    <div class="flex items-center space-x-4">
      <app-button
        variant="primary"
        :loading="true">
        Loading
      </app-button>
      <app-button
        variant="primary"
        :disabled="true">
        Disabled
      </app-button>
    </div>
  </app-doc-section>
</template>

<style lang="postcss" scoped>
  app-button {
    @apply w-28;
  }
</style>
