<script setup lang="ts">
  import projects from '~/data/proyectsData.json'

  const FILTERS = ['All', 'Unity', 'Unreal Engine']

  const currentFilter = ref<(typeof FILTERS)[number]>('All')

  const filteredProjects = computed(() => {
    if (currentFilter.value === 'All') {
      return projects
    }

    return projects.filter(project => project.engine === currentFilter.value)
  })

  const changeCurrentFilter = (eventName: string) => {
    if (!FILTERS.includes(eventName)) return

    currentFilter.value = eventName
  }
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

      <ProyectsFilterButtons
        :filters="FILTERS"
        :current-filter="currentFilter"
        @change="changeCurrentFilter"
      />
    </header>

    <div class="grid grid-cols-1 justify-items-center xl:grid-cols-2 gap-8 items-stretch w-full">
      <ProyectsCard v-for="project in filteredProjects" :key="project.name" :project="project" />
    </div>
  </section>
</template>
