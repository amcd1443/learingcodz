var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('huge ideas pokemon go');
driver.findElement(By.name('btnG')).click();

driver.wait(until.titleIs('huge ideas pokemon go - Google Search'), 2000).catch(function(e) {
	console.log("TITLE NOT FOUND");
});
driver.findElements(By.className('srg')).then(function (srgs){
	var firstSrg = srgs[0];
	console.log("found " + srgs.length + " srgs");

})

driver.quit();
