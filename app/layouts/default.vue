<template>
  <div
    class="flex flex-col min-h-screen text-white overflow-x-hidden"
    style="background-color: var(--color-background)"
  >
    <layoutHeader />

    <main class="flex flex-1 flex-col w-full">
      <slot />
    </main>

    <layoutFooter />
  </div>
</template>
