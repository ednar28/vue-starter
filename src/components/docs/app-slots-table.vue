<script setup lang="ts">
  defineProps<{ rows: Array<{ name: string, desc: string }> }>()
</script>
<template>
  <table class="w-full table-auto border rounded-lg text-left text-xs dark:border-white/10">
    <thead>
      <tr class="bg-gray-100 dark:bg-white/5">
        <th class="px-4 py-2 font-bold dark:text-gray-200">
          Slot
        </th>
        <th class="px-4 py-2 font-bold dark:text-gray-200">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in rows"
        :key="row.name"
        class="border-t dark:border-white/10">
        <td class="px-4 py-2 text-slate-700 font-mono dark:text-primary-300">
          {{ row.name }}
        </td>
        <td class="px-4 py-2 text-slate-900 dark:text-gray-300">
          {{ row.desc }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
