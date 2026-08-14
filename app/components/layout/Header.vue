<script setup lang="ts">
  import LanguageToggle from './LanguageToggle.vue'

  const localePath = useLocalePath()
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 min-h-16 py-3 flex items-center bg-[var(--color-border)] border-b border-[var(--color-border)]"
  >
    <div
      class="mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8"
    >
      <div class="flex justify-center md:justify-start">
        <NuxtLink
          :to="localePath('/')"
          class="text-primary text-xl sm:text-2xl font-bold hover:text-muted transition-colors duration-300"
        >
          [DEV_PORTFOLIO]
        </NuxtLink>
      </div>

      <div class="flex justify-center">
        <LayoutTabs />
      </div>

      <div class="flex justify-center md:justify-end">
        <LanguageToggle />
      </div>
    </div>
  </header>
</template>
