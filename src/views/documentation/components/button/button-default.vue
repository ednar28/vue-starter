<script setup lang="ts">
  const code = [
    '<app-button variant="primary">Primary</app-button>',
    '<app-button variant="success">Success</app-button>',
    '<app-button variant="secondary">Secondary</app-button>',
    '<app-button variant="danger">Danger</app-button>',
    '<app-button variant="info">Info</app-button>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Button Variant"
    description="Gunakan prop variant untuk mengatur warna tombol."
    :code="code">
    <div class="flex items-center space-x-4">
      <app-button variant="primary">
        Primary
      </app-button>
      <app-button variant="success">
        Success
      </app-button>
      <app-button variant="secondary">
        Secondary
      </app-button>
      <app-button variant="danger">
        Danger
      </app-button>
      <app-button variant="info">
        Info
      </app-button>
    </div>
  </app-doc-section>
</template>

<style lang="postcss" scoped>
  app-button {
    @apply w-28;
  }
</style>
