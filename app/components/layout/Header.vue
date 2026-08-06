<template>
  <header
    class="sticky top-0 z-50 min-h-16 py-3 flex items-center bg-[var(--color-border)] border-b border-[var(--color-border)]"
  >
    <div
      class="mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <NuxtLink to="/" class="text-primary text-xl sm:text-2xl font-bold">
        [DEV_PORTFOLIO]
      </NuxtLink>

      <LayoutTabs />

      <AppButton variant="primary" to="/contact" size="sm" class="hidden sm:inline-flex">
        Hire Me
      </AppButton>
    </div>
  </header>
</template>
