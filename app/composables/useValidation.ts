export const useValidation = () => {
  const { t } = useI18n()
  const { showNotification } = useNotification()

  interface ContactForm {
    name: string
    email: string
    message: string
  }

  interface ErrorForm {
    nameError: string
    emailError: string
    messageError: string
  }

  const form = ref<ContactForm>({
    name: '',
    email: '',
    message: '',
  })

  const errors = ref<ErrorForm>({
    nameError: '',
    emailError: '',
    messageError: '',
  })

  const validateName = (): boolean => {
    if (!form.value.name.trim()) {
      errors.value.nameError = t('contact.validation.nameRequired')
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
      errors.value.emailError = t('contact.validation.emailRequired')
      return false
    }

    if (!isValidEmail(form.value.email)) {
      errors.value.emailError = t('contact.validation.emailInvalid')
      return false
    }

    return true
  }

  const validateMessage = (): boolean => {
    if (!form.value.message.trim()) {
      errors.value.messageError = t('contact.validation.messageRequired')
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
      showNotification(t('contact.notifications.validationError'), 'error')
      return
    }

    showNotification(t('contact.notifications.success'), 'success')
  }

  return { form, errors, handleSubmit }
}
