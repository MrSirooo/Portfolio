<script setup lang="ts">
  const config = useRuntimeConfig()

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
    class="flex flex-col gap-4 sm:gap-6 bg-secundary p-4 sm:p-6 border-primary hover:border w-full h-full max-w-2xl relative rounded-lg overflow-hidden"
  >
    <h3
      class="absolute top-2 left-2 sm:top-4 sm:left-4 text-xs sm:text-sm p-1.5 bg-primary text-black font-bold uppercase tracking-wider z-10"
    >
      {{ project.engine }}
    </h3>

    <img
      :src="`${config.app.baseURL}${project.image}`"
      :alt="project.name"
      class="w-full aspect-video object-cover rounded"
    />

    <h2 class="text-xl sm:text-3xl font-bold">{{ project.name }}</h2>

    <p class="text-sm sm:text-base text-[var(--color-text-muted)]">{{ project.description }}</p>

    <div class="mt-auto pt-2">
      <AppButton
        v-if="project.github"
        variant="link"
        size="md"
        :href="project.github"
        class="self-start"
      >
        Github
      </AppButton>
    </div>
  </article>
</template>
