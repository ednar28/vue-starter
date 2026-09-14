<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { AppBarChart } from '@/components/chart/bar'
  import { AppLineChart } from '@/components/chart/line'
  import { AppPieChart } from '@/components/chart/pie'

  type Period = '7H' | '30H' | '12B'

  const activePeriod = ref<Period>('30H')

  const periodTabs = [
    { value: '7H', label: '7 Hari' },
    { value: '30H', label: '30 Hari' },
    { value: '12B', label: '12 Bulan' },
  ]

  const formatRpFull = (v: number): string => 'Rp ' + Math.round(v).toLocaleString('id-ID')

  const formatRpShort = (v: number): string => {
    if (v >= 1_000_000_000) return `Rp ${(v / 1_000_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} M`
    if (v >= 1_000_000) return `Rp ${(v / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} jt`
    if (v >= 1_000) return `Rp ${(v / 1_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} rb`
    return `Rp ${v}`
  }

  const revenueData: Record<Period, { categories: string[], pendapatan: number[], pengeluaran: number[] }> = {
    '7H': {
      categories: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      pendapatan: [4200000, 5100000, 3800000, 6200000, 7800000, 9400000, 8100000],
      pengeluaran: [2100000, 2400000, 2000000, 2800000, 3100000, 3600000, 3200000],
    },
    '30H': {
      categories: ['W1', 'W2', 'W3', 'W4'],
      pendapatan: [28400000, 32100000, 29600000, 38200000],
      pengeluaran: [12200000, 13800000, 12900000, 15400000],
    },
    '12B': {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
      pendapatan: [82000000, 76000000, 94000000, 88000000, 102000000, 118000000, 128000000, 121000000, 110000000, 124000000, 138000000, 152000000],
      pengeluaran: [41000000, 38000000, 44000000, 42000000, 48000000, 54000000, 58000000, 56000000, 51000000, 56000000, 61000000, 68000000],
    },
  }

  const revenueCategories = computed(() => revenueData[activePeriod.value].categories)

  const revenueSeries = computed(() => [
    { name: 'Pendapatan', data: revenueData[activePeriod.value].pendapatan },
    { name: 'Pengeluaran', data: revenueData[activePeriod.value].pengeluaran },
  ])

  const categoryLabels = ['Minuman', 'Makanan', 'Merchandise', 'Lainnya']
  const categorySeries = [74200000, 34800000, 8600000, 4100000]

  const productCategories = ['Kopi Susu', 'Matcha', 'Croissant', 'Roti Bakar', 'Teh']

  const productData: Record<Period, number[]> = {
    '7H': [182, 140, 96, 88, 64],
    '30H': [720, 540, 410, 380, 290],
    '12B': [8200, 6400, 5100, 4700, 3500],
  }

  const productSeries = computed(() => [
    { name: 'Terjual', data: productData[activePeriod.value] },
  ])

  const stats = computed(() => {
    if (activePeriod.value === '7H') {
      return [
        { label: 'Pendapatan', value: 'Rp 44,6 jt', change: '+12,4%', trend: 'up' as const, icon: 'lucide:wallet', iconClass: 'bg-primary/10 text-primary dark:bg-primary/15' },
        { label: 'Total Pesanan', value: '1.284', change: '+8,1%', trend: 'up' as const, icon: 'lucide:shopping-bag', iconClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400' },
        { label: 'Rata-rata Order', value: 'Rp 34,7 rb', change: '+3,2%', trend: 'up' as const, icon: 'lucide:receipt-text', iconClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
        { label: 'Pesanan Batal', value: '26', change: '-5,4%', trend: 'down' as const, icon: 'lucide:rotate-ccw', iconClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
      ]
    }
    if (activePeriod.value === '12B') {
      return [
        { label: 'Pendapatan', value: 'Rp 1,33 M', change: '+18,7%', trend: 'up' as const, icon: 'lucide:wallet', iconClass: 'bg-primary/10 text-primary dark:bg-primary/15' },
        { label: 'Total Pesanan', value: '38.412', change: '+14,2%', trend: 'up' as const, icon: 'lucide:shopping-bag', iconClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400' },
        { label: 'Rata-rata Order', value: 'Rp 34,6 rb', change: '+4,1%', trend: 'up' as const, icon: 'lucide:receipt-text', iconClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
        { label: 'Pesanan Batal', value: '412', change: '-2,8%', trend: 'down' as const, icon: 'lucide:rotate-ccw', iconClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
      ]
    }
    return [
      { label: 'Pendapatan', value: 'Rp 128,3 jt', change: '+15,9%', trend: 'up' as const, icon: 'lucide:wallet', iconClass: 'bg-primary/10 text-primary dark:bg-primary/15' },
      { label: 'Total Pesanan', value: '3.692', change: '+11,3%', trend: 'up' as const, icon: 'lucide:shopping-bag', iconClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400' },
      { label: 'Rata-rata Order', value: 'Rp 34,8 rb', change: '+3,9%', trend: 'up' as const, icon: 'lucide:receipt-text', iconClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
      { label: 'Pesanan Batal', value: '98', change: '-4,6%', trend: 'down' as const, icon: 'lucide:rotate-ccw', iconClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
    ]
  })

  const topProducts = [
    { name: 'Kopi Susu Gula Aren', category: 'Minuman', sold: 720, revenue: 'Rp 18,0 jt', pct: 100 },
    { name: 'Matcha Latte', category: 'Minuman', sold: 540, revenue: 'Rp 16,2 jt', pct: 75 },
    { name: 'Croissant Butter', category: 'Makanan', sold: 410, revenue: 'Rp 9,4 jt', pct: 57 },
    { name: 'Roti Bakar Cokelat', category: 'Makanan', sold: 380, revenue: 'Rp 6,8 jt', pct: 53 },
    { name: 'Teh Melati', category: 'Minuman', sold: 290, revenue: 'Rp 4,3 jt', pct: 40 },
  ]

  type TxnStatus = 'Lunas' | 'Pending' | 'Batal'

  const transactions: { id: string, customer: string, method: string, total: number, status: TxnStatus }[] = [
    { id: 'TRX-9041', customer: 'PT Maju Jaya', method: 'Transfer', total: 4850000, status: 'Lunas' },
    { id: 'TRX-9040', customer: 'Toko Berkah', method: 'QRIS', total: 1275000, status: 'Lunas' },
    { id: 'TRX-9039', customer: 'CV Sinar Abadi', method: 'Transfer', total: 8920000, status: 'Pending' },
    { id: 'TRX-9038', customer: 'Andi Pratama', method: 'QRIS', total: 185000, status: 'Lunas' },
    { id: 'TRX-9037', customer: 'UD Sumber Rezeki', method: 'Tunai', total: 2340000, status: 'Batal' },
    { id: 'TRX-9036', customer: 'Siti Nurhaliza', method: 'QRIS', total: 320000, status: 'Lunas' },
    { id: 'TRX-9035', customer: 'PT Karya Digital', method: 'Transfer', total: 6750000, status: 'Pending' },
  ]

  const activeStatus = ref('Semua')

  const statusTabs = [
    { value: 'Semua', label: 'Semua' },
    { value: 'Lunas', label: 'Lunas' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Batal', label: 'Batal' },
  ]

  const transactionColumns = [
    { key: 'id', label: 'ID Transaksi', class: 'text-left whitespace-nowrap' },
    { key: 'customer', label: 'Pelanggan', class: 'text-left' },
    { key: 'method', label: 'Metode', class: 'text-center whitespace-nowrap' },
    { key: 'total', label: 'Total', class: 'text-right whitespace-nowrap' },
    { key: 'status', label: 'Status', class: 'text-center' },
  ]

  const filteredTransactions = computed(() => {
    if (activeStatus.value === 'Semua') return transactions
    return transactions.filter(t => t.status === activeStatus.value)
  })

  const statusVariant = (status: TxnStatus): 'success' | 'warning' | 'danger' => {
    if (status === 'Lunas') return 'success'
    if (status === 'Pending') return 'warning'
    return 'danger'
  }
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 class="text-3xl text-gray-900 font-bold dark:text-white">
          Dashboard Bisnis
        </h1>
        <p class="mt-1 text-sm text-slate-500 dark:text-gray-400">
          Pantau pendapatan, pesanan, dan performa produk dalam satu tempat.
        </p>
      </div>
      <app-tab
        v-model="activePeriod"
        :tabs="periodTabs" />
    </div>

    <div class="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
      <app-card
        v-for="stat in stats"
        :key="stat.label"
        :hover="false">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-sm text-slate-500 dark:text-gray-400">
              {{ stat.label }}
            </p>
            <p class="mt-1 text-2xl text-gray-900 font-bold dark:text-white">
              {{ stat.value }}
            </p>
          </div>
          <div
            class="size-10 flex shrink-0 items-center justify-center rounded-xl"
            :class="stat.iconClass">
            <app-icon
              :icon="stat.icon"
              class="size-5" />
          </div>
        </div>
        <div class="mt-3 flex items-center gap-1.5 text-sm">
          <app-icon
            :icon="stat.trend === 'up' ? 'lucide:trending-up' : 'lucide:trending-down'"
            class="h-4 w-4"
            :class="stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'" />
          <span
            class="font-semibold"
            :class="stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'">
            {{ stat.change }}
          </span>
          <span class="text-slate-400 dark:text-gray-500">vs periode lalu</span>
        </div>
      </app-card>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <app-card
        title="Tren Pendapatan"
        description="Pendapatan vs pengeluaran pada periode berjalan."
        class="lg:col-span-2">
        <app-line-chart
          :series="revenueSeries"
          :categories="revenueCategories"
          :colors="['#F97316', '#0ea5e9']"
          :tooltip-formatter="formatRpFull"
          :y-formatter="formatRpShort"
          legend-position="top"
          :height="300" />
      </app-card>

      <app-card
        title="Komposisi Omzet"
        description="Kontribusi tiap kategori terhadap total omzet.">
        <app-pie-chart
          :series="categorySeries"
          :labels="categoryLabels"
          type="donut"
          total-label="Omzet"
          :total-formatter="formatRpShort"
          :tooltip-formatter="formatRpFull"
          :data-labels="false"
          :height="300" />
      </app-card>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <app-card
        title="Penjualan per Produk"
        description="Jumlah unit terjual untuk tiap produk unggulan."
        class="lg:col-span-2">
        <app-bar-chart
          :series="productSeries"
          :categories="productCategories"
          :colors="['#F97316']"
          :height="300"
          :border-radius="6" />
      </app-card>

      <app-card
        title="Produk Terlaris"
        description="Peringkat produk berdasarkan unit terjual.">
        <div class="space-y-4">
          <div
            v-for="(product, idx) in topProducts"
            :key="product.name">
            <div class="flex items-center justify-between gap-2">
              <div class="min-w-0 flex items-center gap-3">
                <span class="w-5 shrink-0 text-sm text-slate-400 font-bold dark:text-gray-500">
                  {{ idx + 1 }}
                </span>
                <div class="min-w-0">
                  <p class="truncate text-sm text-gray-900 font-semibold dark:text-white">
                    {{ product.name }}
                  </p>
                  <p class="text-xs text-slate-400 dark:text-gray-500">
                    {{ product.category }} · {{ product.sold }} terjual
                  </p>
                </div>
              </div>
              <span class="shrink-0 text-xs text-slate-500 font-semibold dark:text-gray-400">
                {{ product.revenue }}
              </span>
            </div>
            <div class="ml-8 mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <div
                class="h-full rounded-full bg-primary transition-all"
                :style="{ width: `${product.pct}%` }"></div>
            </div>
          </div>
        </div>
      </app-card>
    </div>

    <div class="space-y-4">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-xl text-gray-900 font-semibold dark:text-white">
          Transaksi Terbaru
        </h2>
        <app-tab
          v-model="activeStatus"
          :tabs="statusTabs" />
      </div>

      <app-card :hover="false">
        <app-table
          :columns="transactionColumns"
          :rows="filteredTransactions"
          empty-message="Tidak ada transaksi pada filter ini">
          <template #cell-total="{ value }">
            <span class="font-semibold">{{ formatRpFull(value as number) }}</span>
          </template>
          <template #cell-status="{ value }">
            <app-badge
              :label="value as string"
              :variant="statusVariant(value as TxnStatus)"
              :icon="true" />
          </template>
        </app-table>
      </app-card>
    </div>
  </div>
</template>
