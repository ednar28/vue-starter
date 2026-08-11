<script setup lang="ts">
  import SectionModalDefault from './modal-default.vue'
  import SectionModalProps from './modal-props.vue'
  import SectionModalSlide from './modal-slide.vue'
  import SectionModalSlots from './modal-slots.vue'
  import SectionModalUseAppModal from './modal-use-app-modal.vue'
  import SectionModalWithForms from './modal-with-forms.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Modal"
      badge="Components"
      description="Berbagai variasi modal untuk overlay konten: default, slide, dan dengan form." />

    <section-modal-default />
    <section-modal-use-app-modal />
    <section-modal-slide />
    <section-modal-with-forms />
    <section-modal-props />
    <section-modal-slots />
  </div>
</template>
