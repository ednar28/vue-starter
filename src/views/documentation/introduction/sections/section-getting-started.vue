<script setup lang="ts">
  const repoUrl = 'https://github.com/ednar28/vue-starter.git'

  const steps = [
    {
      no: 1,
      title: 'Clone Repository',
      description: 'Salin repository vue-starter dari GitHub ke mesin lokal kamu.',
      icon: 'lucide:git-branch',
      code: `git clone ${repoUrl}`,
    },
    {
      no: 2,
      title: 'Install Dependencies',
      description: 'Masuk ke direktori project lalu install dependency menggunakan Bun.',
      icon: 'lucide:package',
      code: 'cd vue-starter\nbun install',
    },
    {
      no: 3,
      title: 'Run Development Server',
      description: 'Jalankan dev server. Buka http://localhost:5173 di browser.',
      icon: 'lucide:rocket',
      code: 'bun dev',
    },
  ]

  const purgeCode = './purge-docs.sh'
</script>

<template>
  <section class="mb-14">
    <!-- Section header -->
    <div class="mb-6 flex items-center gap-3">
      <div class="h-9 w-9 inline-flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
        <app-icon
          icon="lucide:rocket"
          class="h-5 w-5 text-primary" />
      </div>
      <div>
        <h2 class="text-sm text-gray-900 font-semibold dark:text-white">
          Getting Started
        </h2>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Mulai cepat dalam 3 langkah mudah.
        </p>
      </div>
    </div>

    <!-- Requirement badge -->
    <div class="mb-6 inline-flex items-center gap-2 border border-amber-300/60 rounded-full bg-amber-50 px-3 py-1.5 dark:border-amber-500/30 dark:bg-amber-500/10">
      <app-icon
        icon="lucide:info"
        class="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
      <span class="text-xs text-amber-700 font-medium dark:text-amber-300">
        Membutuhkan Bun
        <code class="mx-0.5 rounded bg-amber-200/70 px-1.5 py-0.5 text-[11px] text-amber-800 font-mono dark:bg-amber-500/20 dark:text-amber-200">&gt;= 1.0.0</code>
        terpasang di sistem.
      </span>
    </div>

    <!-- Steps -->
    <div class="relative space-y-4">
      <!-- vertical connector line (desktop) -->
      <div class="absolute bottom-4 left-[34px] top-4 hidden w-px from-gray-200 via-gray-200 to-transparent bg-gradient-to-b lg:block dark:from-white/10 dark:via-white/10"></div>

      <div
        v-for="step in steps"
        :key="step.no"
        class="relative border border-gray-200/60 rounded-xl bg-white p-5 transition-all duration-300 dark:border-white/10 hover:border-primary/20 dark:bg-surface hover:shadow-lg hover:shadow-primary/5 dark:hover:border-primary/30">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
          <!-- Step number + icon -->
          <div class="flex items-center gap-3">
            <div class="relative z-10 h-11 w-11 flex shrink-0 items-center justify-center border border-primary/20 rounded-full bg-primary/5 text-primary dark:border-primary/30 dark:bg-primary/10">
              <app-icon
                :icon="step.icon"
                class="h-5 w-5" />
            </div>
            <span class="text-xs text-gray-400 font-mono dark:text-gray-500">
              {{ String(step.no).padStart(2, '0') }}
            </span>
          </div>

          <!-- Text + code -->
          <div class="flex-1">
            <h3 class="text-sm text-gray-900 font-semibold dark:text-white">
              {{ step.title }}
            </h3>
            <p class="mt-1 text-xs text-gray-500 leading-relaxed dark:text-gray-400">
              {{ step.description }}
            </p>
            <div class="mt-3">
              <app-code-block :code="step.code" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Purge docs card -->
    <div class="mt-4 border border-red-200/60 rounded-xl bg-red-50/50 p-5 dark:border-red-500/20 dark:bg-red-500/5">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div class="flex items-center gap-3">
          <div class="h-11 w-11 flex shrink-0 items-center justify-center border border-red-300/60 rounded-full bg-red-100 text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
            <app-icon
              icon="lucide:trash-2"
              class="h-5 w-5" />
          </div>
          <span class="text-xs text-gray-400 font-mono dark:text-gray-500">
            04
          </span>
        </div>

        <div class="flex-1">
          <h3 class="text-sm text-gray-900 font-semibold dark:text-white">
            Purge Documentation
          </h3>
          <p class="mt-1 text-xs text-gray-500 leading-relaxed dark:text-gray-400">
            Jalankan script
            <code class="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-700 font-mono dark:bg-white/10 dark:text-gray-300">purge-docs.sh</code>
            untuk menghapus seluruh file dokumentasi dari project. Setelah dijalankan, route
            <code class="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-700 font-mono dark:bg-white/10 dark:text-gray-300">/documentation</code>
            dan tombol "View Documentation" akan otomatis dihapus.
          </p>
          <div class="mt-3">
            <app-code-block :code="purgeCode" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
