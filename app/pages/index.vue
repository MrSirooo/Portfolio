<template>
  <h1 class="text-5xl font-bold text-white mt-[0.5rem]">Tailwind funciona</h1>
  <section
    v-for="n in 3"
    :key="n"
    class="flex h-screen items-center justify-center border-b border-gray-700"
  >
    <h2 class="text-4xl font-bold">Sección {{ n }}</h2>
  </section>
</template>
