<template>
  <h1 class="text-5xl font-bold text-white mt-[0.5rem]">Tailwind funciona</h1>
  <!-- <section
    v-for="n in 3"
    :key="n"
    class="flex h-screen items-center justify-center border-b border-gray-700"
  >
    <h2 class="text-4xl font-bold">Sección {{ n }}</h2>
  </section> -->
  <section class="flex flex-col">
    <AppButton variant="primary" size="lg" to="/">dsna</AppButton>
    <AppButton variant="primary" size="md" to="/">dsna</AppButton>
    <AppButton variant="primary" size="sm" to="/">dsna</AppButton>
    <AppButton
      variant="secondary"
      size="lg"
      href="https://es.linkedin.com/in/iago-otero-marcos-4ba3a5404"
      >link</AppButton
    >
    <AppButton
      variant="link"
      size="lg"
      href="https://es.linkedin.com/in/iago-otero-marcos-4ba3a5404"
      >link</AppButton
    >
  </section>
</template>

<script setup lang="ts">
  // const route = useRoute()
  // console.log(route.path)
</script>
