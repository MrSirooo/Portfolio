<script setup lang="ts">
  const { locale, setLocale } = useI18n()

  const isEnglish = computed(() => locale.value === 'en')

  const toggleLanguage = async (): Promise<void> => {
    const nextLocale = isEnglish.value ? 'es' : 'en'

    await setLocale(nextLocale)
  }
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isEnglish"
    :aria-label="isEnglish ? 'Cambiar a español' : 'Switch to English'"
    class="relative flex h-8 w-16 items-center rounded-full border border-[var(--color-border)] bg-secundary p-1 transition-colors"
    @click="toggleLanguage"
  >
    <span
      class="absolute flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black transition-transform duration-300"
      :class="isEnglish ? 'translate-x-8' : 'translate-x-0'"
    >
      {{ isEnglish ? 'EN' : 'ES' }}
    </span>

    <span class="flex w-full justify-between px-1 text-[10px] font-bold">
      <span :class="{ 'opacity-0': isEnglish }"> ES </span>

      <span :class="{ 'opacity-0': !isEnglish }"> EN </span>
    </span>
  </button>
</template>
