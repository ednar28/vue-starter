<script setup lang="ts">
  import { ref } from 'vue'

  const password = ref('password')

  const code = [
    '<app-input-password v-model="password" label="Password" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Password Input"
    description="Input password dengan toggle show/hide."
    :code="code">
    <div class="max-w-md">
      <app-input-password
        v-model="password"
        label="Password" />
    </div>
  </app-doc-section>
</template>
