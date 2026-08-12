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
  <section
    aria-label="proyects"
    class="flex flex-1 flex-col w-full px-6 lg:px-16 py-8 gap-8 md:gap-12"
  >
    <header
      class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl sm:text-4xl font-bold">Proyectos destacados</h1>
        <h3 class="text-muted text-sm sm:text-base">
          Una selección de mis mejores implementaciones y diseños
        </h3>
      </div>

      <FilterButtons
        :filters="filters"
        :current-filter="currentFilter"
        @change="currentFilter = $event as (typeof filters)[number]"
      />
    </header>

    <div class="grid grid-cols-1 justify-items-center xl:grid-cols-2 gap-8 items-stretch w-full">
      <ProyectCard v-for="project in filteredProjects" :key="project.name" :project="project" />
    </div>
  </section>
</template>
