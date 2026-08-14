<script setup lang="ts">
  import contactInfo from '~/data/contactData.json'

  const { t } = useI18n()
  const { showNotification } = useNotification()

  const copyToClipboard = async (text: string, parameter: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text)
      showNotification(t('contact.notifications.copied', { parameter }), 'success', 'bottom-left')
    } catch {
      showNotification(t('contact.notifications.copyError'), 'error', 'bottom-left')
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
        {{ t('contact.title.part1') }}
        <span class="text-primary">{{ t('contact.title.part2') }}</span
        >.
      </h1>

      <h3 class="text-sm sm:text-base text-muted">
        {{ t('contact.description') }}
      </h3>

      <div class="flex items-center gap-4">
        <Icon :name="contactInfo.emailIcon" size="40" class="shrink-0" />
        <div class="flex flex-col min-w-0">
          <h4 class="text-xs sm:text-sm text-muted">{{ t('contact.email.label') }}</h4>
          <button
            class="text-left text-sm sm:text-base break-all cursor-pointer transition-colors hover:text-primary"
            @click="copyToClipboard(contactInfo.email, t('contact.email.name'))"
          >
            {{ contactInfo.email }}
          </button>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <Icon :name="contactInfo.phoneIcon" size="40" class="shrink-0" />
        <div class="flex flex-col min-w-0">
          <h4 class="text-xs sm:text-sm text-muted">{{ t('contact.phone.label') }}</h4>
          <button
            class="text-left text-sm sm:text-base cursor-pointer transition-colors hover:text-primary"
            @click="copyToClipboard(contactInfo.phone, t('contact.phone.name'))"
          >
            {{ contactInfo.phone }}
          </button>
        </div>
      </div>
    </div>

    <ContactForm />
  </section>
</template>
