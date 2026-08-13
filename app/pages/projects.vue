<script setup lang="ts">
  import projects from '~/data/proyectsData.json'

  const FILTERS = [
    {
      value: 'All',
      label: 'projects.filters.all',
    },
    {
      value: 'Unity',
      label: 'projects.filters.unity',
    },
    {
      value: 'Unreal Engine',
      label: 'projects.filters.unreal',
    },
  ] as const

  const currentFilter = ref<(typeof FILTERS)[number]['value']>('All')

  const filteredProjects = computed(() => {
    const filtered =
      currentFilter.value === 'All'
        ? projects
        : projects.filter(project => project.engine === currentFilter.value)

    return filtered.map(project => ({
      ...project,
      name: $t(`projects.items.${project.id}.name`),
      description: $t(`projects.items.${project.id}.description`),
    }))
  })

  const changeCurrentFilter = (filter: string): void => {
    if (!FILTERS.some(item => item.value === filter)) {
      return
    }

    currentFilter.value = filter as typeof currentFilter.value
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
        <h1 class="text-2xl sm:text-4xl font-bold">{{ $t('projects.title') }}</h1>
        <h3 class="text-muted text-sm sm:text-base">
          {{ $t('projects.description') }}
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
