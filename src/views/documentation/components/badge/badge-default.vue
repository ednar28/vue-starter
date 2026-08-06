<script setup lang="ts">
  const allVariantsWithIconCode = [
    '<div class="flex flex-wrap gap-3">',
    '  <app-badge label="Primary" variant="primary" :icon="true" />',
    '  <app-badge label="Warning" variant="warning" :icon="true" />',
    '  <app-badge label="Danger" variant="danger" :icon="true" />',
    '  <app-badge label="Info" variant="info" :icon="true" />',
    '  <app-badge label="Success" variant="success" :icon="true" />',
    '</div>',
  ].join('\n')

  const allVariantsWithoutIconCode = [
    '<div class="flex flex-wrap gap-3">',
    '  <app-badge label="Primary" variant="primary" />',
    '  <app-badge label="Warning" variant="warning" />',
    '  <app-badge label="Danger" variant="danger" />',
    '  <app-badge label="Info" variant="info" />',
    '  <app-badge label="Success" variant="success" />',
    '</div>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Semua Variant dengan Icon"
    description="Koleksi lengkap semua variant dengan icon dot."
    :code="allVariantsWithIconCode">
    <div class="flex flex-wrap gap-3">
      <app-badge
        label="Primary"
        variant="primary"
        :icon="true" />
      <app-badge
        label="Warning"
        variant="warning"
        :icon="true" />
      <app-badge
        label="Danger"
        variant="danger"
        :icon="true" />
      <app-badge
        label="Info"
        variant="info"
        :icon="true" />
      <app-badge
        label="Success"
        variant="success"
        :icon="true" />
    </div>
  </app-doc-section>

  <app-doc-section
    title="Tanpa Icon"
    description="Semua variant tanpa icon dot."
    :code="allVariantsWithoutIconCode">
    <div class="flex flex-wrap gap-3">
      <app-badge
        label="Primary"
        variant="primary" />
      <app-badge
        label="Warning"
        variant="warning" />
      <app-badge
        label="Danger"
        variant="danger" />
      <app-badge
        label="Info"
        variant="info" />
      <app-badge
        label="Success"
        variant="success" />
    </div>
  </app-doc-section>
</template>
