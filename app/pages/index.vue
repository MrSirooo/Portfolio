<template>
  <section
    aria-label="Home"
    class="flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-16rem)] gap-6"
  >
    <span class="text-primary border border-primary p-2 bg-[var(--color-blue-bg)]"
      >VERSION 2.05 // MOTOR_LISTO</span
    >

    <span class="text-[var(--color-text-grey)]">DEVELOPER // IAGO OTERO</span>

    <h1 class="flex flex-col items-center w-full text-8xl text-center">
      <span class="text-[var(--color-text)]">Construyendo Mundos,</span>

      <span class="text-primary">Frame a Frame</span>
    </h1>

    <p class="mx-auto max-w-[750px] text-center">
      Diseñador y Programador de Videojuegos con experiencia desarrollando en Unity y UnrealEngini.
      A lo largo de mi trayectoria he colaborado en equipos multidisciplinares, trabajando
      estrechamente con profesionales de distintas áreas del desarrollo de videojuegos. Esta
      experiencia me ha permitido desarrollar una comunicación eficaz entre departamentos, facilitar
      la coordinación de equipos y contribuir de forma eficiente al desarrollo de proyectos.
    </p>

    <div class="flex items-center gap-10">
      <AppButton variant="primary" to="/projects" size="lg">VER PROYECTOS</AppButton>
      <AppButton variant="secondary" to="/technicalArsenal" size="lg">[Ver Arsenal]</AppButton>
    </div>
  </section>
</template>
