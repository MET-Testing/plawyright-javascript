---
# Guía de Configuración de Playwright y JavaScript
---

## Características de este framework
* [Patrón de Diseño: Modelo de Objetos de Página](https://playwright.dev/docs/test-pom)
* [Informes: Allure](https://www.npmjs.com/package/allure-playwright)

## Comenzando

### Requisitos previos
* Descarga e instala [Node.js](https://nodejs.org/en/download/package-manager) desde la versión 16.14.2 en adelante.
* Descarga e instala cualquier editor de texto como Visual Code/Sublime/Brackets.

### Configuración de Visual Code
* Instala la extensión GitLens desde el Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Ve a Preferencias de Visual Code > Configuración y busca `formatOnSave` y habilítalo/actívalo.

### Configuración de Scripts 
* Clona el repositorio en una carpeta. hhtp: `git clone https://github.com/MET-Testing/plawyright-javascript.git ` ssh:`git clone git@github.com:MET-Testing/plawyright-javascript.git`
* Ve al directorio raíz del proyecto e instala las dependencias: `npm install`
* Instala playwright: `npx playwright install`
* Todas las dependencias del package.json se instalarán en la carpeta node_modules.

### Cómo escribir una prueba
* Agrega un nuevo spec en la carpeta `e2e-tests`.
* Nombra el archivo como <nombre-de-la-prueba>.spec.js (por ejemplo, home.spec.js).
* Crea una carpeta en page-objects/pages como <nombre-de-la-página> (por ejemplo, homePage).

### Cómo actualizar paquetes npm locales
* Ve al directorio raíz del proyecto y ejecuta el comando: `npm update`.

### Cómo ver la captura de pantalla de una prueba fallida
* Ve al directorio raíz del proyecto: `./test-results/`.

### Sample Allure Test Report
![Playwright and JavaScript Test Report](./assets/test-report.png?raw=true "Playwright and JavaScript Test Report")

![Playwright and JavaScript Test Report Expanded View](./assets/test-report-expanded-view.png?raw=true "Playwright and JavaScript Test Report Expanded View")

```

#### Playwright Test Report 

```bash
Html-test-report :
npm run test:chrome (OR)  npm run test:edge (OR) npm run html-report
```

#### Allure Test Report

```bash
Allure-test-report :
1.	npm run allure:clean
2.	npm run test:firefox (OR) npm run test:safari
3.	npm run allure:report
```

#### GitLab

```bash
Repo: https://gitlab.com/j1182/playwright-javascript
Pipelines: https://gitlab.com/j1182/playwright-javascript/-/pipelines
```
