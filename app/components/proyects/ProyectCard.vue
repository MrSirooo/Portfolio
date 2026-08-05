<script setup lang="ts">
  import AppButton from '../AppButton.vue'

  defineProps<{
    project: {
      name: string
      engine: string
      description: string
      image: string
      github?: string
    }
  }>()
</script>

<template>
  <article
    class="flex flex-col justify-center gap-6 bg-secundary p-6 border-primary hover:border max-w-2xl relative"
  >
    <h3 class="absolute top-0 left-0 text-2xl p-1 m-4 bg-primary text-black font-bold">
      {{ project.engine }}
    </h3>

    <img :src="project.image" :alt="project.name" class="self-center" />

    <h1 class="text-3xl">{{ project.name }}</h1>

    <p>{{ project.description }}</p>

    <AppButton v-if="project.github" variant="link" size="lg" :href="project.github"
      >Github</AppButton
    >
  </article>
</template>
