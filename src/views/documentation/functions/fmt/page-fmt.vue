<script setup lang="ts">
  import FmtByte from './fmt-byte.vue'
  import FmtDate from './fmt-date.vue'
  import FmtDuration from './fmt-duration.vue'
  import FmtNumber from './fmt-number.vue'
  import FmtPhone from './fmt-phone.vue'
  import FmtStringCase from './fmt-string-case.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Formatters"
      badge="Functions"
      description="Kumpulan utility functions untuk format data: tanggal, angka, byte, durasi, telepon, string case, dan avatar." />

    <fmt-byte />
    <fmt-number />
    <fmt-date />
    <fmt-duration />
    <fmt-phone />
    <fmt-string-case />
  </div>
</template>
