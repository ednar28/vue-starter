<script setup lang="ts">
  import { format } from 'date-fns'
  import { id as localeId } from 'date-fns/locale'
  import { nanoid } from 'nanoid'
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import AppInputErrorMessage from '@/components/input/app-input-error-message.vue'
  import AppInputLabel from '@/components/input/app-input-label.vue'
  import { type RangeValue, useCalendar } from '@/components/input/datepicker/use-calendar'
  import { fmt } from '@/functions'

  const props = defineProps<{
    id?: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    error?: string | string[],
    disabled?: boolean,
    minDate?: Date,
    maxDate?: Date,
  }>()

  const defaultId = nanoid()
  const inputId = computed(() => props.id ?? 'daterange-' + defaultId)

  const dates = defineModel<Date[]>()

  const open = ref(false)
  const root = ref<HTMLElement>()

  const handleClickOutside = (e: MouseEvent) => {
    if (!open.value) return
    if (root.value?.contains(e.target as Node)) return
    open.value = false
  }

  onMounted(() => document.addEventListener('mousedown', handleClickOutside))
  onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))

  const { viewDate, days, weekdays, nextMonth, prevMonth, isSameDay, isSameMonth, isDisabled, isInRange } = useCalendar()

  // preview tanggal yang di-hover untuk highlight range yang belum final
  const hoverDate = ref<Date>()

  const range = computed<RangeValue>(() => {
    if (!dates.value || dates.value.length === 0) return []
    if (dates.value.length === 1) {
      if (hoverDate.value) {
        const [start] = dates.value
        return isBefore(hoverDate.value, start)
          ? [hoverDate.value, start]
          : [start, hoverDate.value]
      }
      return [dates.value[0]]
    }
    return [dates.value[0], dates.value[1]]
  })

  const display = computed(() => {
    if (!dates.value || dates.value.length === 0) return ''
    if (dates.value.length === 1) return fmt.date(dates.value[0], 'd MMM yyyy')
    return [fmt.date(dates.value[0], 'd MMM yyyy'), fmt.date(dates.value[1], 'd MMM yyyy')].join(' - ')
  })

  const select = (day: Date) => {
    if (isDisabled(day, props.minDate, props.maxDate)) return

    if (!dates.value || dates.value.length === 0 || dates.value.length === 2) {
      dates.value = [day]
      return
    }

    const [first] = dates.value
    if (isBefore(day, first)) {
      dates.value = [day, first]
    } else {
      dates.value = [first, day]
    }
    open.value = false
  }

  const toggle = () => {
    if (props.disabled) return
    if (dates.value?.[0]) viewDate.value = dates.value[0]
    open.value = !open.value
  }

  const monthLabel = computed(() => format(viewDate.value, 'MMMM yyyy', { locale: localeId }))

  const cellState = (day: Date): 'selected' | 'in-range' | 'range-edge' | 'normal' => {
    const r = range.value
    if (r.length === 0) return 'normal'
    if (r.length === 1) {
      return isSameDay(day, r[0]) ? 'selected' : 'normal'
    }
    const [start, end] = r
    if (isSameDay(day, start) || isSameDay(day, end)) return 'range-edge'
    if (isInRange(day, r)) return 'in-range'
    return 'normal'
  }

  // local import untuk hindari conflict dengan date-fns method di template
  function isBefore (a: Date, b: Date) {
    return a.getTime() < b.getTime()
  }
</script>

<template>
  <div
    ref="root"
    class="relative">
    <app-input-label
      :for-id="inputId"
      :label="props.label"
      :required="props.required" />

    <div class="relative flex items-center">
      <button
        :id="inputId"
        type="button"
        class="form-input w-full pr-8 text-left"
        :class="[display ? '' : 'text-gray-400', { 'cursor-not-allowed': disabled }]"
        :disabled="disabled"
        @click="toggle">
        {{ display || placeholder || 'Pilih rentang tanggal' }}
      </button>
      <app-icon
        icon="heroicons:calendar-days"
        class="pointer-events-none absolute right-2 h-4 w-4 text-gray-400" />
    </div>

    <app-input-error-message :msg="error" />

    <transition name="dp-fade">
      <div
        v-if="open"
        class="absolute left-0 z-50 mt-2 w-[21rem] border border-gray-200 rounded-xl bg-white p-4 shadow-lg dark:border-white/10 dark:bg-surface"
        @mouseleave="hoverDate = undefined">
        <!-- Header -->
        <div class="mb-3 flex items-center justify-between">
          <button
            type="button"
            class="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            @click="prevMonth">
            <app-icon
              icon="heroicons:chevron-left"
              class="h-4 w-4" />
          </button>
          <span class="text-sm text-gray-900 font-semibold dark:text-white">
            {{ monthLabel }}
          </span>
          <button
            type="button"
            class="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            @click="nextMonth">
            <app-icon
              icon="heroicons:chevron-right"
              class="h-4 w-4" />
          </button>
        </div>

        <!-- Weekdays -->
        <div class="grid grid-cols-7 mb-2 gap-1">
          <div
            v-for="w in weekdays"
            :key="w"
            class="py-1 text-center text-xs text-gray-400 font-medium dark:text-gray-500">
            {{ w }}
          </div>
        </div>

        <!-- Days -->
        <div class="grid grid-cols-7 gap-1">
          <button
            v-for="day in days"
            :key="day.toISOString()"
            type="button"
            class="h-8 flex items-center justify-center rounded-md text-sm transition"
            :class="[
              !isSameMonth(day, viewDate) ? 'text-gray-300 dark:text-gray-600' : 'dark:text-gray-200',
              cellState(day) === 'selected' && 'bg-primary/10 text-primary! font-semibold ring-1 ring-inset ring-primary/20 shadow-sm dark:bg-primary/15 dark:ring-primary/30',
              cellState(day) === 'range-edge' && 'bg-primary/10 text-primary! font-semibold ring-1 ring-inset ring-primary/20 shadow-sm dark:bg-primary/15 dark:ring-primary/30',
              cellState(day) === 'in-range' && 'bg-primary/10 text-primary',
              cellState(day) === 'normal' && isSameMonth(day, viewDate) && 'hover:bg-gray-100 dark:hover:bg-white/10',
              isDisabled(day, props.minDate, props.maxDate) ? 'cursor-not-allowed opacity-40 hover:bg-transparent dark:hover:bg-transparent' : 'cursor-pointer',
            ]"
            :disabled="isDisabled(day, props.minDate, props.maxDate)"
            @click="select(day)"
            @mouseenter="hoverDate = day">
            {{ day.getDate() }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .dp-fade-enter-active,
  .dp-fade-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
  }
  .dp-fade-enter-from,
  .dp-fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
  }
</style>
