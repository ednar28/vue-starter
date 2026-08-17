<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { computed, ref } from 'vue'
  import { copy } from '@/functions'

  const props = defineProps<{
    title: string,
    description?: string,
    code?: string,
    githubUrl?: string,
    hidePreviewToolbar?: boolean,
    hideThemeToggle?: boolean,
    hideWindowChrome?: boolean,
  }>()

  const activeDevice = ref<'desktop' | 'tablet' | 'mobile'>('desktop')
  const activeDirection = ref<'ltr' | 'rtl'>('ltr')
  const activeTheme = ref<'light' | 'dark'>('light')
  const copied = ref(false)

  const themeLabel = computed(() => (activeTheme.value === 'dark' ? 'Dark' : 'Light'))

  const debounceCopiedReset = useDebounceFn(() => {
    copied.value = false
  })

  const copyCode = async () => {
    if(props.code) {
      copy(props.code)
      copied.value = true
      debounceCopiedReset()
    }
  }
</script>

<template>
  <div class="mb-12">
    <h2
      v-if="props.title"
      class="mb-2 text-xl text-gray-900 font-semibold">
      {{ props.title }}
    </h2>
    <p
      v-if="props.description"
      class="mb-6 text-sm text-gray-500 leading-relaxed">
      <app-preview-html :text="props.description" />
    </p>

    <div class="overflow-hidden border border-gray-200/70 rounded-[28px] bg-white shadow-gray-200/20 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div
        v-if="!props.hidePreviewToolbar"
        class="flex flex-col gap-3 border-b border-gray-100 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center">
        <div class="w-full flex flex-wrap items-center justify-between gap-2">
          <div class="inline-flex items-center gap-1 border border-gray-200 rounded-full bg-white p-1 text-slate-500">
            <button
              type="button"
              class="rounded-lg p-2 transition hover:bg-gray-100"
              :class="activeDevice === 'desktop' ? 'bg-gray-100 text-slate-900' : ''"
              @click="activeDevice = 'desktop'">
              <app-icon
                icon="lucide:monitor"
                class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="rounded-lg p-2 transition hover:bg-gray-100"
              :class="activeDevice === 'tablet' ? 'bg-gray-100 text-slate-900' : ''"
              @click="activeDevice = 'tablet'">
              <app-icon
                icon="lucide:tablet"
                class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="rounded-lg p-2 transition hover:bg-gray-100"
              :class="activeDevice === 'mobile' ? 'bg-gray-100 text-slate-900' : ''"
              @click="activeDevice = 'mobile'">
              <app-icon
                icon="lucide:smartphone"
                class="h-4 w-4" />
            </button>
          </div>

          <button
            v-if="!props.hideThemeToggle"
            type="button"
            class="inline-flex items-center justify-center border border-gray-200 rounded-full p-2 shadow-sm transition !bg-white hover:!bg-gray-100"
            :class="activeTheme === 'dark' ? 'bg-gray-100 text-indigo-500' : 'text-amber-500'"
            disabled
            @click="activeTheme = activeTheme === 'dark' ? 'light' : 'dark'">
            <app-icon
              :icon="activeTheme === 'dark' ? 'lucide:moon' : 'lucide:sun'"
              class="h-4 w-4" />
          </button>
        </div>
      </div>

      <div class="px-5 py-6 sm:px-6">
        <app-window-block
          v-if="!hideWindowChrome"
          :label="themeLabel"
          :activeDevice="activeDevice"
          :activeTheme="activeTheme"
          :direction="activeDirection">
          <slot></slot>
        </app-window-block>
        <div v-else>
          <slot></slot>
        </div>
      </div>

      <div v-if="props.code" class="border-t border-gray-100 bg-slate-50 px-5 py-6 sm:px-6">
        <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-slate-900 font-semibold">
              Code example
            </p>
            <p class="text-xs text-slate-500">
              Copy the rendered example code instantly.
            </p>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-2 border border-gray-200 rounded-full bg-white px-4 py-2 text-xs text-slate-600 font-semibold tracking-[0.24em] uppercase transition hover:bg-gray-50"
            @click="copyCode">
            <app-icon
              icon="lucide:clipboard"
              class="h-4 w-4" />
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
        </div>
        <app-code-block :code="props.code" />
      </div>
    </div>
  </div>
</template>
