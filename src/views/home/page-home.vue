<script setup lang="ts">
</script>

<template>
  <div class="min-h-[calc(100vh-5rem)] flex items-center justify-center">
    <div class="max-w-2xl w-full text-center">
      <div class="fade-up mb-6 inline-flex items-center gap-2 border border-primary/20 rounded-full from-primary/10 to-primary/5 bg-gradient-to-r px-4 py-1.5 text-xs text-primary font-semibold tracking-wide shadow-primary/5 shadow-sm">
        <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
        Vue Starter Kit v1.0
      </div>

      <h1 class="fade-up text-4xl text-gray-900 font-bold leading-tight tracking-tight delay-1 lg:text-6xl sm:text-5xl">
        Selamat Datang di
        <span class="from-primary to-orange-400 bg-gradient-to-r bg-clip-text text-transparent">Vue Starter</span>
      </h1>

      <p class="fade-up mx-auto mt-6 max-w-lg text-base text-gray-400 leading-relaxed delay-2 sm:text-lg">
        Starter kit Vue 3 siap pakai. Komponen reusable, utility functions, dan dokumentasi lengkap untuk mempercepat pengembangan web aplikasi modern.
      </p>

      <div class="fade-up mt-4 flex items-center justify-center gap-3 text-sm text-gray-500 font-medium delay-3">
        <span class="flex items-center gap-1.5">
          <span class="inline-block h-2 w-2 rounded-full bg-green-400 ring-2 ring-green-100"></span>
          Vue 3
        </span>
        <span class="text-gray-300">•</span>
        <span class="flex items-center gap-1.5">
          <span class="inline-block h-2 w-2 rounded-full bg-sky-400 ring-2 ring-sky-100"></span>
          TypeScript
        </span>
        <span class="text-gray-300">•</span>
        <span class="flex items-center gap-1.5">
          <span class="inline-block h-2 w-2 rounded-full bg-purple-400 ring-2 ring-purple-100"></span>
          UnoCSS
        </span>
      </div>

      <div class="fade-up mt-10 flex items-center justify-center gap-4 delay-4">
        <router-link
          to="/documentation"
          class="btn btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
          <app-icon
            icon="lucide:book-open"
            class="h-4 w-4" />
          Lihat Dokumentasi
        </router-link>
        <a
          href="https://github.com/ednar28/vue-starter"
          target="_blank"
          rel="noopener"
          class="btn inline-flex items-center gap-2 border border-gray-200 bg-white px-6 py-3 text-sm text-gray-700 shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-px">
          <app-icon
            icon="lucide:github"
            class="h-4 w-4" />
          GitHub
        </a>
      </div>

      <div class="fade-up mt-16 border-t border-gray-100 pt-8 delay-5">
        <div class="grid grid-cols-3 gap-6">
          <div class="text-center">
            <div class="mx-auto mb-2 h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10">
              <app-icon
                icon="lucide:layers"
                class="h-5 w-5 text-primary" />
            </div>
            <h3 class="text-xs text-gray-900 font-semibold">
              Komponen
            </h3>
            <p class="mt-0.5 text-2xs text-gray-400">
              20+ reusable
            </p>
          </div>
          <div class="text-center">
            <div class="mx-auto mb-2 h-10 w-10 flex items-center justify-center rounded-xl bg-sky-50">
              <app-icon
                icon="lucide:braces"
                class="h-5 w-5 text-sky-500" />
            </div>
            <h3 class="text-xs text-gray-900 font-semibold">
              Utilities
            </h3>
            <p class="mt-0.5 text-2xs text-gray-400">
              format, string, dll
            </p>
          </div>
          <div class="text-center">
            <div class="mx-auto mb-2 h-10 w-10 flex items-center justify-center rounded-xl bg-purple-50">
              <app-icon
                icon="lucide:file-text"
                class="h-5 w-5 text-purple-500" />
            </div>
            <h3 class="text-xs text-gray-900 font-semibold">
              Dokumentasi
            </h3>
            <p class="mt-0.5 text-2xs text-gray-400">
              lengkap
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <a
      href="https://github.com/ednar28/vue-starter"
      class="inline-flex items-center gap-2 text-xs text-gray-400 underline hover:text-primary"
      target="_blank"
      rel="noopener">
      <app-icon
        icon="lucide:github"
        class="h-4 w-4" />
      Lihat repositori GitHub
    </a>
  </div>
</template>

<style scoped>
.fade-up {
  animation: fadeUp 0.6s ease-out both;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.35s; }
.delay-4 { animation-delay: 0.5s; }
.delay-5 { animation-delay: 0.65s; }

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
