<script setup lang="ts">
  import '@vuepic/vue-datepicker/dist/main.css'
  import { nanoid } from 'nanoid'
  import { computed, defineAsyncComponent } from 'vue'
  import AppInputLabel from '@/components/input/app-input-label.vue'
  import { fmt } from '@/functions'

  const VueDatePicker = defineAsyncComponent(() => import('@vuepic/vue-datepicker').then(m => m.VueDatePicker))

  const props = defineProps<{
    id?: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    error?: string | string[],
  }>()

  const defaultId = nanoid()
  const inputId = computed(() => props.id ?? 'text-' + defaultId)

  const date = defineModel<Date[]>()

  const format = (dates: Date[]) => {
    if (dates.length === 1) {
      return fmt.date(dates[0], 'd MMM yyyy')
    }

    return [fmt.date(dates[0], 'd MMM yyyy'), fmt.date(dates[1], 'd MMM yyyy')].join(' - ')
  }
</script>

<template>
  <div>
    <app-input-label
      :for-id="inputId"
      :label="props.label"
      :required="props.required" />
    <vue-date-picker
      :id="inputId"
      v-model="date"
      class="datepicker"
      :placeholder="placeholder"
      :range="{ partialRange: false }"
      :format="format" />
    <app-input-error-message :msg="error" />
  </div>
</template>

<style lang="postcss" scoped>
  .datepicker {
    /*General*/
    --dp-font-family: -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen, ubuntu,
      cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --dp-border-radius: 0.25rem; /*Configurable border-radius*/
    --dp-cell-border-radius: 4px; /*Specific border radius for the calendar cell*/
    --dp-common-transition: all 0.1s ease-in; /*Generic transition applied on buttons and calendar cells*/

    /*Sizing*/
    --dp-button-height: 35px; /*Size for buttons in overlays*/
    --dp-month-year-row-height: 35px; /*Height of the month-year select row*/
    --dp-month-year-row-button-size: 35px; /*Specific height for the next/previous buttons*/
    --dp-button-icon-height: 20px; /*Icon sizing in buttons*/
    --dp-cell-size: 35px; /*Width and height of calendar cell*/
    --dp-cell-padding: 5px; /*Padding in the cell*/
    --dp-common-padding: 10px; /*Common padding used*/
    --dp-input-icon-padding: 35px; /*Padding on the left side of the input if icon is present*/
    --dp-input-padding: 6px 30px 6px 12px; /*Padding in the input*/
    --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
    --dp-action-buttons-padding: 2px 5px; /*Adjust padding for the action buttons in action row*/
    --dp-row-maring: 5px 0; /*Adjust the spacing between rows in the calendar*/
    --dp-calendar-header-cell-padding: 0.5rem; /*Adjust padding in calendar header cells*/
    --dp-two-calendars-spacing: 10px; /*Space between multiple calendars*/
    --dp-overlay-col-padding: 3px; /*Padding in the overlay column*/
    --dp-time-inc-dec-button-size: 32px; /*Sizing for arrow buttons in the time picker*/
    --dp-menu-padding: 6px 8px; /*Menu padding*/

    /*Font sizes*/
    --dp-font-size: 0.875rem; /*Default font-size*/
    --dp-preview-font-size: 0.875rem; /*Font size of the date preview in the action row*/
    --dp-time-font-size: 0.8rem; /*Font size in the time picker*/

    /*Transitions*/
    --dp-animation-duration: 0.1s; /*Transition duration*/
    --dp-menu-appear-transition-timing: cubic-bezier(
      0.4,
      0,
      1,
      1
    ); /*Timing on menu appear animation*/
    --dp-transition-timing: ease-out; /*Timing on slide animations*/
  }
</style>
