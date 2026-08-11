<script setup lang="ts">
  import { ref } from 'vue'

  const selected = ref(null)

  const code = [
    '<app-input-select v-model="selected" label="Choose option" placeholder="Select an option">',
    '  <option value="option1">Option 1</option>',
    '  <option value="option2">Option 2</option>',
    '  <option value="option3">Option 3</option>',
    '</app-input-select>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Select"
    description="Dropdown select untuk memilih satu opsi dari beberapa pilihan."
    :code="code">
    <div class="max-w-md">
      <app-input-select
        v-model="selected"
        label="Choose option"
        placeholder="Select an option">
        <option value="option1">
          Option 1
        </option>
        <option value="option2">
          Option 2
        </option>
        <option value="option3">
          Option 3
        </option>
      </app-input-select>
    </div>
  </app-doc-section>
</template>
