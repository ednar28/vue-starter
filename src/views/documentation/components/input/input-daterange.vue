<script setup lang="ts">
  import { ref } from 'vue'

  const dates = ref<Date[]>()
  const datesWithLimits = ref<Date[]>()

  const today = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0)

  const codeDefault = [
    '<app-input-daterange',
    '  v-model="dates"',
    '  label="Pilih rentang tanggal"',
    '  placeholder="Pilih 2 tanggal" />',
  ].join('\n')

  const codeWithLimits = [
    '<app-input-daterange',
    '  v-model="dates"',
    '  label="Batas min & max"',
    '  placeholder="Pilih rentang tanggal"',
    '  :min-date="minDate"',
    '  :max-date="maxDate" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Date Range"
    description="Input rentang tanggal (2 tanggal) berbasis <code>@vuepic/vue-datepicker</code>. Tanpa time picker."
    :code="codeDefault">
    <div class="max-w-md">
      <app-input-daterange
        v-model="dates"
        label="Pilih rentang tanggal"
        placeholder="Pilih 2 tanggal" />
    </div>
  </app-doc-section>

  <app-doc-section
    title="Date Range - Min & Max"
    description="Batasi tanggal yang bisa dipilih dengan <code>minDate</code> dan <code>maxDate</code>."
    :code="codeWithLimits">
    <div class="max-w-md">
      <app-input-daterange
        v-model="datesWithLimits"
        label="Batas min & max"
        placeholder="Pilih rentang tanggal"
        :min-date="minDate"
        :max-date="maxDate" />
    </div>
  </app-doc-section>
</template>
