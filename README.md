---
# Playwright and JavaScript Setup Guide
---

## Features of this framework
* [Design Pattern: Page Object Model](https://playwright.dev/docs/test-pom)
* [Reporting: Allure](https://www.npmjs.com/package/allure-playwright)

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* Install playwright: `npx playwright install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `e2e-tests` folder
* Name the file as <testname>.spec.js (e.g. home.spec.js)
* Create folder under page-objects/pages as <page-name> (e.g. homePage)

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to view failed test screenshot
* Go to Project root directory: `./test-results/`

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
