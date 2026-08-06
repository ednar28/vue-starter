<script setup lang="ts">
  const props = defineProps<{
    forId?: string,
    label?: string,
    required?: boolean,
    requiredClass?: string,
  }>()
</script>

<template>
  <label
    v-if="label"
    :for="forId"
    class="form-label">
    {{ label }}
    <span
      v-if="required"
      :class="requiredClass ?? 'text-red-600'">
      *
    </span>
  </label>
</template>
