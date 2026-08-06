<script setup lang="ts">
  import AppButton from '../AppButton.vue'

  defineProps<{
    filters: readonly string[]
    currentFilter: string
  }>()

  const emit = defineEmits<{
    change: [filter: string]
  }>()
</script>

<template>
  <ul class="flex flex-wrap items-center gap-2 sm:gap-3">
    <li v-for="filter in filters" :key="filter">
      <AppButton
        :variant="currentFilter === filter ? 'primary' : 'secondary'"
        size="sm"
        @click="emit('change', filter)"
      >
        {{ filter }}
      </AppButton>
    </li>
  </ul>
</template>
