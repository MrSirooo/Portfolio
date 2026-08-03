<template>
  <header class="sticky h-16 flex items-center" style="background-color: var(--color-border)">
    <div class="mx-auto w-full px-6 lg:px-8 relative flex h-full items-center justify-between">
      <button class="text-primary text-2xl">
        <NuxtLink :to="'/'" class="w-full h-full">[DEV_PORTFOLIO]</NuxtLink>
      </button>

      <LayoutTabs class="absolute left-1/2 -translate-x-1/2" />

      <button class="bg-primary text-black px-4 py-2 rounded font-bold cursor-pointer">
        <NuxtLink :to="'/contact'" class="w-full h-full">Hire Me</NuxtLink>
      </button>
    </div>
  </header>
</template>
