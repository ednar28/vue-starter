<script setup lang="ts">
  import SectionDev from './plugins/dev/section-dev.vue'
  import SectionProd from './plugins/prod/section-prod.vue'
  import SectionComponents from './sections/section-components.vue'
  import SectionFunctions from './sections/section-functions.vue'
  import SectionGettingStarted from './sections/section-getting-started.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Dokumentasi Komponen"
      badge="Vue Starter Kit"
      description="Kumpulan komponen Vue reusable untuk membangun antarmuka web dengan cepat dan konsisten." />

    <section-getting-started />
    <section-components />
    <section-functions />
  </div>

  <section class="mt-14">
    <h2 class="mb-4 text-xs text-gray-400 font-semibold tracking-wider uppercase">
      Plugins
    </h2>
    <section-dev />
    <section-prod />
  </section>
</template>

