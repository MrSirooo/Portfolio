<template>
  <div
    class="flex flex-col min-h-screen text-white"
    style="background-color: var(--color-background)"
  >
    <layoutHeader />

    <main class="flex flex-1">
      <slot></slot>
    </main>

    <layoutFooter />
  </div>
</template>
