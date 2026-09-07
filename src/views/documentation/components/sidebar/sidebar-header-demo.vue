<script setup lang="ts">
  import SidebarHeader from '@/components/layout/sidebar/sidebar-header.vue'

  const code = [
    '<sidebar-header',
    '  title="Vue Starter"',
    '  subtitle="Dokumentasi"',
    '  icon="lucide:book-open" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Header"
    description="Gunakan <b>sidebar-header</b> untuk blok brand (logo + title + subtitle). Prop <b>icon</b> menerima nama icon iconify."
    :code="code">
    <div class="w-72 overflow-hidden rounded-xl bg-[#0F172A]">
      <sidebar-header
        title="Vue Starter"
        subtitle="Dokumentasi"
        icon="lucide:book-open" />
    </div>
  </app-doc-section>
</template>
