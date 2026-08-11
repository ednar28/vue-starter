<script setup lang="ts">
  import { useTemplateRef } from 'vue'
  import { onFileChange } from '@/functions/image/img'
  import AppInputLabel from './app-input-label.vue'

  const image = defineModel<string | undefined>()
  const appInputImageRef = useTemplateRef('appInputImageRef')

  defineProps<{
    aspectRatio: string,
    label?: string,
    placeholder?: string,
    error?: string[],
    required?: boolean,
  }>()

  const browseImage = () => {
    appInputImageRef.value?.click()
  }

  const onChange = (event: Event) => {
    onFileChange(event, image)
  }

  const deleteImage = () => {
    image.value = ''
  }
</script>

<template>
  <div>
    <app-input-label
      :label="label"
      :required="required" />

    <div
      class="overflow-hidden"
      :style="'aspect-ratio:' + aspectRatio">
      <div
        class="relative h-full w-full flex flex-shrink-0 items-center justify-center overflow-hidden rounded-md"
        :class="{ 'border-2 border-dashed border-gray-300': !image }">
        <input
          ref="appInputImageRef"
          type="file"
          accept="image/*"
          hidden
          @change="onChange">

        <app-button
          class="h-full w-full flex items-center justify-center"
          variant="none"
          @click="browseImage">
          <img
            v-if="image"
            class="h-full w-full"
            :src="image">
          <template v-else>
            <div class="text-gray-400 space-y-2">
              <app-icon
                icon="lucide:image-plus"
                class="text-2xl" />
              <div
                v-if="placeholder"
                class="text-sm">
                {{ placeholder }}
              </div>
            </div>
          </template>
        </app-button>
        <div
          v-if="image"
          class="absolute right-2 top-2 flex items-center gap-2">
          <app-button
            type="icon"
            variant="info"
            title="Browse Image"
            @click="browseImage">
            <app-icon
              icon="lucide:image"
              class="text-2xl" />
          </app-button>
          <app-button
            type="icon"
            variant="danger"
            title="Delete Image"
            @click="deleteImage">
            <app-icon
              icon="lucide:x"
              class="text-2xl" />
          </app-button>
        </div>
      </div>
    </div>
    <app-input-error-message :message="error" />
  </div>
</template>
