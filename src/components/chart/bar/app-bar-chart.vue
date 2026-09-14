<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'

  interface BarSeries {
    /** Nama series, mis: 'Penjualan'. */
    name: string,
    /** Data points, mis: [44, 55, 13, 43, 22]. */
    data: number[],
  }

  interface BaseProps {
    /** Series data. Format: [{ name: 'Penjualan', data: [44, 55, 13] }]. */
    series: BarSeries[],
    /** Kategori untuk sumbu X, mis: ['Produk A', 'Produk B']. */
    categories?: string[],
    /** Warna palette. Default palette UnoCSS primary/secondary/amber. */
    colors?: string[],
    /** Tinggi container (px). Default 320. */
    height?: number,
    /** Lebar container. Default '100%'. */
    width?: string | number,
    /** Tampilkan legend. Default true. */
    legend?: boolean,
    /** Posisi legend. Default 'bottom'. */
    legendPosition?: 'top' | 'bottom' | 'left' | 'right',
    /** Offset legend (margin). Default 0. */
    legendOffsetX?: number,
    /** Font size legend. Default 13. */
    legendFontSize?: number,
    /** Tampilkan data labels (angka di atas bar). Default false. */
    dataLabels?: boolean,
    /** Orientasi bar: 'horizontal' atau 'vertical'. Default 'vertical'. */
    orientation?: 'horizontal' | 'vertical',
    /** Ketebalan corner radius bar (px). Default 4. */
    borderRadius?: number,
    /** Lebar bar dalam persen (0-100). Default 80. */
    barWidth?: number,
    /** Jenis bar: 'bar' atau 'stacked'. Default 'bar'. */
    barType?: 'bar' | 'stacked',
    /** Chart animation enabled. Default true. */
    animation?: boolean,
    /** Tampilkan grid lines. Default true. */
    grid?: boolean,
    /** Tampilkan toolbar (zoom, download, dll). Default false. */
    toolbar?: boolean,
    /** Format angka tooltip, mis: (v) => 'Rp ' + v.toLocaleString(). Default follow locale. */
    tooltipFormatter?: (value: number) => string,
    /** Format angka sumbu (X untuk horizontal, Y untuk vertical). Default follow locale. */
    axisFormatter?: (value: number) => string,
    /** Format label kategori. Default return as-is. */
    categoryFormatter?: (value: string) => string,
    /** Tampilkan axis dari 0. Default true. */
    axisFromZero?: boolean,
    /** Custom ApexCharts options override (deep merged last). */
    options?: Record<string, unknown>,
  }

  const props = withDefaults(defineProps<BaseProps>(), {
    categories: () => [],
    colors: () => [],
    options: () => ({}),
    tooltipFormatter: undefined,
    axisFormatter: undefined,
    categoryFormatter: undefined,
    height: 320,
    width: '100%',
    legend: true,
    legendPosition: 'bottom',
    legendOffsetX: 0,
    legendFontSize: 13,
    dataLabels: false,
    orientation: 'vertical',
    borderRadius: 4,
    barWidth: 80,
    barType: 'bar',
    animation: true,
    grid: true,
    toolbar: false,
    axisFromZero: true,
  })

  // Default palette aligned with UnoCSS theme tokens.
  const DEFAULT_COLORS = ['#F97316', '#0ea5e9', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#64748b', '#f43f5e']

  const fmtThousands = (n: number): string => new Intl.NumberFormat('id-ID').format(n)

  const resolvedColors = computed(() => props.colors && props.colors.length ? props.colors : DEFAULT_COLORS)

  const isHorizontal = computed(() => props.orientation === 'horizontal')

  const chartRef = shallowRef<InstanceType<typeof VueApexCharts> | null>(null)

  const renderKey = ref(0)

  const buildOptions = computed(() => {
    const tooltipFmt = (val: number): string => {
      if (props.tooltipFormatter) return props.tooltipFormatter(val)
      return fmtThousands(val)
    }

    const axisFmt = (val: number): string => {
      if (props.axisFormatter) return props.axisFormatter(val)
      return fmtThousands(val)
    }

    const categoryFmt = (val: string): string => {
      if (props.categoryFormatter) return props.categoryFormatter(val)
      return val
    }

    const base: Record<string, unknown> = {
      chart: {
        type: 'bar',
        height: props.height,
        width: props.width,
        fontFamily: 'inherit',
        background: 'transparent',
        animations: { enabled: props.animation },
        toolbar: {
          show: props.toolbar,
          tools: { download: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true },
        },
      },
      colors: resolvedColors.value,
      series: props.series.map(s => ({ name: s.name, data: [...s.data] })),
      plotOptions: {
        bar: {
          horizontal: isHorizontal.value,
          borderRadius: props.borderRadius,
          barHeight: isHorizontal.value ? '80%' : undefined,
          columnWidth: !isHorizontal.value ? `${props.barWidth}%` : undefined,
          distributed: false,
          dataLabels: {
            position: isHorizontal.value ? 'right' : 'top',
          },
        },
      },
      xaxis: {
        categories: [...props.categories],
        labels: {
          style: { fontFamily: 'inherit' },
          formatter: categoryFmt,
        },
        min: isHorizontal.value ? (props.axisFromZero ? 0 : undefined) : undefined,
      },
      yaxis: isHorizontal.value
        ? { labels: { style: { fontFamily: 'inherit' } } }
        : {
          min: props.axisFromZero ? 0 : undefined,
          labels: {
            style: { fontFamily: 'inherit' },
            formatter: (val: number) => axisFmt(val),
          },
        },
      dataLabels: {
        enabled: props.dataLabels,
        style: { fontSize: '12px', fontWeight: 600, fontFamily: 'inherit' },
        background: { enabled: false },
        formatter: (val: number) => axisFmt(val),
      },
      legend: {
        show: props.legend,
        position: props.legendPosition,
        offsetX: props.legendOffsetX,
        fontSize: `${props.legendFontSize}px`,
        fontFamily: 'inherit',
        markers: { size: 6, shape: 'square' },
        itemMargin: { horizontal: 8, vertical: 4 },
      },
      grid: {
        show: props.grid,
        borderColor: '#e5e7eb',
        strokeDashArray: 4,
        xaxis: { lines: { show: isHorizontal.value ? props.grid : false } },
        yaxis: { lines: { show: !isHorizontal.value && props.grid } },
        padding: { top: 0, right: 10, bottom: 0, left: 10 },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => tooltipFmt(val),
        },
      },
      states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } },
      },
      responsive: [
        { breakpoint: 640, options: { legend: { position: 'bottom', fontSize: '12px' } } },
      ],
    }

    // Merge custom user options
    if (props.options) {
      const custom = { ...props.options }
      for (const key of Object.keys(custom)) {
        const userVal = custom[key]
        const cur = base[key]
        if (cur && typeof cur === 'object' && !Array.isArray(cur) && userVal && typeof userVal === 'object') {
          base[key] = { ...(cur as Record<string, unknown>), ...(userVal as Record<string, unknown>) }
        } else {
          base[key] = userVal
        }
      }
    }

    return base
  })

  // Snapshot options — only re-evaluated when renderKey changes
  const optionsSnapshot = computed(() => {
    void renderKey.value
    return buildOptions.value
  })

  // Manual update that preserves functions
  const manualUpdate = async () => {
    await nextTick()
    if (!chartRef.value) return
    const instance = chartRef.value.chart as unknown as { updateOptions?: (opts: Record<string, unknown>, redrawPaths?: boolean, animate?: boolean, updateSyncedCharts?: boolean) => Promise<void> } | undefined
    if (instance?.updateOptions) {
      await instance.updateOptions(buildOptions.value, false, false, true)
    } else {
      renderKey.value++
    }
  }

  // Watch for prop changes
  watch(
    () => [props.series, props.categories, props.colors, props.orientation] as const,
    () => {
      manualUpdate()
    },
    { deep: true },
  )

  onBeforeUnmount(() => {
    chartRef.value = null
  })

  defineExpose({
    /** Access underlying VueApexCharts instance. */
    chart: chartRef,
    /** Force re-render. */
    rerender: () => {
      renderKey.value++
    },
  })
</script>

<template>
  <div class="app-bar-chart w-full">
    <vue-apex-charts
      :key="renderKey"
      ref="chartRef"
      type="bar"
      :series="series"
      :height="height"
      :width="width"
      :options="optionsSnapshot" />
  </div>
</template>

<style scoped>
  .app-bar-chart :deep(.apexcharts-text) {
    fill: currentColor;
  }
</style>
