<script setup>
  const localePath = useLocalePath()

  const tabs = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Technical Arsenal',
      path: '/technicalArsenal',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ]
</script>

<template>
  <nav aria-label="Main navigation" class="w-full md:w-auto">
    <ul
      class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium"
    >
      <li v-for="tab in tabs" :key="tab.label">
        <NuxtLink
          :to="localePath(tab.path)"
          active-class="text-primary after:w-full"
          class="relative pb-1 transition-colors hover:text-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ tab.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
