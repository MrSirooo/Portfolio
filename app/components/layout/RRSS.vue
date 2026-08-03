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
        <AppButton variant="link" :href="rs.href" size="lg">{{ rs.label }}</AppButton>
      </li>
    </ul>
  </nav>
</template>
