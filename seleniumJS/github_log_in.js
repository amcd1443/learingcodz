var webdriver = require('selenium-webdriver');
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();
driver.get('https://github.com/');
driver.wait(until.titleIs('How people build software · GitHub'), 3000).catch (function(e) {
	console.log("NOT github landing page");
});

dri

driver.quit();