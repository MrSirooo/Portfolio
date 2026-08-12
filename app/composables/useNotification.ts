  const notification = ref({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error',
  })

  let timeoutId: ReturnType<typeof setTimeout> | null = null

  export const showNotification = (message: string, type: 'success' | 'error') => {
    notification.value.message = message
    notification.value.type = type
    notification.value.show = true

    if (timeoutId) clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() => {
      notification.value.show = false
    }, 3500)
  }