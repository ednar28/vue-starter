<script setup lang="ts">
  defineProps<{ rows: Array<{ name: string, type: string, desc: string }> }>()
</script>

<template>
  <table class="w-full table-auto border rounded-lg text-left text-xs">
    <thead>
      <tr class="bg-gray-100">
        <th class="px-4 py-2 font-bold">
          Name
        </th>
        <th class="px-4 py-2 font-bold">
          Type
        </th>
        <th class="px-4 py-2 font-bold">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in rows"
        :key="row.name"
        class="border-t">
        <td class="px-4 py-2 text-slate-700 font-mono">
          {{ row.name }}
        </td>
        <td class="px-4 py-2 text-slate-600 font-mono">
          {{ row.type }}
        </td>
        <td class="px-4 py-2 text-slate-900">
          {{ row.desc }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
