<script setup lang="ts">
  const basicCode = [
    '<app-icon icon="lucide:home" />',
  ].join('\n')

  const sizeCode = [
    '<app-icon icon="lucide:home" class="text-xl" />',
    '<app-icon icon="lucide:home" class="text-2xl" />',
    '<app-icon icon="lucide:home" class="text-3xl" />',
  ].join('\n')

  const colorCode = [
    '<app-icon icon="lucide:heart" class="text-red-500" />',
    '<app-icon icon="lucide:star" class="text-yellow-500" />',
    '<app-icon icon="lucide:check" class="text-green-500" />',
  ].join('\n')

  const listCode = [
    '<app-icon icon="lucide:home" />',
    '<app-icon icon="lucide:user" />',
    '<app-icon icon="lucide:settings" />',
    '<app-icon icon="lucide:search" />',
    '<app-icon icon="lucide:mail" />',
    '<app-icon icon="lucide:bell" />',
    '<app-icon icon="lucide:heart" />',
    '<app-icon icon="lucide:star" />',
    '<app-icon icon="lucide:check" />',
    '<app-icon icon="lucide:x" />',
    '<app-icon icon="lucide:plus" />',
    '<app-icon icon="lucide:minus" />',
  ].join('\n')
</script>

<template>
  <div>
    <app-doc-page-header
      title="Icon"
      badge="Components"
      description="Komponen icon menggunakan Iconify dengan collection Lucide. Format penulisan: lucide:nama-icon." />

    <app-doc-section
      title="Basic Usage"
      description="Cara paling sederhana untuk menggunakan icon."
      :code="basicCode">
      <div class="flex items-center text-2xl space-x-4">
        <app-icon icon="lucide:home" />
      </div>
    </app-doc-section>

    <app-doc-section
      title="Icon Sizes"
      description="Ubah ukuran icon menggunakan class text utility."
      :code="sizeCode">
      <div class="flex items-center space-x-6">
        <app-icon
          icon="lucide:home"
          class="text-xl" />
        <app-icon
          icon="lucide:home"
          class="text-2xl" />
        <app-icon
          icon="lucide:home"
          class="text-3xl" />
      </div>
    </app-doc-section>

    <app-doc-section
      title="Icon Colors"
      description="Ubah warna icon menggunakan class text color utility."
      :code="colorCode">
      <div class="flex items-center text-2xl space-x-6">
        <app-icon
          icon="lucide:heart"
          class="text-red-500" />
        <app-icon
          icon="lucide:star"
          class="text-yellow-500" />
        <app-icon
          icon="lucide:check"
          class="text-green-500" />
      </div>
    </app-doc-section>

    <app-doc-section
      title="Available Icons"
      description="Beberapa icon Lucide yang sering digunakan. Lihat semua icon di lucide.dev/icons."
      :code="listCode">
      <div class="grid grid-cols-4 gap-4 text-2xl">
        <div
          v-for="icon in ['home','user','settings','search','mail','bell','heart','star','check','x','plus','minus']"
          :key="icon"
          class="flex flex-col items-center space-y-2">
          <app-icon :icon="`lucide:${icon}`" />
          <span class="text-xs text-gray-500">{{ icon }}</span>
        </div>
      </div>
    </app-doc-section>
  </div>
</template>
