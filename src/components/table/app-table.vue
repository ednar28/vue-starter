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
  <div class="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white dark:border-white/10 dark:bg-white/[0.02]">
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3 text-xs text-slate-600 font-semibold tracking-wider uppercase dark:text-gray-300"
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
              class="mx-auto size-6 animate-spin text-slate-400 dark:text-gray-400" />
          </td>
        </tr>
        <tr v-else-if="rows.length === 0">
          <td
            :colspan="columns.length"
            class="py-12 text-center text-sm text-slate-500 dark:text-gray-400">
            {{ emptyMessage || 'Tidak ada data' }}
          </td>
        </tr>
        <tr
          v-for="(row, rowIdx) in rows"
          v-else
          :key="rowIdx"
          class="border-b border-slate-200/70 transition-colors last:border-b-0 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5">
          <td
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3 text-sm text-slate-700 dark:text-gray-200"
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
