<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'eslint',
    '@eslint/js',
    '@rushstack/eslint-patch',
    '@stylistic/eslint-plugin',
    '@unocss/eslint-config',
    'eslint-plugin-simple-import-sort',
    'eslint-plugin-vue',
    'typescript-eslint',
  ]
</script>

<template>
  <component-plugin
    title="ESLint"
    icon="lucide:code-2"
    description="Linting & code quality untuk JavaScript & TypeScript"
    :packages="packages" />
</template>
