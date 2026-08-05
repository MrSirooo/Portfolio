<script setup lang="ts">
  import contactInfo from '~/data/contactData.json'

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.error('Could not copy text:', error)
    }
  }
</script>

<template>
  <section
    aria-label="contact"
    class="grid flex-1 grid-cols-1 lg:grid-cols-2 justify-center m-10 gap-16"
  >
    <div class="flex flex-col justify-center gap-6 m-10">
      <h1 class="text-4xl">Construyamos algo <span class="text-primary">Incremental</span>.</h1>

      <h3>
        Disponible para desarrollo freelance, consultoría o roles permanentes en estudios
        innovadores. Hablemos sobre tu visión.
      </h3>

      <div class="flex gap-4">
        <Icon :name="contactInfo.emailIcon" size="50" />
        <div class="flex flex-col">
          <h4 class="text-sm text-muted">PROTOCOLO_EMAIL</h4>
          <h3
            class="cursor-pointer transition-colors hover:text-primary"
            @click="copyToClipboard(contactInfo.email)"
          >
            {{ contactInfo.email }}
          </h3>
        </div>
      </div>

      <div class="flex gap-4">
        <Icon :name="contactInfo.phoneIcon" size="50" />
        <div class="flex flex-col">
          <h4 class="text-sm text-muted">PROTOCOLO_PHONE</h4>
          <h3
            class="cursor-pointer transition-colors hover:text-primary"
            @click="copyToClipboard(contactInfo.phone)"
          >
            {{ contactInfo.phone }}
          </h3>
        </div>
      </div>
    </div>

    <ContactForm />
  </section>
</template>
