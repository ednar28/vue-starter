<script setup lang="ts">
  import { format } from 'date-fns'
  import { id as localeId } from 'date-fns/locale'
  import { nanoid } from 'nanoid'
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import AppInputErrorMessage from '@/components/input/app-input-error-message.vue'
  import AppInputLabel from '@/components/input/app-input-label.vue'
  import { useCalendar } from '@/components/input/datepicker/use-calendar'
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
  const inputId = computed(() => props.id ?? 'datepicker-' + defaultId)

  const date = defineModel<Date>()

  const open = ref(false)
  const root = ref<HTMLElement>()

  const handleClickOutside = (e: MouseEvent) => {
    if (!open.value) return
    if (root.value?.contains(e.target as Node)) return
    open.value = false
  }

  onMounted(() => document.addEventListener('mousedown', handleClickOutside))
  onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))

  const { viewDate, days, weekdays, nextMonth, prevMonth, isSameDay, isSameMonth, isDisabled } = useCalendar()

  const display = computed(() => (date.value ? fmt.date(date.value as Date, 'd MMM yyyy') : ''))

  const isSelected = (day: Date) => date.value != null && isSameDay(day, date.value as Date)

  const select = (day: Date) => {
    if (isDisabled(day, props.minDate, props.maxDate)) return
    date.value = day
    open.value = false
  }

  const toggle = () => {
    if (props.disabled) return
    if (date.value) viewDate.value = date.value
    open.value = !open.value
  }

  const monthLabel = computed(() => format(viewDate.value, 'MMMM yyyy', { locale: localeId }))
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
        {{ display || placeholder || 'Pilih tanggal' }}
      </button>
      <app-icon
        icon="heroicons:calendar-days"
        class="pointer-events-none absolute right-2 h-4 w-4 text-gray-400" />
    </div>

    <app-input-error-message :msg="error" />

    <transition name="dp-fade">
      <div
        v-if="open"
        class="absolute left-0 z-50 mt-2 w-[21rem] border border-gray-200 rounded-xl bg-white p-4 shadow-lg dark:border-white/10 dark:bg-surface">
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
              isSameMonth(day, viewDate) ? '' : 'text-gray-300 dark:text-gray-600',
              isSelected(day) ? 'bg-primary/10 text-primary! font-semibold ring-1 ring-inset ring-primary/20 shadow-sm dark:bg-primary/15 dark:ring-primary/30' : 'hover:bg-gray-100 dark:hover:bg-white/10 dark:text-gray-200',
              isDisabled(day, props.minDate, props.maxDate) ? 'cursor-not-allowed opacity-40 hover:bg-transparent dark:hover:bg-transparent' : 'cursor-pointer',
            ]"
            :disabled="isDisabled(day, props.minDate, props.maxDate)"
            @click="select(day)">
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
