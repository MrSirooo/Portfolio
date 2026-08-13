<script setup lang="ts">
  import contactInfo from '~/data/contactData.json'
  const { showNotification } = useNotification()

  const copyToClipboard = async (text: string, parameter: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text)
      showNotification(`${parameter} copiado correctamente.`, 'success', 'bottom-left')
    } catch (error) {
      showNotification(`Error: ${error}.`, 'error', 'bottom-left')
    }
  }
</script>

<template>
  <section
    aria-label="contact"
    class="grid flex-1 grid-cols-1 lg:grid-cols-2 items-center p-6 sm:p-10 lg:p-16 gap-10 lg:gap-16 w-full"
  >
    <div class="flex flex-col justify-center gap-6 w-full">
      <h1 class="text-2xl sm:text-4xl font-bold">
        Construyamos algo <span class="text-primary">Incremental</span>.
      </h1>

      <h3 class="text-sm sm:text-base text-muted">
        Disponible para desarrollo freelance, consultoría o roles permanentes en estudios
        innovadores. Hablemos sobre tu visión.
      </h3>

      <div class="flex items-center gap-4">
        <Icon :name="contactInfo.emailIcon" size="40" class="shrink-0" />
        <div class="flex flex-col min-w-0">
          <h4 class="text-xs sm:text-sm text-muted">PROTOCOLO_EMAIL</h4>
          <button
            class="text-left text-sm sm:text-base break-all cursor-pointer transition-colors hover:text-primary"
            @click="copyToClipboard(contactInfo.email, 'Correo')"
          >
            {{ contactInfo.email }}
          </button>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <Icon :name="contactInfo.phoneIcon" size="40" class="shrink-0" />
        <div class="flex flex-col min-w-0">
          <h4 class="text-xs sm:text-sm text-muted">PROTOCOLO_PHONE</h4>
          <button
            class="text-left text-sm sm:text-base cursor-pointer transition-colors hover:text-primary"
            @click="copyToClipboard(contactInfo.phone, 'Telefono')"
          >
            {{ contactInfo.phone }}
          </button>
        </div>
      </div>
    </div>

    <ContactForm />
  </section>
</template>
