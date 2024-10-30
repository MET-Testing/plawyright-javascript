---
# Guía de Configuración de Playwright y JavaScript
---

## Características de este framework

- [Patrón de Diseño: Modelo de Objetos de Página](https://playwright.dev/docs/test-pom)

## Comenzando

### Requisitos previos

- Descarga e instala [Node.js](https://nodejs.org/en/download/package-manager) desde la versión 16.14.2 en adelante.
- Descarga e instala cualquier editor de código, te recomendamos Visual Studio Code

### Configuración necesaria

- Clona el repositorio en una carpeta
- Abre la terminal de VSCode y navega a la carpeta donde quieras tener el proyecto,
 (por ejemplo, puedes crear una carpeta en mis documentos que se llame automationCamp), con el comando cd navega hasta esa raíz, por ejemplo `cd Documentos/automationCamp`: luego usa el comando a continuación: 
  http: `git clone https://github.com/MET-Testing/plawyright-javascript.git `
  ssh:`git clone git@github.com:MET-Testing/plawyright-javascript.git`
- Ubicadx con la terminal en el mismo directorio donde clonaste el proyecto, instala las dependencias: `npm install`
- Instala playwright: `npm install @playwright/test --save-dev` `npx playwright install`
- Todas las dependencias del package.json se instalarán en la carpeta node_modules.

### Cómo escribir una prueba

- El proyecto está organizado siguiendo el patrón de diseño POM (recomendamos leer documentacion linkeada arriba de este README).
- Para escribir un test genera un archivo nuevo dentro de la carpeta <e2e/tests>.
- Nombra el archivo como <nombreDeLaPrueba>.spec.js (por ejemplo, home.spec.js).
- Por cada pagina del sitio web deberás crear una page nueva, por ejemplo una para el log-in, otra para los productos. Los nombres de los archivos deberán seguir la forma de escritura camel case (googlear para saber como es). 
- Crea una carpeta en page-objects/pages como <nombre-de-la-página> (por ejemplo, homePage).

## Comandos para correr los test

`npx playwright test -g "test title"`

## Cómo correr todos los test

`npx playwright test`

## Correr tests en modo debug

`npx playwright test "nombre del test" --debug`

### Cómo ver la captura de pantalla de una prueba fallida

- Ve al directorio raíz del proyecto: `./test-results/`.


#### GitLab

```bash
Repo: https://gitlab.com/j1182/playwright-javascript
```
