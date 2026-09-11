<script setup lang="ts">
  import { ref } from 'vue'

  const date = ref<Date>()
  const dateWithLimits = ref<Date>()
  const dateDisabled = ref<Date>()

  const today = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0)

  const codeDefault = [
    '<app-input-datepicker',
    '  v-model="date"',
    '  label="Pilih tanggal"',
    '  placeholder="Pilih satu tanggal" />',
  ].join('\n')

  const codeWithLimits = [
    '<app-input-datepicker',
    '  v-model="date"',
    '  label="Batas min & max"',
    '  placeholder="Pilih tanggal"',
    '  :min-date="minDate"',
    '  :max-date="maxDate" />',
  ].join('\n')

  const codeDisabled = [
    '<app-input-datepicker',
    '  v-model="date"',
    '  label="Disabled"',
    '  placeholder="Pilih tanggal"',
    '  disabled />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Datepicker"
    description="Input tanggal (single) berbasis <code>@vuepic/vue-datepicker</code>. Tanpa time picker."
    :code="codeDefault">
    <div class="max-w-md">
      <app-input-datepicker
        v-model="date"
        label="Pilih tanggal"
        placeholder="Pilih satu tanggal" />
    </div>
  </app-doc-section>

  <app-doc-section
    title="Datepicker - Min & Max"
    description="Batasi tanggal yang bisa dipilih dengan <code>minDate</code> dan <code>maxDate</code>."
    :code="codeWithLimits">
    <div class="max-w-md">
      <app-input-datepicker
        v-model="dateWithLimits"
        label="Batas min & max"
        placeholder="Pilih tanggal"
        :min-date="minDate"
        :max-date="maxDate" />
    </div>
  </app-doc-section>

  <app-doc-section
    title="Datepicker - Disabled"
    description="Nonaktifkan input dengan prop <code>disabled</code>."
    :code="codeDisabled">
    <div class="max-w-md">
      <app-input-datepicker
        v-model="dateDisabled"
        label="Disabled"
        placeholder="Pilih tanggal"
        disabled />
    </div>
  </app-doc-section>
</template>
