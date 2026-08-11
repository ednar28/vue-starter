<script setup lang="ts">
  import { ref } from 'vue'

  const activeTab = ref(1)

  const code = [
    '<app-tab-group>',
    '  <app-tab :active="activeTab === 1" @click="activeTab = 1">',
    '    Tab 1',
    '  </app-tab>',
    '  <app-tab :active="activeTab === 2" @click="activeTab = 2">',
    '    Tab 2',
    '  </app-tab>',
    '  <app-tab :active="activeTab === 3" @click="activeTab = 3">',
    '    Tab 3',
    '  </app-tab>',
    '</app-tab-group>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default"
    description="Gunakan app-tab-group sebagai container dan app-tab untuk setiap item tab. Atur active state secara manual."
    :code="code">
    <app-tab-group>
      <app-tab
        :active="activeTab === 1"
        @click="activeTab = 1">
        Beranda
      </app-tab>
      <app-tab
        :active="activeTab === 2"
        @click="activeTab = 2">
        Profil
      </app-tab>
      <app-tab
        :active="activeTab === 3"
        @click="activeTab = 3">
        Pengaturan
      </app-tab>
    </app-tab-group>
  </app-doc-section>
</template>
