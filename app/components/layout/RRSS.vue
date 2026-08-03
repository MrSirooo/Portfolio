<script setup>
  const rrss = [
    {
      label: 'Github',
      href: 'https://github.com/MrSirooo',
    },
    {
      label: 'LinkedIn',
      href: 'https://es.linkedin.com/in/iago-otero-marcos-4ba3a5404',
    },
  ]
</script>

<template>
  <nav aria-label="Main navigation" class="w-fit">
    <ul class="flex items-center justify-center gap-10">
      <li v-for="rs in rrss" :key="rs.label">
        <a
          :href="rs.href"
          target="_blank"
          rel="noopener noreferrer"
          class="relative pb-2 transition-colors hover:text-[var(--color-text-muted)] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--color-text-muted)] after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ rs.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
