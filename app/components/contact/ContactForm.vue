<script setup lang="ts">
  const { t } = useI18n()
  const { form, errors, handleSubmit } = useValidation()
</script>

<template>
  <form
    class="flex flex-col w-full max-w-2xl gap-6 justify-center bg-secundary p-6 sm:p-10 border-2 border-[var(--color-border)] mx-auto lg:ml-auto"
    @submit.prevent="handleSubmit"
  >
    <div>
      <label for="name" class="mb-2 block text-xs sm:text-sm font-medium">{{
        t('contact.form.name.label')
      }}</label>

      <input
        id="name"
        v-model="form.name"
        type="text"
        :placeholder="t('contact.form.name.placeholder')"
        :class="[
          'bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base',
          errors.nameError ? 'border-red-500' : 'border-[var(--color-text-grey)]',
        ]"
      />
      <span v-if="errors.nameError" class="text-xs text-red-500 font-medium">
        {{ errors.nameError }}
      </span>
    </div>

    <div>
      <label for="email" class="mb-2 block text-xs sm:text-sm font-medium">{{
        t('contact.form.email.label')
      }}</label>

      <input
        id="email"
        v-model="form.email"
        type="text"
        :placeholder="t('contact.form.email.placeholder')"
        :class="[
          'bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base',
          errors.emailError ? 'border-red-500' : 'border-[var(--color-text-grey)]',
        ]"
      />
      <span v-if="errors.emailError" class="text-xs text-red-500 font-medium">
        {{ errors.emailError }}
      </span>
    </div>

    <div>
      <label for="message" class="mb-2 block text-xs sm:text-sm font-medium">{{
        t('contact.form.message.label')
      }}</label>

      <textarea
        id="message"
        v-model="form.message"
        rows="6"
        :placeholder="t('contact.form.message.placeholder')"
        :class="[
          'bg-input w-full rounded-md border border-[var(--color-text-grey)] px-4 py-3 text-sm sm:text-base',
          errors.messageError ? 'border-red-500' : 'border-[var(--color-text-grey)]',
        ]"
      />
      <span v-if="errors.messageError" class="text-xs text-red-500 font-medium">
        {{ errors.messageError }}
      </span>
    </div>

    <AppButton variant="primary" size="lg">{{ t('contact.form.submit') }}</AppButton>
  </form>
</template>
