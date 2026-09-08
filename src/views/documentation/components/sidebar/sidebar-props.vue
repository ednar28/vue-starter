<script setup lang="ts">
  const layoutRows = [
    { name: 'sidebarOpen', type: 'boolean', desc: 'Kontrol visibilitas sidebar di mobile (translate-x). Default: false' },
    { name: 'navItems', type: 'SidebarGroup[]', desc: 'Daftar grup navigasi { category, icon?, items: { label, path: RouteLocationRaw }[] }' },
    { name: 'title', type: 'string', desc: 'Judul brand yang diteruskan ke sidebar-header. Default: __APP_NAME__' },
    { name: 'subtitle', type: 'string', desc: 'Subjudul brand (mis. Dokumentasi). Default: undefined (disembunyikan)' },
    { name: 'icon', type: 'string', desc: 'Nama icon brand. Default: lucide:book-open' },
  ]

  const headerRows = [
    { name: 'title', type: 'string', desc: 'Judul brand. Default: __APP_NAME__' },
    { name: 'subtitle', type: 'string', desc: 'Subjudul brand. Default: undefined (disembunyikan)' },
    { name: 'icon', type: 'string', desc: 'Nama icon iconify. Default: lucide:book-open' },
  ]

  const itemRows = [
    { name: 'label', type: 'string', desc: 'Teks menu yang ditampilkan' },
    { name: 'to', type: 'RouteLocationRaw', desc: 'Tujuan router-link (biasanya { name: ... })' },
  ]

  const eventRows = [
    { name: 'close', desc: 'Diemit sidebar-layout dan sidebar-item saat menu diklik (untuk menutup sidebar mobile)' },
  ]

  const slotRows = [
    { name: 'header', desc: 'Ganti brand bawaan. Default: sidebar-header dengan title/subtitle/icon' },
    { name: 'footer', desc: 'Konten bawah sidebar (mis. link GitHub Repository)' },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props, Events & Slots"
    description="">
    <div class="space-y-8">
      <div>
        <p class="mb-3 text-sm text-slate-900 font-semibold">
          SidebarLayout props
        </p>
        <app-props-table :rows="layoutRows" />
      </div>
      <div>
        <p class="mb-3 text-sm text-slate-900 font-semibold">
          SidebarHeader props
        </p>
        <app-props-table :rows="headerRows" />
      </div>
      <div>
        <p class="mb-3 text-sm text-slate-900 font-semibold">
          SidebarItem props
        </p>
        <app-props-table :rows="itemRows" />
      </div>
      <div>
        <p class="mb-3 text-sm text-slate-900 font-semibold">
          Events (emits)
        </p>
        <app-slots-table :rows="eventRows" />
      </div>
      <div>
        <p class="mb-3 text-sm text-slate-900 font-semibold">
          SidebarLayout slots
        </p>
        <app-slots-table :rows="slotRows" />
      </div>
    </div>
  </app-doc-section>
</template>
