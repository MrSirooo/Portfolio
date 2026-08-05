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
  <ul class="flex items-center justify-center gap-10">
    <li v-for="filter in filters" :key="filter">
      <AppButton
        :variant="currentFilter === filter ? 'primary' : 'secondary'"
        size="lg"
        @click="emit('change', filter)"
      >
        {{ filter }}
      </AppButton>
    </li>
  </ul>
</template>
