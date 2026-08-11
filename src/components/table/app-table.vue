<script setup lang="ts" generic="T">
  type Col = { key: string, label: string, class?: string }

  defineProps<{
    columns: Col[],
    rows: T[],
    loading?: boolean,
    emptyMessage?: string,
  }>()

  defineSlots<{
    [name in `header-${string}`]?: (props: { col: Col }) => unknown
  } & {
    [name in `cell-${string}`]?: (props: { row: T, value: T[keyof T] }) => unknown
  } & {
    [name in keyof T & string as `cell-${name}`]?: (props: { row: T, value: T[name] }) => unknown
  }>()

  const getCellValue = (row: T, key: string): T[keyof T] => {
    return (row as Record<string, T[keyof T]>)[key]
  }
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b border-slate-200">
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3 text-xs text-slate-500 font-semibold uppercase"
            :class="col.class">
            <slot
              :name="`header-${col.key}`"
              :col="col">
              {{ col.label }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td
            :colspan="columns.length"
            class="py-12 text-center">
            <app-icon
              icon="lucide:loader-circle"
              class="mx-auto size-6 animate-spin" />
          </td>
        </tr>
        <tr v-else-if="rows.length === 0">
          <td
            :colspan="columns.length"
            class="py-12 text-center text-sm text-slate-400">
            {{ emptyMessage || 'Tidak ada data' }}
          </td>
        </tr>
        <tr
          v-for="(row, rowIdx) in rows"
          v-else
          :key="rowIdx"
          class="border-b border-slate-100 transition-colors hover:bg-slate-50">
          <td
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3 text-sm text-slate-700"
            :class="col.class">
            <slot
              :name="`cell-${col.key}`"
              :row="row"
              :value="getCellValue(row, col.key)">
              {{ getCellValue(row, col.key) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
