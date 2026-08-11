<script setup lang="ts">
  import ImageAvatar from './image-avatar.vue'
  import ImageBase64 from './image-base64.vue'
  import ImageFileReader from './image-file-reader.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Image Utilities"
      badge="Functions"
      description="Utility functions untuk menangani gambar: avatar generator, konversi base64, dan file reader." />

    <image-avatar />
    <image-base64 />
    <image-file-reader />
  </div>
</template>
