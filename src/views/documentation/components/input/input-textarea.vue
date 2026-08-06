<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref('')

  const code = [
    '<app-input v-model="value" type="textarea" label="Description" placeholder="Enter description" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Textarea"
    description="Textarea untuk input teks yang lebih panjang."
    :code="code">
    <div class="max-w-md">
      <app-input
        v-model="value"
        type="textarea"
        label="Description"
        placeholder="Enter description" />
    </div>
  </app-doc-section>
</template>
