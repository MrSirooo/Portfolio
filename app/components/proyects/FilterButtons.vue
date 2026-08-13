<script setup lang="ts">
  interface Filter {
    value: string
    label: string
  }

  defineProps<{
    filters: readonly Filter[]
    currentFilter: string
  }>()

  const emit = defineEmits<{
    change: [filter: string]
  }>()
</script>

<template>
  <ul class="flex flex-wrap items-center gap-2 sm:gap-3">
    <li v-for="filter in filters" :key="filter.value">
      <AppButton
        :variant="currentFilter === filter.value ? 'primary' : 'secondary'"
        size="sm"
        @click="emit('change', filter.value)"
      >
        {{ $t(filter.label) }}
      </AppButton>
    </li>
  </ul>
</template>
