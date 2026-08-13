<template>
  <section
    aria-label="Home"
    class="flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-16rem)] gap-6 px-4 py-8 w-full max-w-full overflow-hidden"
  >
    <span
      class="text-primary border border-primary p-2 bg-[var(--color-blue-bg)] text-xs sm:text-sm text-center"
    >
      {{ $t('home.statusBadge') }}
    </span>

    <span class="text-[var(--color-text-grey)] text-xs sm:text-sm tracking-wider">
      {{ $t('home.developerLabel') }}
    </span>

    <h1
      class="flex flex-col items-center w-full text-3xl sm:text-6xl lg:text-8xl text-center font-bold tracking-tight leading-tight break-words"
    >
      <span class="text-[var(--color-text)]">{{ $t('home.title.part1') }}</span>
      <span class="text-primary">{{ $t('home.title.part2') }}</span>
    </h1>

    <p
      class="mx-auto max-w-[750px] text-center text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed"
    >
      {{ $t('home.description') }}
    </p>

    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 w-full sm:w-auto mt-2">
      <AppButton variant="primary" to="/projects" size="lg" class="w-full sm:w-auto">
        {{ $t('home.buttons.projects') }}
      </AppButton>

      <AppButton variant="secondary" to="/technicalArsenal" size="lg" class="w-full sm:w-auto">
        {{ $t('home.buttons.arsenal') }}
      </AppButton>
    </div>
  </section>
</template>
