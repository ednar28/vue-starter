<script setup lang="ts">
  import InputCheckbox from './input-checkbox.vue'
  import InputDefault from './input-default.vue'
  import InputImage from './input-image.vue'
  import InputPassword from './input-password.vue'
  import InputSelect from './input-select.vue'
  import InputTextarea from './input-textarea.vue'
  import InputWithError from './input-with-error.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Input"
      badge="Components"
      description="Berbagai komponen input untuk form yang lengkap dan interaktif." />

    <input-default />
    <input-textarea />
    <input-password />
    <input-select />
    <input-checkbox />
    <input-image />
    <input-with-error />
  </div>
</template>
