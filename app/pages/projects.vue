<script setup lang="ts">
  import { computed, ref } from 'vue'
  import ProyectCard from '~/components/proyects/ProyectCard.vue'
  import FilterButtons from '~/components/proyects/FilterButtons.vue'
  import projects from '~/data/proyectsData.json'

  const filters = ['All', 'Unity', 'Unreal Engine'] as const

  const currentFilter = ref<(typeof filters)[number]>('All')

  const filteredProjects = computed(() => {
    if (currentFilter.value === 'All') {
      return projects
    }

    return projects.filter(project => project.engine === currentFilter.value)
  })
</script>

<template>
  <section aria-label="proyects" class="flex flex-1 flex-col m-10 gap-16">
    <header class="flex items-center justify-between">
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl">Proyectos destacados</h1>
        <h3 class="text-muted">Una selección de mis mejores implementaciones y diseños</h3>
      </div>

      <FilterButtons
        :filters="filters"
        :current-filter="currentFilter"
        @change="currentFilter = $event as (typeof filters)[number]"
      />
    </header>

    <div class="grid gap-10 place-items-center md:grid-cols-1 xl:grid-cols-2">
      <ProyectCard v-for="project in filteredProjects" :key="project.name" :project="project" />
    </div>
  </section>
</template>
