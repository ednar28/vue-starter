<script setup lang="ts">
  const code = [
    '<app-button variant="primary" type="icon">',
    '  <app-icon icon="lucide:home" />',
    '</app-button>',
    '<app-button variant="success" type="icon">',
    '  <app-icon icon="lucide:check" />',
    '</app-button>',
    '<app-button variant="secondary" type="icon">',
    '  <app-icon icon="lucide:settings" />',
    '</app-button>',
    '<app-button variant="danger" type="icon">',
    '  <app-icon icon="lucide:trash" />',
    '</app-button>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Button Icon"
    description="Untuk tombol icon saja gunakan type=icon dan atur variant sesuai kebutuhan."
    :code="code">
    <div class="flex items-center space-x-4">
      <app-button
        variant="primary"
        type="icon">
        <app-icon icon="lucide:home" />
      </app-button>
      <app-button
        variant="success"
        type="icon">
        <app-icon icon="lucide:check" />
      </app-button>
      <app-button
        variant="secondary"
        type="icon">
        <app-icon icon="lucide:settings" />
      </app-button>
      <app-button
        variant="danger"
        type="icon">
        <app-icon icon="lucide:trash" />
      </app-button>
    </div>
  </app-doc-section>
</template>
