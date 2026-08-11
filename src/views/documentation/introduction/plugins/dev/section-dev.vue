<script setup lang="ts">
  import PluginEslint from './plugin-eslint.vue'
  import PluginNpmRunAll from './plugin-npm-run-all.vue'
  import PluginTypescript from './plugin-typescript.vue'
  import PluginUnocss from './plugin-unocss.vue'
  import PluginVite from './plugin-vite.vue'
</script>

<template>
  <div class="mb-3 text-sm text-gray-800 font-semibold">
    Dev
  </div>
  <div class="grid grid-cols-1 mb-8 gap-5">
    <plugin-eslint />
    <plugin-typescript />
    <plugin-vite />
    <plugin-unocss />
    <plugin-npm-run-all />
  </div>
</template>
