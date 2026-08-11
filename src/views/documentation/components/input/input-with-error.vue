<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref('')

  const code = [
    '<app-input v-model="value" label="Email" :error="\'Email is required\'" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Input with Error"
    description="Input dengan pesan error untuk validasi form."
    :code="code">
    <div class="max-w-md">
      <app-input
        v-model="value"
        label="Email"
        placeholder="contoh: rizky@example.test"
        required
        error="Email is required" />
    </div>
  </app-doc-section>
</template>
