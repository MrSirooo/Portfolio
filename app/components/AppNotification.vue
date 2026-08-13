<script setup lang="ts">
  const { notification } = useNotification()

  const positionClass = computed(() => {
    switch (notification.value.position) {
      case 'top-left':
        return 'top-6 left-6'

      case 'top-right':
        return 'top-6 right-6'

      case 'bottom-left':
        return 'bottom-6 left-6'

      case 'bottom-right':
        return 'bottom-6 right-6'

      default:
        return 'bottom-6 right-6'
    }
  })
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-4 opacity-0"
    >
      <div
        v-if="notification.show"
        :class="[
          'fixed z-50 flex items-center gap-3 rounded-md px-6 py-4 shadow-xl border',
          positionClass,
          notification.type === 'success'
            ? 'bg-green-900/90 border-green-500 text-green-100'
            : 'bg-red-900/90 border-red-500 text-red-100',
        ]"
      >
        <span class="text-sm sm:text-base font-medium">{{ notification.message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>
