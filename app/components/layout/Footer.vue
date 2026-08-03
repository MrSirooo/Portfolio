<template>
  <footer class="h-16 flex items-center" style="background-color: var(--color-border)">
    <div class="mx-auto w-full px-6 lg:px-8 relative flex h-full items-center justify-between">
      <button class="text-[var(--color-text)] text-2xl">
        <NuxtLink :to="'/'" class="w-full h-full">[DEV_PORTFOLIO]</NuxtLink>
      </button>

      <h2 class="text-[var(--color-text-muted)]">@ 2026 DEV_PORTFOLIO // ALL RIGHTS RESERVED</h2>

      <LayoutRRSS />
    </div>
  </footer>
</template>
