<script setup lang="ts">
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const isLoading = ref(false)
  const appName = __APP_NAME__

  const handleLogin = async () => {
    isLoading.value = true
    // Simulate API call
    setTimeout(() => {
      isLoading.value = false
      console.log('Login dengan:', { email: email.value, password: password.value, rememberMe: rememberMe.value })
    }, 1500)
  }
</script>

<template>
  <div class="min-h-screen flex items-center justify-center from-slate-50 to-slate-100 bg-gradient-to-br px-4">
    <div class="max-w-md w-full space-y-8">
      <div class="flex flex-col items-center">
        <div class="mb-4 h-12 w-12 flex items-center justify-center rounded-xl from-primary to-orange-500 bg-gradient-to-br shadow-lg shadow-orange-500/20">
          <app-icon
            icon="lucide:book-open"
            class="h-6 w-6 text-white" />
        </div>
        <h1 class="text-2xl font-bold">
          {{ appName }}
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          Dokumentasi
        </p>
      </div>

      <app-card
        title="Masuk ke Akun"
        description="Silakan masukkan kredensial Anda">
        <form
          class="space-y-4"
          @submit.prevent="handleLogin">
          <app-input
            v-model="email"
            label="Email"
            type="email"
            placeholder="contoh: tom@example.com"
            required
            autocomplete="email" />

          <app-input-password
            v-model="password"
            label="Password"
            placeholder="contoh: ********"
            autocomplete="current-password" />

          <app-input-checkbox
            v-model="rememberMe"
            label="Ingat saya" />

          <app-button
            type="submit"
            variant="primary"
            class="w-full"
            :loading="isLoading">
            <app-icon
              v-if="!isLoading"
              icon="lucide:log-in"
              class="mr-2 h-4 w-4" />
            <app-animated-dot v-else />
            {{ isLoading ? 'Sedang masuk' : 'Masuk' }}
          </app-button>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-slate-500">
                atau
              </span>
            </div>
          </div>

          <app-button
            type="button"
            variant="secondary"
            class="w-full">
            <app-icon
              icon="lucide:github"
              class="mr-2 h-4 w-4" />
            Masuk dengan GitHub
          </app-button>

          <p class="text-center text-sm text-slate-600">
            Belum punya akun?
            <a
              href="#"
              class="text-primary font-medium hover:underline">
              Daftar di sini
            </a>
          </p>
        </form>
      </app-card>
    </div>
  </div>
</template>
