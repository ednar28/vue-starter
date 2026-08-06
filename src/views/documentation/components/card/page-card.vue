<script setup lang="ts">
  const basicCardCode = [
    '<app-card>',
    '  <p>Konten card di sini...</p>',
    '</app-card>',
  ].join('\n')

  const cardWithTitleCode = [
    '<app-card title="Judul Card" description="Deskripsi singkat tentang card ini.">',
    '  <p>Konten card di sini...</p>',
    '</app-card>',
  ].join('\n')

  const cardWithActionCode = [
    '<app-card title="Card dengan Action">',
    '  <p>Konten card di sini...</p>',
    '  <div class="mt-4 flex justify-end space-x-2">',
    '    <app-button variant="secondary">Batal</app-button>',
    '    <app-button>Simpan</app-button>',
    '  </div>',
    '</app-card>',
  ].join('\n')

  const cardGridCode = [
    '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">',
    '  <app-card title="Card 1">',
    '    <p>Konten card pertama.</p>',
    '  </app-card>',
    '  <app-card title="Card 2">',
    '    <p>Konten card kedua.</p>',
    '  </app-card>',
    '  <app-card title="Card 3">',
    '    <p>Konten card ketiga.</p>',
    '  </app-card>',
    '</div>',
  ].join('\n')
</script>

<template>
  <div>
    <app-doc-page-header
      title="Card"
      badge="Components"
      description="Komponen card untuk mengelompokkan konten dengan border tanpa shadow." />

    <app-doc-section
      title="Basic Card"
      description="Card paling sederhana tanpa title atau description."
      :code="basicCardCode">
      <div class="max-w-md">
        <app-card>
          <p>Konten card di sini...</p>
        </app-card>
      </div>
    </app-doc-section>

    <app-doc-section
      title="Card dengan Title & Description"
      description="Card dengan judul dan deskripsi di bagian atas."
      :code="cardWithTitleCode">
      <div class="max-w-md">
        <app-card
          title="Judul Card"
          description="Deskripsi singkat tentang card ini.">
          <p>Konten card di sini...</p>
        </app-card>
      </div>
    </app-doc-section>

    <app-doc-section
      title="Card dengan Action"
      description="Card dengan tombol action di bagian bawah."
      :code="cardWithActionCode">
      <div class="max-w-md">
        <app-card title="Card dengan Action">
          <p>Konten card di sini...</p>
          <div class="mt-4 flex justify-end space-x-2">
            <app-button variant="secondary">
              Batal
            </app-button>
            <app-button>
              Simpan
            </app-button>
          </div>
        </app-card>
      </div>
    </app-doc-section>

    <app-doc-section
      title="Card Grid Layout"
      description="Beberapa card dalam layout grid."
      :code="cardGridCode">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <app-card title="Card 1">
          <p>Konten card pertama.</p>
        </app-card>
        <app-card title="Card 2">
          <p>Konten card kedua.</p>
        </app-card>
        <app-card title="Card 3">
          <p>Konten card ketiga.</p>
        </app-card>
      </div>
    </app-doc-section>
  </div>
</template>
