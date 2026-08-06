<script setup lang="ts">
  import { ref } from 'vue'
  import { useAppModal } from '@/components/modal'

  const activeTab = ref(1)
  const { open: openModal, close: closeModal } = useAppModal('modal')
  const searchQuery = ref('')

  const stats = [
    { label: 'Total Pengguna', value: '12,543', change: '+12%', icon: 'lucide:users', trend: 'up' },
    { label: 'Pendapatan', value: 'Rp 45.2jt', change: '+8%', icon: 'lucide:wallet', trend: 'up' },
    { label: 'Pesanan Baru', value: '342', change: '+23%', icon: 'lucide:shopping-bag', trend: 'up' },
    { label: 'Tiket Support', value: '18', change: '-5%', icon: 'lucide:headphones', trend: 'down' },
  ]

  const tableColumns = [
    { key: 'name', label: 'Nama', class: 'text-left' },
    { key: 'role', label: 'Role', class: 'text-center w-px whitespace-nowrap' },
    { key: 'status', label: 'Status', class: 'text-center' },
    { key: 'lastActive', label: 'Terakhir Aktif', class: 'text-left' },
  ]

  const tableRows = [
    { name: 'Andi Pratama', role: 'Admin', status: 'Active', lastActive: '2 menit lalu' },
    { name: 'Siti Nurhaliza', role: 'Editor', status: 'Active', lastActive: '15 menit lalu' },
    { name: 'Budi Santoso', role: 'Author', status: 'Inactive', lastActive: '3 hari lalu' },
    { name: 'Rina Wulandari', role: 'Viewer', status: 'Active', lastActive: '1 jam lalu' },
    { name: 'Dedi Kurniawan', role: 'Admin', status: 'Active', lastActive: '5 menit lalu' },
  ]

  const recentActivities = [
    { user: 'Andi Pratama', action: 'Menambah produk baru', time: '2 menit lalu', icon: 'lucide:package-plus' },
    { user: 'Siti Nurhaliza', action: 'Mengedit artikel "Tips Vue.js"', time: '15 menit lalu', icon: 'lucide:pencil' },
    { user: 'Rina Wulandari', action: 'Mengunggah 12 gambar', time: '1 jam lalu', icon: 'lucide:upload' },
    { user: 'Dedi Kurniawan', action: 'Mereset password pengguna', time: '5 menit lalu', icon: 'lucide:key-round' },
  ]

  const quickStats = [
    { label: 'Produk', value: '1,234', icon: 'lucide:box' },
    { label: 'Kategori', value: '48', icon: 'lucide:folder-tree' },
    { label: 'Tag', value: '156', icon: 'lucide:tags' },
  ]
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold">
          Dashboard
        </h1>
        <p class="mt-1 text-slate-600">
          Selamat datang kembali! Berikut ringkasan aktivitas Anda.
        </p>
      </div>

      <app-button @click="openModal">
        <app-icon
          icon="lucide:plus"
          class="mr-2 h-4 w-4" />
        Tambah Baru
      </app-button>
    </div>

    <div class="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
      <app-card
        v-for="stat in stats"
        :key="stat.label"
        class="p-4">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm text-slate-500">
              {{ stat.label }}
            </p>
            <p class="mt-1 text-2xl font-bold">
              {{ stat.value }}
            </p>
          </div>
          <div
            :class="[
              'rounded-full size-10 flex items-center justify-center',
              stat.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600',
            ]">
            <app-icon
              :icon="stat.icon"
              class="size-5" />
          </div>
        </div>
        <div class="mt-3 flex items-center gap-1 text-sm">
          <app-icon
            :icon="stat.trend === 'up' ? 'lucide:trending-up' : 'lucide:trending-down'"
            class="h-4 w-4" />
          <span :class="stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'">
            {{ stat.change }}
          </span>
          <span class="text-slate-400">vs bulan lalu</span>
        </div>
      </app-card>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <app-card
        title="Total Item"
        class="lg:col-span-1">
        <div class="space-y-4">
          <div
            v-for="item in quickStats"
            :key="item.label"
            class="flex items-center justify-between rounded-lg bg-slate-50 p-3">
            <div class="flex items-center gap-3">
              <div class="rounded-lg bg-primary/10 p-2">
                <app-icon
                  :icon="item.icon"
                  class="h-5 w-5 text-primary" />
              </div>
              <span class="text-sm font-medium">{{ item.label }}</span>
            </div>
            <span class="text-lg font-bold">{{ item.value }}</span>
          </div>
        </div>
      </app-card>

      <app-card
        title="Aktivitas Terbaru"
        class="lg:col-span-2">
        <div class="space-y-4">
          <div
            v-for="(activity, idx) in recentActivities"
            :key="idx"
            class="flex items-start gap-3">
            <div class="mt-0.5 rounded-full bg-slate-100 p-2">
              <app-icon
                :icon="activity.icon"
                class="h-4 w-4 text-slate-600" />
            </div>
            <div class="flex-1">
              <p class="text-sm">
                <span class="font-medium">{{ activity.user }}</span>
                {{ ' ' }}{{ activity.action }}
              </p>
              <p class="mt-0.5 text-xs text-slate-400">
                {{ activity.time }}
              </p>
            </div>
            <app-badge
              :label="activity.time.split(' ')[0]"
              variant="info"
              :icon="true" />
          </div>
        </div>
      </app-card>
    </div>

    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">
          Daftar Pengguna
        </h2>
        <app-tab-group>
          <app-tab
            :active="activeTab === 1"
            @click="activeTab = 1">
            Semua
          </app-tab>
          <app-tab
            :active="activeTab === 2"
            @click="activeTab = 2">
            Aktif
          </app-tab>
          <app-tab
            :active="activeTab === 3"
            @click="activeTab = 3">
            Nonaktif
          </app-tab>
        </app-tab-group>
      </div>

      <app-card>
        <app-table
          :columns="tableColumns"
          :rows="tableRows">
          <template #cell-status="{ value }">
            <app-badge
              :label="value"
              :variant="value === 'Active' ? 'success' : 'warning'"
              :icon="true" />
          </template>
          <template #cell-role="{ value }">
            <app-badge
              :label="value"
              :variant="value === 'Admin' ? 'primary' : value === 'Editor' ? 'info' : 'warning'" />
          </template>
        </app-table>
      </app-card>
    </div>

    <app-modal
      ref="modal"
      title="Tambah Data Baru">
      <app-modal-content>
        <div class="space-y-4">
          <app-input
            v-model="searchQuery"
            v-focus
            label="Judul"
            placeholder="Masukkan judul" />
          <app-input
            v-model="searchQuery"
            label="Deskripsi"
            type="textarea"
            placeholder="Masukkan deskripsi" />
          <app-input-search placeholder="Cari data..." />
        </div>
      </app-modal-content>
      <app-modal-footer>
        <app-button
          variant="info"
          @click="closeModal">
          Batal
        </app-button>
        <app-button
          variant="primary"
          @click="closeModal">
          Simpan
        </app-button>
      </app-modal-footer>
    </app-modal>
  </div>
</template>
