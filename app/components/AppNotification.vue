<script setup lang="ts">
  import { useNotification } from '#app'
  
  const { notification } = useNotification()
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
          'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-md px-6 py-4 shadow-xl border',
          notification.type === 'success' 
            ? 'bg-green-900/90 border-green-500 text-green-100' 
            : 'bg-red-900/90 border-red-500 text-red-100'
        ]"
      >
        <span class="text-sm sm:text-base font-medium">{{ notification.message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>