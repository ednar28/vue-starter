<script setup lang="ts">
  import SidebarLayout from '@/components/layout/sidebar/sidebar-layout.vue'
  import SidebarDemoShell from './sidebar-demo-shell.vue'

  const navItems = [
    {
      category: 'Components',
      items: [
        { label: 'Button', path: { name: 'documentation-button' } },
        { label: 'Card', path: { name: 'documentation-card' } },
      ],
    },
  ]

  const code = [
    '<sidebar-layout :sidebar-open="true" :nav-items="navItems">',
    '  <template #footer>',
    '    <div class="shrink-0 border-t border-gray-100 p-4">',
    '      <a href="https://github.com/ednar28/vue-starter" target="_blank">',
    '        GitHub Repository',
    '      </a>',
    '    </div>',
    '  </template>',
    '</sidebar-layout>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Footer Slot"
    description="Gunakan slot <b>footer</b> untuk konten bawah sidebar (mis. link GitHub). Slot <b>header</b> tersedia untuk mengganti brand bawaan."
    :code="code">
    <sidebar-demo-shell>
      <template #sidebar>
        <sidebar-layout
          :sidebar-open="true"
          :nav-items="navItems"
          title="Vue Starter"
          subtitle="Dokumentasi">
          <template #footer>
            <div class="shrink-0 border-t border-gray-100 bg-white p-4 dark:border-white/10 dark:bg-surface">
              <a
                href="https://github.com/ednar28/vue-starter"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-500 font-medium transition-all duration-200 hover:bg-primary/5 dark:text-gray-400 hover:text-primary dark:hover:bg-white/5 dark:hover:text-white">
                <app-icon
                  icon="lucide:github"
                  class="h-4 w-4" />
                GitHub Repository
              </a>
            </div>
          </template>
        </sidebar-layout>
      </template>
    </sidebar-demo-shell>
  </app-doc-section>
</template>
