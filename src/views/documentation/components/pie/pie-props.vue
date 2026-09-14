<script setup lang="ts">
  const propsRows = [
    { name: 'series', type: 'number[]', desc: 'Array nilai tiap slice. Required. Mis: [44, 55, 13].' },
    { name: 'labels', type: 'string[]', desc: 'Label tiap nilai, sejajar dengan series. Default []' },
    { name: 'type', type: "'pie' | 'donut'", desc: 'Tipe chart. Default "donut".' },
    { name: 'colors', type: 'string[]', desc: 'Palette warna custom. Default palette UnoCSS (primary, secondary, amber, ...).' },
    { name: 'height', type: 'number', desc: 'Tinggi chart dalam px. Default 320.' },
    { name: 'width', type: 'string | number', desc: 'Lebar chart. Default "100%".' },
    { name: 'legend', type: 'boolean', desc: 'Tampilkan legend. Default true.' },
    { name: 'legendPosition', type: "'top' | 'bottom' | 'left' | 'right'", desc: 'Posisi legend. Default "bottom".' },
    { name: 'legendOffsetX', type: 'number', desc: 'Offset horizontal legend (px). Default 0.' },
    { name: 'legendFontSize', type: 'number', desc: 'Font size legend (px). Default 13.' },
    { name: 'total', type: 'boolean', desc: 'Tampilkan label total di tengah (donut only). Default true.' },
    { name: 'totalLabel', type: 'string', desc: 'Label di atas total. Default "Total".' },
    { name: 'totalFormatter', type: '(value: number) => string', desc: 'Format angka total. Mis: (v) => "Rp " + v.toLocaleString().' },
    { name: 'tooltipFormatter', type: '(value: number) => string', desc: 'Format angka tooltip saat hover slice.' },
    { name: 'dataLabelFormatter', type: '(value: number) => string', desc: 'Format label di atas slice. Default persentase.' },
    { name: 'dataLabels', type: 'boolean', desc: 'Tampilkan data labels (persentase). Default true.' },
    { name: 'donutSize', type: 'string | number', desc: 'Ukuran lubang donut, mis: "65%", "50%". Default "65%".' },
    { name: 'strokeCurve', type: "'smooth' | 'straight' | 'stepline' | 'round'", desc: 'Stroke cap style. Default "round".' },
    { name: 'strokeWidth', type: 'number', desc: 'Tebal garis antar slice (px). Default 2.' },
    { name: 'animation', type: 'boolean', desc: 'Aktifkan animasi. Default true.' },
    { name: 'options', type: 'Record<string, unknown>', desc: 'Override ApexCharts options (deep merged last).' },
  ]

  const exposeRows = [
    { name: 'chart', type: 'ShallowRef<Vue | null>', desc: 'Akses instance VueApexCharts.' },
    { name: 'rerender', type: '() => void', desc: 'Paksa re-render chart.' },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description="Semua props optional kecuali <code>series</code>. Dirancang friendly: cukup isi <code>series</code> + <code>labels</code> sudah jalan.">
    <app-props-table :rows="propsRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Exposed Methods"
    description="Komponen expose instance VueApexCharts via <code>ref</code> untuk akses API ApexCharts (updateSeries, toggleSeries, dll).">
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
        <li>Komponen ini <strong class="text-gray-900 font-semibold dark:text-white">tidak terdaftar global</strong>. Import manual: <code class="text-primary-300">import &#123; AppPieChart &#125; from '@/components/chart/pie'</code>.</li>
        <li>Default tipe <code>donut</code> dengan label total di tengah. Set <code>type="pie"</code> untuk pie penuh.</li>
        <li>Sembunyikan total dengan <code>:total="false"</code>, atau ganti labelnya dengan <code>total-label="..."</code>.</li>
        <li>Untuk format mata uang, gunakan <code>totalFormatter</code> + <code>tooltipFormatter</code> bersamaan.</li>
        <li>Override total ApexCharts options via prop <code>options</code> (deep merged setelah default).</li>
        <li>Dark mode: ApexCharts otomatis ikut background transparent — warna text pakai <code>currentColor</code>.</li>
      </ul>
    </div>
  </app-doc-section>
</template>
