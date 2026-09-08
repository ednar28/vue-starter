<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useAuthLogin } from '@/models/auth'
  import { useToastStore } from '@/stores/toast'

  const router = useRouter()
  const toast = useToastStore()

  const { submitting, form, submit: login } = useAuthLogin()

  const submit = async () => {
    const response = await login()
    if (response) {
      toast.add('Berhasil login, tunggu sebentar')
      router.replace({ name: 'introduction' })
    }
  }
</script>

<template>
  <app-card
    title="Masuk ke Akun"
    description="Silakan masukkan kredensial Anda"
    :hover="false">
    <form
      class="space-y-4"
      @submit.prevent="submit">
      <app-input
        v-model="form.email"
        label="Email"
        type="email"
        placeholder="contoh: tom@example.com"
        required
        autocomplete="email" />

      <app-input-password
        v-model="form.password"
        label="Password"
        placeholder="contoh: ********"
        autocomplete="current-password" />

      <app-input-checkbox
        v-model="form.remember"
        label="Ingat saya" />

      <app-button
        type="submit"
        variant="primary"
        class="w-full"
        :loading="submitting">
        <app-icon
          v-if="!submitting"
          icon="lucide:log-in"
          class="mr-2 h-4 w-4" />
        <app-animated-dot v-else />
        {{ submitting ? 'Sedang masuk' : 'Masuk' }}
      </app-button>

      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-slate-200 dark:border-white/10"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-white px-2 text-slate-500 dark:bg-surface dark:text-white">
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

      <p class="text-center text-sm text-slate-600 dark:text-gray-400">
        Belum punya akun?
        <a
          href="#"
          class="text-primary font-medium hover:underline">
          Daftar di sini
        </a>
      </p>
    </form>
  </app-card>
</template>
