<script setup lang="ts">
  const slotCode = [
    '<app-carousel :items="items">',
    '  <template #item="{ item, index, active }">',
    '    <div class="relative size-full bg-gray-900">',
    '      <img :src="item.src" :alt="item.alt" class="size-full object-cover opacity-90" />',
    '      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>',
    '      <div class="absolute bottom-0 p-4 text-white">',
    '        <p class="text-sm font-semibold">#{{ index + 1 }} {{ item.alt }}</p>',
    '        <p class="text-xs opacity-80">{{ item.caption }}</p>',
    '        <app-button v-if="active" type="icon" variant="secondary" class="mt-2">',
    '          <app-icon icon="lucide:heart" />',
    '        </app-button>',
    '      </div>',
    '    </div>',
    '  </template>',
    '</app-carousel>',
  ].join('\n')

  const items = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop', alt: 'Gunung', caption: 'Custom overlay via slot' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop', alt: 'Hutan', caption: 'Slot #item memberi kontrol penuh' },
  ]
</script>

<template>
  <app-doc-section
    title="Custom Slot #item"
    description="Butuh kontrol penuh? Pakai slot `#item` dengan props `{ item, index, active }`. Cocok untuk overlay custom, badge, atau action button. Lightbox tetap otomatis (pakai `item.src` original)."
    :code="slotCode">
    <div class="max-w-2xl">
      <app-carousel :items="items">
        <template #item="{ item, index, active }">
          <div class="relative size-full bg-gray-900">
            <img
              :src="item.src"
              :alt="item.alt"
              class="size-full object-cover opacity-90">
            <div class="absolute inset-0 from-black/70 via-black/10 to-transparent bg-gradient-to-t"></div>
            <div class="absolute bottom-0 w-full p-4 text-white">
              <p class="text-sm font-semibold">
                #{{ index + 1 }} {{ item.alt }}
              </p>
              <p class="text-xs opacity-80">
                {{ item.caption }}
              </p>
              <div
                v-if="active"
                class="mt-2 inline-flex">
                <app-button
                  type="icon"
                  variant="secondary"
                  class="backdrop-blur-sm !bg-white/20 !text-white">
                  <app-icon icon="lucide:heart" />
                </app-button>
              </div>
            </div>
          </div>
        </template>
      </app-carousel>
    </div>
  </app-doc-section>
</template>
