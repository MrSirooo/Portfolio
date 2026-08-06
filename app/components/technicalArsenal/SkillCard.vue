<script setup lang="ts">
  import type { Skill } from '~/types/Skill'

  defineProps<{
    skill: Skill
  }>()
</script>

<template>
  <article
    class="flex flex-col justify-between gap-6 bg-secundary p-6 border-primary hover:border w-full h-full rounded-lg"
  >
    <div class="flex flex-col gap-6">
      <header class="flex items-center justify-between gap-2">
        <h3 class="text-xl sm:text-2xl font-bold text-primary break-words">
          {{ skill.name }}
        </h3>

        <Icon :name="skill.icon" size="28" class="shrink-0" />
      </header>

      <TechnicalArsenalSkillLevel :level="skill.level" />
    </div>

    <p class="text-sm sm:text-base mt-auto">{{ skill.description }}</p>
  </article>
</template>
