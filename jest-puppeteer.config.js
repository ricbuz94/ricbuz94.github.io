module.exports = {
	launch: {
		dumpio: false,
		headless: process.env.HEADLESS !== 'false',
		slowMo: process.env.SLOW || 0,
		executablePath: process.env.CHROME_BIN,
		product: 'chrome'
	},
	browserContext: 'default',
	server: {
		command: 'serve build --single -p 3000'
	}
}