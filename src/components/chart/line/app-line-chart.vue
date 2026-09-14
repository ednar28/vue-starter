<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'

  interface LineSeries {
    /** Nama series, mis: 'Penjualan'. */
    name: string,
    /** Data points, mis: [10, 41, 35, 51, 49, 62, 69]. */
    data: number[],
  }

  interface BaseProps {
    /** Series data. Format: [{ name: 'Penjualan', data: [10, 41, 35] }]. */
    series: LineSeries[],
    /** Kategori untuk sumbu X, mis: ['Jan', 'Feb', 'Mar']. */
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
    /** Tampilkan data labels (angka di atas point). Default false. */
    dataLabels?: boolean,
    /** Stroke curve style. Default 'smooth'. */
    strokeCurve?: 'smooth' | 'straight' | 'stepline',
    /** Ketebalan garis (px). Default 3. */
    strokeWidth?: number,
    /** Tampilkan markers (titik) di line. Default true. */
    markers?: boolean,
    /** Ukuran marker (px). Default 4. */
    markerSize?: number,
    /** Chart animation enabled. Default true. */
    animation?: boolean,
    /** Tampilkan grid lines. Default true. */
    grid?: boolean,
    /** Tampilkan toolbar (zoom, download, dll). Default false. */
    toolbar?: boolean,
    /** Format angka tooltip, mis: (v) => 'Rp ' + v.toLocaleString(). Default follow locale. */
    tooltipFormatter?: (value: number) => string,
    /** Format angka sumbu Y, mis: (v) => v + ' unit'. Default follow locale. */
    yFormatter?: (value: number) => string,
    /** Format label sumbu X. Default return as-is. */
    xFormatter?: (value: string) => string,
    /** Tampilkan sumbu Y dari 0. Default true. */
    yAxisFromZero?: boolean,
    /** Custom ApexCharts options override (deep merged last). */
    options?: Record<string, unknown>,
  }

  const props = withDefaults(defineProps<BaseProps>(), {
    categories: () => [],
    colors: () => [],
    options: () => ({}),
    tooltipFormatter: undefined,
    yFormatter: undefined,
    xFormatter: undefined,
    height: 320,
    width: '100%',
    legend: true,
    legendPosition: 'bottom',
    legendOffsetX: 0,
    legendFontSize: 13,
    dataLabels: false,
    strokeCurve: 'smooth',
    strokeWidth: 3,
    markers: true,
    markerSize: 4,
    animation: true,
    grid: true,
    toolbar: false,
    yAxisFromZero: true,
  })

  // Default palette aligned with UnoCSS theme tokens.
  const DEFAULT_COLORS = ['#F97316', '#0ea5e9', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#64748b', '#f43f5e']

  const fmtThousands = (n: number): string => new Intl.NumberFormat('id-ID').format(n)

  const resolvedColors = computed(() => props.colors && props.colors.length ? props.colors : DEFAULT_COLORS)

  const chartRef = shallowRef<InstanceType<typeof VueApexCharts> | null>(null)

  const renderKey = ref(0)

  const buildOptions = computed(() => {
    const tooltipFmt = (val: number): string => {
      if (props.tooltipFormatter) return props.tooltipFormatter(val)
      return fmtThousands(val)
    }

    const yFmt = (val: number): string => {
      if (props.yFormatter) return props.yFormatter(val)
      return fmtThousands(val)
    }

    const xFmt = (val: string): string => {
      if (props.xFormatter) return props.xFormatter(val)
      return val
    }

    const base: Record<string, unknown> = {
      chart: {
        type: 'line',
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
      xaxis: {
        categories: [...props.categories],
        labels: {
          style: { fontFamily: 'inherit' },
          formatter: xFmt,
        },
      },
      yaxis: {
        min: props.yAxisFromZero ? 0 : undefined,
        labels: {
          style: { fontFamily: 'inherit' },
          formatter: (val: number) => yFmt(val),
        },
      },
      stroke: {
        width: props.strokeWidth,
        curve: props.strokeCurve,
      },
      dataLabels: {
        enabled: props.dataLabels,
        style: { fontSize: '12px', fontWeight: 600, fontFamily: 'inherit' },
        background: { enabled: false },
      },
      markers: {
        size: props.markers ? props.markerSize : 0,
        hover: { size: props.markers ? props.markerSize + 2 : 0 },
        shape: 'circle',
      },
      legend: {
        show: props.legend,
        position: props.legendPosition,
        offsetX: props.legendOffsetX,
        fontSize: `${props.legendFontSize}px`,
        fontFamily: 'inherit',
        markers: { size: 6, shape: 'circle' },
        itemMargin: { horizontal: 8, vertical: 4 },
      },
      grid: {
        show: props.grid,
        borderColor: '#e5e7eb',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: props.grid } },
        padding: { top: 0, right: 10, bottom: 0, left: 10 },
      },
      tooltip: {
        enabled: true,
        shared: true,
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
    () => [props.series, props.categories, props.colors] as const,
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
  <div class="app-line-chart w-full">
    <vue-apex-charts
      :key="renderKey"
      ref="chartRef"
      type="line"
      :series="series"
      :height="height"
      :width="width"
      :options="optionsSnapshot" />
  </div>
</template>

<style scoped>
  .app-line-chart :deep(.apexcharts-text) {
    fill: currentColor;
  }
</style>
