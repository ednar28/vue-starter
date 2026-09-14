<script setup lang="ts">
  const propsRows = [
    { name: 'series', type: '{ name: string, data: number[] }[]', desc: 'Array object series. Setiap object punya `name` dan `data` (array angka). Required.' },
    { name: 'categories', type: 'string[]', desc: 'Label sumbu X, mis: [\'Produk A\', \'Produk B\']. Default []' },
    { name: 'colors', type: 'string[]', desc: 'Palette warna custom. Default palette UnoCSS.' },
    { name: 'height', type: 'number', desc: 'Tinggi chart (px). Default 320.' },
    { name: 'width', type: 'string | number', desc: 'Lebar chart. Default "100%".' },
    { name: 'legend', type: 'boolean', desc: 'Tampilkan legend. Default true.' },
    { name: 'legendPosition', type: "'top' | 'bottom' | 'left' | 'right'", desc: 'Posisi legend. Default "bottom".' },
    { name: 'legendOffsetX', type: 'number', desc: 'Offset horizontal legend (px). Default 0.' },
    { name: 'legendFontSize', type: 'number', desc: 'Font size legend (px). Default 13.' },
    { name: 'dataLabels', type: 'boolean', desc: 'Tampilkan angka di atas bar. Default false.' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", desc: 'Orientasi bar. Default "vertical".' },
    { name: 'borderRadius', type: 'number', desc: 'Corner radius bar (px). Default 4.' },
    { name: 'barWidth', type: 'number', desc: 'Lebar bar dalam persen (0-100). Default 80.' },
    { name: 'barType', type: "'bar' | 'stacked'", desc: 'Jenis bar: grouped atau stacked. Default "bar".' },
    { name: 'animation', type: 'boolean', desc: 'Aktifkan animasi. Default true.' },
    { name: 'grid', type: 'boolean', desc: 'Tampilkan grid lines. Default true.' },
    { name: 'toolbar', type: 'boolean', desc: 'Tampilkan toolbar (zoom, download). Default false.' },
    { name: 'tooltipFormatter', type: '(value: number) => string', desc: 'Format angka tooltip. Mis: (v) => "Rp " + v.toLocaleString().' },
    { name: 'axisFormatter', type: '(value: number) => string', desc: 'Format angka sumbu (Y untuk vertical, X untuk horizontal).' },
    { name: 'categoryFormatter', type: '(value: string) => string', desc: 'Format label kategori.' },
    { name: 'axisFromZero', type: 'boolean', desc: 'Mulai axis dari 0. Default true.' },
    { name: 'options', type: 'Record<string, unknown>', desc: 'Override ApexCharts options (deep merged last).' },
  ]

  const exposeRows = [
    { name: 'chart', type: 'ShallowRef<Instance | null>', desc: 'Akses instance VueApexCharts.' },
    { name: 'rerender', type: '() => void', desc: 'Paksa re-render chart.' },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description="Semua props optional kecuali <code>series</code>. Format series: <code>[{ name: \'Penjualan\', data: [44, 55, 13] }]</code>.">
    <app-props-table :rows="propsRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Exposed Methods"
    description="Komponen expose instance VueApexCharts via <code>ref</code> untuk akses API ApexCharts.">
    <app-props-table :rows="exposeRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Usage Notes"
    description="">
    <div class="rounded-lg bg-gray-50 p-4 text-xs text-gray-600 leading-relaxed dark:bg-canvas dark:text-gray-400">
      <ul class="list-disc pl-4 space-y-1.5">
        <li>Komponen ini <strong class="text-gray-900 font-semibold dark:text-white">tidak terdaftar global</strong>. Import manual: <code class="text-primary-300">import &#123; AppBarChart &#125; from '@/components/chart/bar'</code>.</li>
        <li>Default <code>orientation="vertical"</code> (bar berdiri). Set <code>orientation="horizontal"</code> untuk bar tidur.</li>
        <li>Gunakan <code>barType="stacked"</code> untuk stacked bar (multi-series).</li>
        <li>Untuk format mata uang, gunakan <code>tooltipFormatter</code> + <code>axisFormatter</code> bersamaan.</li>
        <li>Multi-series: tambahkan lebih dari satu object di array <code>series</code>.</li>
        <li>Override total ApexCharts options via prop <code>options</code>.</li>
      </ul>
    </div>
  </app-doc-section>
</template>
