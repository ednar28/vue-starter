<script setup lang="ts">
  import { ref } from 'vue'

  const checked = ref(false)

  const code = [
    '<app-input-checkbox v-model="checked" label="Accept terms and conditions" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Checkbox"
    description="Checkbox untuk pilihan true/false atau accept/reject."
    :code="code">
    <div>
      <app-input-checkbox
        v-model="checked"
        label="Accept terms and conditions" />
    </div>
  </app-doc-section>
</template>
