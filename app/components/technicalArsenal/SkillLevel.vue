<script setup lang="ts">
  defineProps<{
    level: number
  }>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-center w-full justify-between">
      <h2>NIVEL</h2>
      <h2 class="text-primary">{{ level }} %</h2>
    </div>
    <div class="w-full h-2" style="background-color: var(--color-border)">
      <div class="h-full h-2 bg-primary" :style="{ width: level + '%' }"></div>
    </div>
  </div>
</template>
