<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { computed, ref } from 'vue'
  import { copy } from '@/functions'

  const props = defineProps<{
    title: string,
    description?: string,
    code: string,
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
    copy(props.code)
    copied.value = true
    debounceCopiedReset()
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
        <div
          :class="[
            'mx-auto overflow-hidden rounded-[22px] border shadow-sm transition-all duration-300',
            activeDevice === 'desktop' ? 'max-w-4xl' : '',
            activeDevice === 'tablet' ? 'max-w-md' : '',
            activeDevice === 'mobile' ? 'max-w-sm' : '',
            activeTheme === 'dark' ? 'bg-slate-950 text-slate-100 border-slate-800' : 'bg-white text-slate-900 border-gray-200'
          ]">
          <div
            v-if="!props.hideWindowChrome"
            class="flex items-center justify-between border-b px-4 py-3">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <span class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500 font-semibold tracking-[0.24em] uppercase">
              {{ themeLabel }} theme
            </span>
          </div>
          <div
            class="p-6"
            :dir="activeDirection">
            <slot></slot>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 bg-slate-50 px-5 py-6 sm:px-6">
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
