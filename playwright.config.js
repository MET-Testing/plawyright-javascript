export const testDir = 'tests'
export const timeout = 60000
export const retries = 0
export const reporter = [
	['html'],
	['junit', { outputFile: 'results.xml' }],
	['allure-playwright']
]
export const projects = [
	{
		name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: true,
			viewport: { width: 1720, height: 850 },
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,
			baseURL: 'https://www.saucedemo.com/'
		}
	}
]
