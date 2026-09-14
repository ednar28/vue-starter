<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'

  interface LineSeries {
    name: string,
    data: number[],
  }

  interface BaseProps {
    series: LineSeries[],
    categories?: string[],
    colors?: string[],
    height?: number,
    width?: string | number,
    legend?: boolean,
    legendPosition?: 'top' | 'bottom' | 'left' | 'right',
    legendOffsetX?: number,
    legendFontSize?: number,
    dataLabels?: boolean,
    strokeCurve?: 'smooth' | 'straight' | 'stepline',
    strokeWidth?: number,
    markers?: boolean,
    markerSize?: number,
    animation?: boolean,
    grid?: boolean,
    toolbar?: boolean,
    tooltipFormatter?: (value: number) => string,
    yFormatter?: (value: number) => string,
    xFormatter?: (value: string) => string,
    yAxisFromZero?: boolean,
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

  // Snapshot options. Only re-evaluated on full re-render so the
  // vue3-apexcharts options watcher (which strips functions via
  // JSON.stringify) does not fire on every reactive change.
  const optionsSnapshot = computed(() => {
    void renderKey.value
    return buildOptions.value
  })

  // Manual update that preserves formatter functions.
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

  // Update the chart manually to keep formatter functions intact.
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
    chart: chartRef,
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
