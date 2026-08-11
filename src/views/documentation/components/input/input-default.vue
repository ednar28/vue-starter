<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref('')

  const code = [
    '<app-input v-model="value" label="Name" placeholder="Enter your name" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default Input"
    description="Input text dasar untuk menerima data dari user."
    :code="code">
    <div class="max-w-md">
      <app-input
        v-model="value"
        label="Name"
        placeholder="Enter your name" />
    </div>
  </app-doc-section>
</template>
