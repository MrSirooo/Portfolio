<script setup lang="ts">
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
</script>

<template>
  <form
    class="flex flex-col w-full max-w-2xl gap-6 justify-center bg-secundary p-6 sm:p-10 border-2 border-[var(--color-border)] mx-auto lg:ml-auto"
    @submit.prevent="handleSubmit"
  >
    <div>
      <label for="name" class="mb-2 block text-xs sm:text-sm font-medium"
        >IDENTIFICACIÓN // NOMBRE</label
      >

      <input
        id="name"
        v-model="form.name"
        type="text"
        :class="[
          'bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base',
          errors.nameError ? 'border-red-500' : 'border-[var(--color-text-grey)]',
        ]"
        placeholder="Nombre Apellido"
      />
      <span v-if="errors.nameError" class="text-xs text-red-500 font-medium">
        {{ errors.nameError }}
      </span>
    </div>

    <div>
      <label for="email" class="mb-2 block text-xs sm:text-sm font-medium">UPLINK // EMAIL</label>

      <input
        id="email"
        v-model="form.email"
        type="text"
        :class="[
          'bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base',
          errors.emailError ? 'border-red-500' : 'border-[var(--color-text-grey)]',
        ]"
        placeholder="correo@dominio.com"
      />
      <span v-if="errors.emailError" class="text-xs text-red-500 font-medium">
        {{ errors.emailError }}
      </span>
    </div>

    <div>
      <label for="message" class="mb-2 block text-xs sm:text-sm font-medium"
        >DETALLES MISIÓN // MENSAJE</label
      >

      <textarea
        id="message"
        v-model="form.message"
        rows="6"
        :class="[
          'bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base',
          errors.messageError ? 'border-red-500' : 'border-[var(--color-text-grey)]',
        ]"
        placeholder="Tengo un proyecto que cambiará el mundo..."
      />
      <span v-if="errors.messageError" class="text-xs text-red-500 font-medium">
        {{ errors.messageError }}
      </span>
    </div>

    <AppButton variant="primary" size="lg">ESTABLECER CONEXIÓN</AppButton>
  </form>
</template>
