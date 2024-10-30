---
# Guía de Configuración de Playwright y JavaScript
---

## Características de este framework

- [Patrón de Diseño: Modelo de Objetos de Página](https://playwright.dev/docs/test-pom)
- [Informes: Allure](https://www.npmjs.com/package/allure-playwright)

## Comenzando

### Requisitos previos

- Descarga e instala [Node.js](https://nodejs.org/en/download/package-manager) desde la versión 16.14.2 en adelante.
- Descarga e instala cualquier editor de texto como Visual Code/Sublime/Brackets.

### Configuración de Scripts

- Clona el repositorio en una carpeta.

  http: `git clone https://github.com/MET-Testing/plawyright-javascript.git `  
  ssh:`git clone git@github.com:MET-Testing/plawyright-javascript.git`

- Ve al directorio raíz del proyecto e instala las dependencias: `npm install`

- Instala playwright: `npx playwright install`

- Todas las dependencias del package.json se instalarán en la carpeta node_modules.

### Cómo escribir una prueba

- Agrega un nuevo spec en la carpeta `e2e-tests`.
- Nombra el archivo como <nombre-de-la-prueba>.spec.js (por ejemplo, home.spec.js).
- Crea una carpeta en page-objects/pages como <nombre-de-la-página> (por ejemplo, homePage).

## Cómo correr un test de ejemplo

`npx playwright test navigate.spec.js`

## Cómo correr todos los test

`npx playwright test`
