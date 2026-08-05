<script setup lang="ts">
  import skills from '~/data/skillsData.json'
</script>

<template>
  <section aria-label="technical-arsenal" class="flex flex-1 flex-col m-16">
    <div class="flex items-center w-full justify-between">
      <h1
        class="text-3xl relative after:absolute after:bg-[var(--color-primary)] after:w-1/2 after:-bottom-1 after:h-0.5 after:left-1"
      >
        Arsenal Técnico
      </h1>
      <h2 class="text-[var(--color-text-muted)]">//MATRIZ DE HABILIDADES</h2>
    </div>

    <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <technicalArsenalSkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </section>
</template>
