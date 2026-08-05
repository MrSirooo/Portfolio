<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    variant?: 'primary' | 'secondary' | 'link'
    size?: 'sm' | 'md' | 'lg'

    to?: string
    href?: string
  }

  const props = defineProps<Props>()

  const baseClass =
    'inline-flex items-center justify-center font-medium transition-colors duration-300'

  const variantsClass = computed(() => {
    switch (props.variant) {
      case 'primary':
        return 'bg-primary text-black rounded font-bold cursor-pointer'

      case 'secondary':
        return 'border border-primary text-primary hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-background)]'

      case 'link':
        return 'relative pb-2 transition-colors hover:text-[var(--color-text-muted)] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--color-text-muted)] after:transition-all after:duration-300 hover:after:w-full'

      default:
        return 'bg-primary text-black rounded font-bold cursor-pointer'
    }
  })

  const sizeClass = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'px-4 py-2 text-sm'

      case 'lg':
        return 'px-8 py-4 text-lg'

      default:
        return 'px-6 py-3'
    }
  })
</script>

<template>
  <button>
    <NuxtLink v-if="props.to" :to="props.to" :class="[baseClass, variantsClass, sizeClass]"
      ><slot></slot
    ></NuxtLink>

    <a
      v-else-if="props.href"
      :href="props.href"
      target="_blank"
      rel="noopener noreferrer"
      :class="[baseClass, variantsClass, sizeClass]"
      ><slot></slot
    ></a>

    <h2 v-else :class="[baseClass, variantsClass, sizeClass]"><slot></slot></h2>
  </button>
</template>
