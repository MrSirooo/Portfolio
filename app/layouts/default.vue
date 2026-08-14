<template>
  <div class="flex flex-col min-h-screen text-white overflow-x-hidden bg-black">
    <layoutHeader />

    <main class="flex flex-1 flex-col w-full pt-36 sm:pt-36 md:pt-16">
      <slot />

      <AppNotification />
    </main>

    <layoutFooter />
  </div>
</template>
