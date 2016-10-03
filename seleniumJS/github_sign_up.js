//set up libraries 
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
var fs = require('fs');

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

//helper functions
var clickAndWait = function(buttonClass, pageTitle) {
  driver.findElement(By.className(buttonClass)).click();
  driver.wait(until.titleIs(pageTitle), 2000).catch(function(e) {
    console.log( pageTitle + " page title NOT found ")
  });  

};

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
    return driver.takeScreenshot().then(function(data) {
        fs.writeFile( filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
            if(err) throw err;
        });
    })

};

//do tests
driver.get('https://github.com/');

driver.wait(until.titleIs('How people build software · GitHub'), 3000).catch(function(e) {
	console.log("langing page title NOT found");
});


clickAndWait('js-selected-navigation-item nav-item nav-item-personal', 'Learn how developers build software · GitHub'); //clicking personal link and checking youre on the right page
driver.saveScreenshot('personal_page.png');

clickAndWait('js-selected-navigation-item nav-item nav-item-opensource', 'Learn how developers build software · GitHub'); //clicking open source link and checking youre on the right page
driver.saveScreenshot('opensource_page.png');

clickAndWait('js-selected-navigation-item nav-item nav-item-business', 'Bring GitHub to work · GitHub'); //clicking business page and checking youre on the right page
driver.saveScreenshot('itembusiness_page.png');

clickAndWait('octicon octicon-mark-github','How people build software · GitHub'); // clicking octicat image and checking youre on the home page
driver.saveScreenshot('back_to_homepage.png');

// driver.findElement(By.name('user[login]')).sendKeys('amcd1443');
// driver.findElement(By.name('user[email]')).sendKeys('acmd1443@gmail.com');
// driver.findElement(By.name('user[password]')).sendKeys('amcdamcd14431443');
// driver.findElement(By.className('btn btn-theme-green btn-jumbotron btn-block')).click();
// driver.wait(until.titleIs('Join GitHub · GitHub'), 3000).catch(function(e) {
// 	console.log("sign-in page title NOT found");
// })



    


driver.quit();


