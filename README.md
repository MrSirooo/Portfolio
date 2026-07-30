# 🚀 Portfolio Personal — Prueba Técnica

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vuedotjs)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> Portfolio web interactivo, full responsive y accesible, desarrollado como prueba técnica utilizando la arquitectura moderna de **Nuxt 4** y **Tailwind CSS**.

---

## 🔗 Enlaces del Proyecto

<!-- CAMBIAR ENLACES -->

- **🌐 Aplicación Desplegada (Live Demo):** [https://tu-portfolio.netlify.app](https://tu-portfolio.netlify.app)
- **🎨 Mockup de Diseño (Figma):** [Ver Mockup en Figma](https://stitch.withgoogle.com/projects/9481810552630355918?pli=1)
- **📌 Issue Principal (Epic Tracker):** [Issue #1 - [EPIC] Desarrollo de Portfolio](https://github.com/tu-usuario/tu-repo/issues/1)

---

## 🛠️ Stack Tecnológico

- **Framework:** [Nuxt 4](https://nuxt.com/) (Estructura de carpeta `app/`)
- **Lógica & Vistas:** [Vue 3](https://vuejs.org/) (`Composition API` con `<script setup lang="ts">`)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Design tokens, utilidades personalizadas, responsive design _Mobile First_)
- **Gestión de Datos:** Archivos `JSON` locales para desacoplar el contenido de la interfaz
- **Componentes:** Single File Components (`.vue` SFCs)
- **Calidad de Código & Git Hooks:**

<!-- REVISAR -->

- **ESLint** & **Prettier** (Linter con flat config y formateador de código)
- **Husky** + **Commitlint** (Validación automatizada de _Conventional Commits_)
- **lint-staged** (Comprobación y formateo previo a cada commit)

---

## 📐 Arquitectura y Buenas Prácticas

### 1. Principios de Código y Arquitectura

- **SOLID / Single Responsibility:** Separación limpia de responsabilidades. Los componentes SFC se enfocan únicamente en la vista/UI, mientras que los datos y lógica reactiva se gestionan en _composables_ dedicados (`usePortfolioData.ts`, etc.).
- **DRY (Don't Repeat Yourself):** Reutilización de componentes SFC de UI (Botones, Tarjetas, Modales) y extracción de clases de utilidad recurrentes o tokens de Tailwind en la configuración global.
- **Early Return Pattern:** Simplificación de la lógica condicional en funciones y composables para evitar anidamientos innecesarios y mejorar la legibilidad.
- **Manejo de Errores:** Bloques `try/catch` en la carga de datos JSON, estados reactivos de error/cargando (`pending`, `error`) y página de error personalizada (`app/error.vue`).

### 2. Estilos con Tailwind CSS

- **Design System / Tokens:** Extensión de la configuración de Tailwind (`tailwind.config.ts`) para definir la paleta de colores del portafolio, fuentes tipográficas y breakpoints personalizados.
- **Responsive Design:** Maquetación _Mobile-First_ utilizando prefijos nativos de Tailwind (`sm:`, `md:`, `lg:`, `xl:`).
- **Custom Utility / Reusabilidad:** Uso de `@apply` moderado o composición de clases mediante utilidades para evitar duplicación.

### 3. UX, Accesibilidad (a11y) y SEO

- **HTML Semántico:** Uso estricto de etiquetas de maquetación (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Accesibilidad:** Atributos ARIA (`aria-label`, `aria-expanded`), navegación fluida por teclado, soporte de contraste adecuado y estados `:focus-visible` visibles.
- **SEO & Performance:** Meta etiquetas dinámicas con `useSeoMeta()` / `useHead()`, etiquetas Open Graph (OG), favicon y optimización de assets.

---

## 📋 Gestión del Proyecto y Flujo de Git

El proyecto sigue la metodología de desarrollo de un equipo de producción real:

1. **Gestión por Issues:** Planificación articulada en un **Issue Epic** general ([#1]) desglosado en Sub-Issues independientes para cada característica/componente.
2. **Estrategia de Ramas:** Desarrollo aislado por característica (`feature/issue-X-*`, `fix/issue-X-*`) e integración hacia `main` mediante **Pull Requests**.
3. **Conventional Commits:** Formato obligatorio de mensajes de commit (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `ci:`), auditado por **Commitlint** mediante hooks de **Husky**.

---

## 📂 Estructura del Proyecto (Nuxt 4)

```text
├── .husky/                 # Git hooks (commit-msg, pre-commit)
├── app/                    # 🟢 Directorio principal de Nuxt 4
│   ├── assets/             # Archivos CSS globales y directivas de Tailwind
│   ├── components/         # Componentes SFC (.vue) reutilizables
│   ├── composables/        # Composables con TypeScript y Composition API
│   ├── data/               # Archivos JSON con los textos del portfolio
│   ├── layouts/            # Layouts principales (default.vue)
│   ├── pages/              # Rutas/Vistas de la aplicación
│   ├── types/              # Interfaces y tipos globales de TypeScript
│   ├── app.vue             # Entry point de la UI
│   └── error.vue           # Manejo global de páginas de error
├── public/                 # Assets estáticos (Favicon, imágenes)
├── eslint.config.mjs       # Configuración de ESLint (Flat Config)
├── .prettierrc.json        # Reglas de formato de Prettier
├── .commitlintrc.json      # Reglas de Conventional Commits
├── nuxt.config.ts          # Configuración principal de Nuxt 4
└── tailwind.config.ts      # Tokens y configuración de Tailwind CSS
```
