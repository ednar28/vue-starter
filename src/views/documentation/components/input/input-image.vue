<script setup lang="ts">
  import { ref } from 'vue'

  const image = ref('')

  const code = [
    '<app-input-image',
    '  v-model="image"',
    '  aspect-ratio="1"',
    '  label="Upload Image"',
    '  placeholder="Click to upload image" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Image Input"
    description="Input untuk upload gambar dengan preview dan fitur hapus."
    :code="code">
    <div class="max-w-sm">
      <app-input-image
        v-model="image"
        aspect-ratio="1"
        label="Upload Image"
        placeholder="Click to upload image" />
    </div>
  </app-doc-section>
</template>
