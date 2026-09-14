<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'

  type PieDonutType = 'pie' | 'donut'

  interface BaseProps {
    series: number[],
    labels?: string[],
    type?: PieDonutType,
    colors?: string[],
    height?: number,
    width?: string | number,
    legend?: boolean,
    legendPosition?: 'top' | 'bottom' | 'left' | 'right',
    legendOffsetX?: number,
    legendFontSize?: number,
    total?: boolean,
    totalLabel?: string,
    totalFormatter?: (value: number) => string,
    tooltipFormatter?: (value: number) => string,
    dataLabelFormatter?: (value: number) => string,
    dataLabels?: boolean,
    donutSize?: string | number,
    strokeCurve?: 'smooth' | 'straight' | 'stepline' | 'round',
    animation?: boolean,
    strokeWidth?: number,
    options?: Record<string, unknown>,
  }

  const props = withDefaults(defineProps<BaseProps>(), {
    labels: () => [],
    colors: () => [],
    totalFormatter: undefined,
    tooltipFormatter: undefined,
    dataLabelFormatter: undefined,
    options: () => ({}),
    type: 'donut',
    height: 320,
    width: '100%',
    legend: true,
    legendPosition: 'bottom',
    legendOffsetX: 0,
    legendFontSize: 13,
    total: true,
    totalLabel: 'Total',
    dataLabels: true,
    donutSize: '65%',
    strokeCurve: 'round',
    animation: true,
    strokeWidth: 2,
  })

  const DEFAULT_COLORS = ['#F97316', '#0ea5e9', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#64748b', '#f43f5e']

  const fmtThousands = (n: number): string => new Intl.NumberFormat('id-ID').format(n)

  const resolvedColors = computed(() => props.colors && props.colors.length ? props.colors : DEFAULT_COLORS)

  const isDonut = computed(() => props.type === 'donut')

  const chartRef = shallowRef<InstanceType<typeof VueApexCharts> | null>(null)

  const renderKey = ref(0)

  const buildOptions = computed(() => {
    const totalValue = props.series.reduce((acc, n) => acc + (Number(n) || 0), 0)

    const dataLabelsFormatter = (val: number | string): string => {
      const num = typeof val === 'string' ? Number.parseFloat(val) || 0 : val
      const pct = totalValue > 0 ? ((num / totalValue) * 100).toFixed(1) : '0.0'
      return `${pct}%`
    }

    const totalFmt = (val: number): string => {
      if (props.totalFormatter) return props.totalFormatter(val)
      return fmtThousands(val)
    }

    const tooltipFmt = (val: number): string => {
      if (props.tooltipFormatter) return props.tooltipFormatter(val)
      return fmtThousands(val)
    }

    const base: Record<string, unknown> = {
      chart: {
        type: props.type,
        height: props.height,
        width: props.width,
        fontFamily: 'inherit',
        background: 'transparent',
        animations: { enabled: props.animation },
        dropShadow: { enabled: false },
      },
      labels: props.labels ?? [],
      colors: resolvedColors.value,
      stroke: {
        width: props.strokeWidth,
        curve: props.strokeCurve as string,
      },
      dataLabels: {
        enabled: props.dataLabels,
        formatter: props.dataLabelFormatter ?? dataLabelsFormatter,
        style: { fontSize: '12px', fontWeight: 600 },
        dropShadow: { enabled: false },
      },
      plotOptions: {
        pie: {
          donut: isDonut.value
            ? {
              size: props.donutSize,
              labels: {
                show: props.total,
                name: { fontSize: '13px', fontFamily: 'inherit' },
                value: {
                  fontSize: '22px',
                  fontWeight: 700,
                  fontFamily: 'inherit',
                  formatter: (val: string) => totalFmt(Number(val)),
                },
                total: {
                  show: props.total,
                  showAlways: props.total,
                  label: props.totalLabel,
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  formatter: () => totalFmt(totalValue),
                },
              },
            }
            : undefined,
        },
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
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
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
    () => [props.series, props.labels, props.colors, props.type] as const,
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
  <div class="app-pie-chart w-full">
    <vue-apex-charts
      :key="renderKey"
      ref="chartRef"
      :type="type"
      :series="series"
      :height="height"
      :width="width"
      :options="optionsSnapshot" />
  </div>
</template>

<style scoped>
  .app-pie-chart :deep(.apexcharts-text) {
    fill: currentColor;
  }
</style>
