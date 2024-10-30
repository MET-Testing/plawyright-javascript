const { test, expect } = require('@playwright/test')

test('Navigate to Home Page', async ({ page }) => {
	// Navega a la página de inicio usando la baseURL
	await page.goto('/') // Esto navega a 'https://www.saucedemo.com/'

	// Verifica el título de la página
	const title = await page.title()
	expect(title).toBe('Swag Labsssssss')
})
