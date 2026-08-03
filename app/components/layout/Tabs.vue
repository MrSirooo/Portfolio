<script setup>
  const tabs = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Technical Arsenal',
      href: '/technicalArsenal',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]
</script>

<template>
  <nav aria-label="Main navigation" class="w-fit">
    <ul class="flex items-center justify-center gap-10">
      <li v-for="tab in tabs" :key="tab.label">
        <NuxtLink
          :to="tab.href"
          class="relative pb-2 transition-colors hover:text-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ tab.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
