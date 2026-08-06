<script setup lang="ts">
  import { reactive } from 'vue'

  interface ContactForm {
    name: string
    email: string
    message: string
  }

  const form = reactive<ContactForm>({
    name: '',
    email: '',
    message: '',
  })

  const validateName = (): boolean => {
    if (!form.name.trim()) {
      console.log('Name is required')
      return false
    }

    return true
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email)
  }

  const validateEmail = (): boolean => {
    if (!form.email.trim()) {
      console.log('Email is required')
      return false
    }

    if (!isValidEmail(form.email)) {
      console.log('Please enter a valid email address')
      return false
    }

    return true
  }

  const validateMessage = (): boolean => {
    if (!form.message.trim()) {
      console.log('Message is required')
      return false
    }

    return true
  }

  const validateForm = (): boolean => {
    return [validateName(), validateEmail(), validateMessage()].every(Boolean)
  }

  const handleSubmit = (): void => {
    if (!validateForm()) {
      console.log('Invalid Form')
      return
    }

    console.log('Form is valid')
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
        class="bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base"
        placeholder="Nombre Apellido"
      />
    </div>

    <div>
      <label for="email" class="mb-2 block text-xs sm:text-sm font-medium">UPLINK // EMAIL</label>

      <input
        id="email"
        v-model="form.email"
        type="text"
        class="bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base"
        placeholder="correo@dominio.com"
      />
    </div>

    <div>
      <label for="message" class="mb-2 block text-xs sm:text-sm font-medium"
        >DETALLES MISIÓN // MENSAJE</label
      >

      <textarea
        id="message"
        v-model="form.message"
        rows="6"
        class="bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base"
        placeholder="Tengo un proyecto que cambiará el mundo..."
      />
    </div>

    <AppButton variant="primary" size="lg">ESTABLECER CONEXIÓN</AppButton>
  </form>
</template>
