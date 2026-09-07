<script setup lang="ts">
  import SectionGrid, { type SectionGridItem } from './section-grid.vue'

  const items: SectionGridItem[] = [
    {
      icon: 'lucide:mouse-pointer-click',
      title: 'Button',
      description: 'Tombol dengan berbagai varian warna, loading, dan disabled.',
      path: { name: 'documentation-button' },
    },
    {
      icon: 'lucide:panel-right',
      title: 'Modal',
      description: 'Overlay konten: default, slide, dan dengan form.',
      path: { name: 'documentation-modal' },
    },
    {
      icon: 'lucide:image',
      title: 'Image Component',
      description: 'Komponen image dengan fallback placeholder otomatis.',
      path: { name: 'documentation-img' },
    },
    {
      icon: 'lucide:text-cursor-input',
      title: 'Input',
      description: 'Form input: text, textarea, password, select, checkbox.',
      path: { name: 'documentation-input' },
    },
    {
      icon: 'lucide:smile',
      title: 'Icon',
      description: 'Icon dari Iconify collection Lucide.',
      path: { name: 'documentation-icon' },
    },
    {
      icon: 'lucide:square',
      title: 'Card',
      description: 'Card untuk mengelompokkan konten.',
      path: { name: 'documentation-card' },
    },
    {
      icon: 'lucide:table',
      title: 'Table',
      description: 'Tabel data dengan loading state dan slot kosong.',
      path: { name: 'documentation-table' },
    },
    {
      icon: 'lucide:badge-info',
      title: 'Badge',
      description: 'Badge untuk menampilkan label dengan berbagai varian warna dan opsional icon.',
      path: { name: 'documentation-badge' },
    },
  ]
</script>

<template>
  <section-grid
    category="Components"
    :items="items" />
</template>
