<script setup lang="ts">
  import skills from '~/data/skillsData.json'
</script>

<template>
  <section aria-label="technical-arsenal" class="flex flex-1 flex-col p-6 sm:p-10 lg:p-16 gap-8">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
      <h1
        class="text-2xl sm:text-3xl font-bold relative after:absolute after:bg-[var(--color-primary)] after:w-1/2 after:-bottom-1 after:h-0.5 after:left-0"
      >
        Arsenal Técnico
      </h1>
      <h2 class="text-[var(--color-text-grey)] text-sm sm:text-base">//MATRIZ DE HABILIDADES</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch w-full">
      <technicalArsenalSkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </section>
</template>
