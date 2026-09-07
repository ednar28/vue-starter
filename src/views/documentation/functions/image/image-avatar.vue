<script setup lang="ts">
  import { uiAvatarSrc } from '@/functions/image/user-photo'

  const code = [
    "import { uiAvatarSrc } from '@/functions/image/user-photo'",
    '',
    'uiAvatarSrc("John Doe")',
    '// "https://ui-avatars.com/api?color=fff&background=...&name=John+Doe"',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Avatar Generator"
    description="Generate URL avatar dengan inisial dari nama user menggunakan <a href='https://ui-avatars.com/' target='_blank' class='text-primary underline underline-offset-2 hover:text-primary-600'>ui-avatars.com</a>. Warna background otomatis berdasarkan hash nama."
    :code="code">
    <div class="space-y-4">
      <app-doc-result>
        <div class="flex items-center gap-4">
          <img
            :src="uiAvatarSrc('John Doe')"
            alt="Avatar"
            class="h-12 w-12 rounded-full ring-2 ring-gray-200 dark:ring-white/20">
          <img
            :src="uiAvatarSrc('Jane Smith')"
            alt="Avatar"
            class="h-12 w-12 rounded-full ring-2 ring-gray-200 dark:ring-white/20">
          <img
            :src="uiAvatarSrc('Alice')"
            alt="Avatar"
            class="h-12 w-12 rounded-full ring-2 ring-gray-200 dark:ring-white/20">
          <img
            :src="uiAvatarSrc('Budi Santoso')"
            alt="Avatar"
            class="h-12 w-12 rounded-full ring-2 ring-gray-200 dark:ring-white/20">
        </div>
      </app-doc-result>
      <app-doc-result label="URL Hasil:">
        <code class="break-all text-xs font-mono">{{ uiAvatarSrc('John Doe') }}</code>
      </app-doc-result>
    </div>
  </app-doc-section>
</template>
