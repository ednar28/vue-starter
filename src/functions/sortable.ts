import type { UseSortableOptions } from '@vueuse/integrations'
import { useSortable as vueUseSortable } from '@vueuse/integrations/useSortable'
import { type Ref, ref } from 'vue'

export function useSortable<T> (
  allData: Ref<T[]>,
  action?: {
    onUpdate?: (data: T, newIndex: number, parent?: T) => void,
    onAdd?: (data: T, newIndex: number, parent?: T) => void,
  },
  parent?: Ref<T> | undefined,
) {
  const wrapperSortable = ref<HTMLElement>()

  const setCurrentData = (data: T) => {
    localStorage.setItem('sortable-js-current', JSON.stringify(data))
  }
  const getCurrentData = () => {
    return JSON.parse(localStorage.getItem('sortable-js-current') ?? '') as T
  }

  vueUseSortable(wrapperSortable, allData, {
    handle: '.handle',
    fallbackOnBody: true,
    animation: 150,
    // swapThreshold: 0.40,
    // invertSwap: true,
    group: 'nested',
    onStart: (e: { newIndex: number, oldIndex: number }) => {
      const currentData = allData.value[e.oldIndex]
      setCurrentData(currentData)
    },
    onAdd: (e: { newIndex: number, oldIndex: number, item: HTMLElement }) => {
      const currentData = getCurrentData()
      if (action?.onAdd) {
        action.onAdd(currentData, e.newIndex + 1, parent?.value)
      }

      allData.value.splice(e.newIndex, 0, currentData)
      e.item.remove()
    },
    onRemove: (e: { newIndex: number, oldIndex: number }) => {
      allData.value.splice(e.oldIndex, 1)
    },
    onUpdate: async (e: { newIndex: number, oldIndex: number }) => {
      const data = allData.value[e.oldIndex]
      if (action?.onUpdate) {
        action.onUpdate(data, e.newIndex + 1, parent?.value)
      }
      const element = allData.value[e.oldIndex]
      allData.value.splice(e.oldIndex, 1)
      allData.value.splice(e.newIndex, 0, element)
    },
  } as UseSortableOptions)

  return {
    wrapperSortable,
  }
}
