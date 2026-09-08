<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { computed, ref, watch } from 'vue'
  import { copy } from '@/functions'
  import { useAppStore } from '@/stores/app'

  const props = defineProps<{
    title: string,
    description?: string,
    code?: string,
    githubUrl?: string,
    hidePreviewToolbar?: boolean,
    hideThemeToggle?: boolean,
    hideWindowChrome?: boolean,
  }>()

  const appStore = useAppStore()
  const activeDevice = ref<'desktop' | 'tablet' | 'mobile'>('desktop')
  const activeDirection = ref<'ltr' | 'rtl'>('ltr')
  const activeTheme = ref<'light' | 'dark'>(appStore.isDark ? 'dark' : 'light')
  const userOverrodeTheme = ref(false)
  const copied = ref(false)

  watch(
    () => appStore.theme,
    (theme) => {
      if (!userOverrodeTheme.value) {
        activeTheme.value = theme
      }
    },
  )

  const togglePreviewTheme = () => {
    userOverrodeTheme.value = true
    activeTheme.value = activeTheme.value === 'dark' ? 'light' : 'dark'
  }

  const themeLabel = computed(() => (activeTheme.value === 'dark' ? 'Dark' : 'Light'))

  const debounceCopiedReset = useDebounceFn(() => {
    copied.value = false
  })

  const copyCode = async () => {
    if (props.code) {
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
      class="mb-2 text-xl text-gray-900 font-semibold dark:text-white">
      {{ props.title }}
    </h2>
    <p
      v-if="props.description"
      class="mb-6 text-sm text-gray-500 leading-relaxed dark:text-gray-400">
      <app-preview-html :text="props.description" />
    </p>

    <div class="overflow-hidden border border-gray-200/70 rounded-[28px] bg-white shadow-gray-200/20 shadow-lg transition-all duration-300 dark:border-white/10 hover:border-primary/20 dark:bg-surface dark:shadow-none hover:shadow-primary/5 hover:shadow-xl hover:-translate-y-1 dark:hover:border-primary/30">
      <div
        v-if="!props.hidePreviewToolbar"
        class="flex flex-col gap-3 border-b border-gray-100 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center dark:border-white/10 dark:bg-black/20">
        <div class="w-full flex flex-wrap items-center justify-between gap-2">
          <div class="inline-flex items-center gap-1 border border-gray-200 rounded-full bg-white p-1 text-slate-500 dark:border-white/10 dark:bg-canvas dark:text-gray-400">
            <button
              type="button"
              class="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-white/10"
              :class="activeDevice === 'desktop' ? 'bg-gray-100 text-slate-900 dark:bg-white/10 dark:text-white' : ''"
              @click="activeDevice = 'desktop'">
              <app-icon
                icon="lucide:monitor"
                class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-white/10"
              :class="activeDevice === 'tablet' ? 'bg-gray-100 text-slate-900 dark:bg-white/10 dark:text-white' : ''"
              @click="activeDevice = 'tablet'">
              <app-icon
                icon="lucide:tablet"
                class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-white/10"
              :class="activeDevice === 'mobile' ? 'bg-gray-100 text-slate-900 dark:bg-white/10 dark:text-white' : ''"
              @click="activeDevice = 'mobile'">
              <app-icon
                icon="lucide:smartphone"
                class="h-4 w-4" />
            </button>
          </div>

          <button
            v-if="!props.hideThemeToggle"
            type="button"
            class="inline-flex items-center justify-center border border-gray-200 rounded-full bg-white p-2 shadow-sm transition dark:border-white/10 dark:bg-canvas hover:bg-gray-100 dark:hover:bg-white/10"
            :class="activeTheme === 'dark' ? 'text-indigo-500 dark:text-indigo-400' : 'text-amber-500'"
            @click="togglePreviewTheme">
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
          :active-device="activeDevice"
          :active-theme="activeTheme"
          :direction="activeDirection">
          <slot></slot>
        </app-window-block>
        <div v-else>
          <slot></slot>
        </div>
      </div>

      <div
        v-if="props.code"
        class="border-t border-gray-100 bg-slate-50 px-5 py-6 dark:border-white/10 dark:bg-canvas sm:px-6">
        <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-slate-900 font-semibold dark:text-white">
              Code example
            </p>
            <p class="text-xs text-slate-500 dark:text-gray-400">
              Copy the rendered example code instantly.
            </p>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-2 border border-gray-200 rounded-full bg-white px-4 py-2 text-xs text-slate-600 font-semibold tracking-[0.24em] uppercase transition dark:border-white/10 dark:bg-white/5 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/10"
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
