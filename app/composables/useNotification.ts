export type NotificationPos = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const notification = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error',
  position: 'bottom-right' as NotificationPos,
})

let timeoutId: ReturnType<typeof setTimeout> | null = null

export const useNotification = () => {
  const showNotification = (
    message: string,
    type: 'success' | 'error',
    position: NotificationPos = 'bottom-right'
  ) => {
    notification.value.message = message
    notification.value.type = type
    notification.value.show = true
    notification.value.position = position

    if (timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      notification.value.show = false
    }, 2000)
  }

  return {
    notification,
    showNotification,
  }
}
