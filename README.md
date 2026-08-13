# 🚀 Portfolio Personal — Prueba Técnica

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vuedotjs)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> Portfolio web interactivo, full responsive y accesible, desarrollado como prueba técnica utilizando la arquitectura moderna de **Nuxt 4** y **Tailwind CSS**.

---

## 🔗 Enlaces del Proyecto

- **🌐 Aplicación Desplegada (Live Demo):** [https://mrsirooo.github.io/Portfolio/](https://mrsirooo.github.io/Portfolio/)
- **🎨 Mockup de Diseño (Figma):** [Ver Mockup en Figma](https://stitch.withgoogle.com/projects/9481810552630355918)
- **📌 Issue Principal (Epic Tracker):** [Issue #1 - [EPIC] Desarrollo de Portfolio](https://github.com/MrSirooo/Portfolio/issues/2#issue-5018796980)

---

## 🛠️ Stack Tecnológico

- **Framework:** [Nuxt 4](https://nuxt.com/) (Estructura de carpeta `app/`)
- **Lógica & Vistas:** [Vue 3](https://vuejs.org/) (`Composition API` con `<script setup lang="ts">`)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Design tokens, utilidades personalizadas, responsive design _Mobile First_)
- **Gestión de Datos:** Archivos `JSON` locales para desacoplar el contenido de la interfaz
- **Componentes:** Single File Components (`.vue` SFCs)
- **Calidad de Código & Git Hooks:**

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
└── nuxt.config.ts          # Configuración principal de Nuxt 4
```
