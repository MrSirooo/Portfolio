<script setup lang="ts">
  import type { Skill } from '~/types/Skill'
  import SkillLevel from './SkillLevel.vue'

  defineProps<{
    skill: Skill
  }>()
</script>

<template>
  <article class="flex flex-col gap-6 bg-secundary p-6 border-primary hover:border">
    <header class="flex items-center justify-between">
      <h3 class="text-2xl font-bold text-primary">
        {{ skill.name }}
      </h3>

      <Icon :name="skill.icon" size="28" />
    </header>

    <SkillLevel :level="skill.level" />

    <p>{{ skill.description }}</p>
  </article>
</template>
