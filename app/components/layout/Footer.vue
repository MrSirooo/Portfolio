<script setup lang="ts">
  const localePath = useLocalePath()
</script>

<template>
  <footer
    class="min-h-16 py-4 flex items-center bg-[var(--color-border)] border-t border-[var(--color-border)]"
  >
    <div
      class="mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
    >
      <NuxtLink
        :to="localePath('/')"
        class="text-[var(--color-text)] text-lg sm:text-xl font-bold hover:text-[var(--color-primary-hover)] transition-colors duration-300"
      >
        [DEV_PORTFOLIO]
      </NuxtLink>

      <h2 class="text-muted text-xs sm:text-sm">@ 2026 DEV_PORTFOLIO // ALL RIGHTS RESERVED</h2>

      <LayoutRRSS />
    </div>
  </footer>
</template>
