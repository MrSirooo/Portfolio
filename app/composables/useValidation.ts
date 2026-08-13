export const useValidation = () => {
  const { showNotification } = useNotification()

  interface ContactForm {
    name: string
    email: string
    message: string
  }

  interface errorForm {
    nameError: string
    emailError: string
    messageError: string
  }

  const form = ref<ContactForm>({
    name: '',
    email: '',
    message: '',
  })

  const errors = ref<errorForm>({
    nameError: '',
    emailError: '',
    messageError: '',
  })

  const validateName = (): boolean => {
    if (!form.value.name.trim()) {
      errors.value.nameError = 'Name is required'
      return false
    }

    return true
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email)
  }

  const validateEmail = (): boolean => {
    if (!form.value.email.trim()) {
      errors.value.emailError = 'Email is required'
      return false
    }

    if (!isValidEmail(form.value.email)) {
      errors.value.emailError = 'Please enter a valid email address'
      return false
    }

    return true
  }

  const validateMessage = (): boolean => {
    if (!form.value.message.trim()) {
      errors.value.messageError = 'Message is required'
      return false
    }

    return true
  }

  const validateForm = (): boolean => {
    errors.value.nameError = ''
    errors.value.emailError = ''
    errors.value.messageError = ''

    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isMessageValid = validateMessage()

    return isNameValid && isEmailValid && isMessageValid
  }

  const handleSubmit = (): void => {
    if (!validateForm()) {
      showNotification('Transmisión fallida. Revisa los datos marcados.', 'error')
      return
    }

    showNotification('Conexión establecida. Mensaje enviado con éxito.', 'success')
  }

  return { form, errors, handleSubmit }
}
