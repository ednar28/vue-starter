import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'
import { computed, ref } from 'vue'

export type RangeValue = [] | [Date] | [Date, Date]

const WEEKDAYS = ['Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb', 'Mg']

export function useCalendar () {
  const viewDate = ref(new Date())

  const days = computed(() => {
    const monthStart = startOfMonth(viewDate.value)
    const monthEnd = endOfMonth(viewDate.value)
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 })
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })
    return eachDayOfInterval({ start: gridStart, end: gridEnd })
  })

  const nextMonth = () => {
    viewDate.value = addMonths(viewDate.value, 1)
  }

  const prevMonth = () => {
    viewDate.value = subMonths(viewDate.value, 1)
  }

  const isDisabled = (day: Date, min?: Date, max?: Date) => {
    if (min && isBefore(day, startOfMonth(min))) return true
    if (max && isAfter(day, endOfMonth(max))) return true
    return false
  }

  const isInRange = (day: Date, range: RangeValue) => {
    if (range.length !== 2) return false
    return !isBefore(day, range[0]) && !isAfter(day, range[1])
  }

  return {
    viewDate,
    days,
    weekdays: WEEKDAYS,
    nextMonth,
    prevMonth,
    isSameDay,
    isSameMonth,
    isDisabled,
    isInRange,
  }
}
