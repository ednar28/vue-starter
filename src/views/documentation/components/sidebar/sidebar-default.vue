<script setup lang="ts">
  import SidebarLayout from '@/components/layout/sidebar/sidebar-layout.vue'
  import SidebarDemoShell from './sidebar-demo-shell.vue'

  const navItems = [
    {
      category: 'Components',
      items: [
        { label: 'Button', path: { name: 'documentation-button' } },
        { label: 'Card', path: { name: 'documentation-card' } },
        { label: 'Badge', path: { name: 'documentation-badge' } },
      ],
    },
  ]

  const code = [
    '<script setup lang="ts">',
    '  import SidebarLayout from \'@/components/layout/sidebar/sidebar-layout.vue\'',
    '',
    '  const navItems = [',
    '    {',
    '      category: \'Components\',',
    '      items: [',
    '        { label: \'Button\', path: { name: \'documentation-button\' } },',
    '        { label: \'Card\', path: { name: \'documentation-card\' } },',
    '      ],',
    '    },',
    '  ]',
    '<\/script>',
    '',
    '<template>',
    '  <sidebar-layout',
    '    :sidebar-open="true"',
    '    :nav-items="navItems"',
    '    title="Vue Starter"',
    '    subtitle="Dokumentasi"',
    '    @close="sidebarOpen = false" />',
    '</template>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default"
    description="Gunakan <b>sidebar-layout</b> dengan prop <b>nav-items</b> dan <b>sidebar-open</b>. Preview di bawah meniru layout dokumentasi (sidebar + area konten)."
    :code="code">
    <sidebar-demo-shell>
      <template #sidebar>
        <sidebar-layout
          :sidebar-open="true"
          :nav-items="navItems"
          title="Vue Starter"
          subtitle="Dokumentasi" />
      </template>
    </sidebar-demo-shell>
  </app-doc-section>
</template>
