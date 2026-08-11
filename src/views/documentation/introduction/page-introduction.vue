<script setup lang="ts">
  import SectionDev from './plugins/dev/section-dev.vue'
  import SectionProd from './plugins/prod/section-prod.vue'

  const sections = [
    {
      category: 'Components',
      items: [
        {
          icon: 'lucide:mouse-pointer-click',
          title: 'Button',
          description: 'Tombol dengan berbagai varian warna, loading, dan disabled.',
          path: '/documentation/button',
        },
        {
          icon: 'lucide:panel-right',
          title: 'Modal',
          description: 'Overlay konten: default, slide, dan dengan form.',
          path: '/documentation/modal',
        },
        {
          icon: 'lucide:image',
          title: 'Image Component',
          description: 'Komponen image dengan fallback placeholder otomatis.',
          path: '/documentation/img',
        },
        {
          icon: 'lucide:text-cursor-input',
          title: 'Input',
          description: 'Form input: text, textarea, password, select, checkbox.',
          path: '/documentation/input',
        },
        {
          icon: 'lucide:smile',
          title: 'Icon',
          description: 'Icon dari Iconify collection Lucide.',
          path: '/documentation/icon',
        },
        {
          icon: 'lucide:square',
          title: 'Card',
          description: 'Card untuk mengelompokkan konten.',
          path: '/documentation/card',
        },
        {
          icon: 'lucide:table',
          title: 'Table',
          description: 'Tabel data dengan loading state dan slot kosong.',
          path: '/documentation/table',
        },
        {
          icon: 'lucide:badge-info',
          title: 'Badge',
          description: 'Badge untuk menampilkan label dengan berbagai varian warna dan opsional icon.',
          path: '/documentation/badge',
        },
      ],
    },
    {
      category: 'Functions',
      items: [
        {
          icon: 'lucide:braces',
          title: 'Formatters',
          description: 'Utility format tanggal, angka, byte, phone, dan string case.',
          path: '/documentation/fmt',
        },
        {
          icon: 'lucide:case-sensitive',
          title: 'String Utilities',
          description: 'Fungsi manipulasi string: title, upperFirst, maskName.',
          path: '/documentation/string',
        },
        {
          icon: 'lucide:image-off',
          title: 'Image Utilities',
          description: 'Avatar generator, base64 conversion, file reader.',
          path: '/documentation/image',
        },
      ],
    },
  ]
</script>

<template>
  <div>
    <header class="mb-12">
      <app-badge
        label="Vue Starter Kit"
        :icon="true" />
      <h1 class="text-3xl text-gray-900 font-bold tracking-tight lg:text-5xl sm:text-4xl">
        Dokumentasi Komponen
      </h1>
      <p class="mt-4 max-w-2xl text-base text-gray-500 leading-relaxed sm:text-lg">
        Kumpulan komponen Vue reusable untuk membangun antarmuka web dengan cepat dan konsisten.
      </p>
      <div class="mt-6 h-px w-20 from-primary/40 to-transparent bg-gradient-to-r"></div>
    </header>

    <div
      v-for="section in sections"
      :key="section.category"
      class="mb-10">
      <h2 class="mb-4 text-xs text-gray-400 font-semibold tracking-wider uppercase">
        {{ section.category }}
      </h2>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
        <router-link
          v-for="item in section.items"
          :key="item.title"
          :to="item.path"
          class="group relative overflow-hidden border border-gray-200/60 rounded-2xl bg-white p-6 transition-all duration-300 active:scale-[0.98] hover:border-primary/20 hover:shadow-primary/5 hover:shadow-xl hover:-translate-y-1">
          <div class="mb-4 h-11 w-11 inline-flex items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20">
            <app-icon
              :icon="item.icon"
              class="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-white" />
          </div>
          <h3 class="text-sm text-gray-900 font-semibold">
            {{ item.title }}
          </h3>
          <p class="mt-1.5 text-xs text-gray-400 leading-relaxed">
            {{ item.description }}
          </p>
          <div class="absolute right-4 top-4 h-7 w-7 flex items-center justify-center rounded-full bg-gray-100 text-xs text-gray-400 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
            <app-icon
              icon="lucide:arrow-right"
              class="h-3.5 w-3.5" />
          </div>
          <div class="absolute inset-x-0 bottom-0 h-0.5 w-0 from-primary to-primary-400 bg-gradient-to-r transition-all duration-500 group-hover:w-full"></div>
        </router-link>
      </div>
    </div>
  </div>
  <section class="mt-14">
    <h2 class="mb-4 text-xs text-gray-400 font-semibold tracking-wider uppercase">
      Plugins
    </h2>
    <section-dev />
    <section-prod />
  </section>
</template>

