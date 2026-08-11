<script setup lang="ts">
  import { ref } from 'vue'

  const activeTab = ref(1)

  const code = [
    '<app-tab-group>',
    '  <app-tab :active="activeTab === 1" icon="lucide:home" @click="activeTab = 1">',
    '    Beranda',
    '  </app-tab>',
    '  <app-tab :active="activeTab === 2" icon="lucide:user" @click="activeTab = 2">',
    '    Profil',
    '  </app-tab>',
    '  <app-tab :active="activeTab === 3" icon="lucide:settings" @click="activeTab = 3">',
    '    Pengaturan',
    '  </app-tab>',
    '</app-tab-group>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Dengan Icon"
    description="Gunakan prop icon untuk menambahkan icon sebelum teks tab."
    :code="code">
    <app-tab-group>
      <app-tab
        :active="activeTab === 1"
        icon="lucide:home"
        @click="activeTab = 1">
        Beranda
      </app-tab>
      <app-tab
        :active="activeTab === 2"
        icon="lucide:user"
        @click="activeTab = 2">
        Profil
      </app-tab>
      <app-tab
        :active="activeTab === 3"
        icon="lucide:settings"
        @click="activeTab = 3">
        Pengaturan
      </app-tab>
    </app-tab-group>
  </app-doc-section>
</template>
