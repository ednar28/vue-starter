<script setup lang="ts">
  import PluginAxios from './plugin-axios.vue'
  import PluginChangeCase from './plugin-change-case.vue'
  import PluginClipboardCopy from './plugin-clipboard-copy.vue'
  import PluginContentDispositionHeader from './plugin-content-disposition-header.vue'
  import PluginCropperjs from './plugin-cropperjs.vue'
  import PluginDateFns from './plugin-date-fns.vue'
  import PluginDompurify from './plugin-dompurify.vue'
  import PluginIconify from './plugin-iconify.vue'
  import PluginMarked from './plugin-marked.vue'
  import PluginNprogress from './plugin-nprogress.vue'
  import PluginPrettyBytes from './plugin-pretty-bytes.vue'
  import PluginVMoney3 from './plugin-v-money3.vue'
  import PluginVue from './plugin-vue.vue'
  import PluginVueCodeBlock from './plugin-vue-code-block.vue'
  import PluginVueDatepicker from './plugin-vue-datepicker.vue'
  import PluginVueuse from './plugin-vueuse.vue'
</script>

<template>
  <div class="mb-3 text-sm text-gray-800 font-semibold">
    Prod
  </div>
  <div class="grid grid-cols-1 gap-5">
    <plugin-vue />
    <plugin-vueuse />
    <plugin-axios />
    <plugin-iconify />
    <plugin-date-fns />
    <plugin-marked />
    <plugin-dompurify />
    <plugin-cropperjs />
    <plugin-vue-code-block />
    <plugin-vue-datepicker />
    <plugin-nprogress />
    <plugin-clipboard-copy />
    <plugin-v-money3 />
    <plugin-change-case />
    <plugin-pretty-bytes />
    <plugin-content-disposition-header />
  </div>
</template>
