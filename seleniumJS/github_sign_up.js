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
  
  start = new Date();
  console.log(start.getTime())
driver.wait(until.titleIs(pageTitle), 2000).then(function() {
  end = new Date();
  console.log("clicking the "+pageTitle+" took " + (end.getTime() - start.getTime()) + "msec");
}).catch(function(e) {
    console.log( pageTitle + " page title NOT found ")
  });  

};
//find out how to make this start and finish each individual page
webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
    return driver.takeScreenshot().then(function(data) {
        fs.writeFile( filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
            if(err) throw err;
        });
    })

};

var end, start;
start = new Date();

//do tests
driver.get('https://www.github.com/');

driver.wait(until.titleIs('How people build software · GitHub'), 3000).catch(function(e) {
	 console.log("langing page title NOT found");
});

//clicking personal link and checking youre on the right page
clickAndWait('js-selected-navigation-item nav-item nav-item-personal', 'Learn how developers build software · GitHub'); 
driver.saveScreenshot('personal_page.png');


//clicking open source link and checking youre on the right page
clickAndWait('js-selected-navigation-item nav-item nav-item-opensource', 'Where open source communities live · GitHub');
driver.saveScreenshot('opensource_page.png');

//clicking business page and checking youre on the right page
clickAndWait('js-selected-navigation-item nav-item nav-item-business', 'Bring GitHub to work · GitHub');
driver.saveScreenshot('itembusiness_page.png');

// clicking octicat image and checking youre on the home page
var end, start;
start = new Date();
clickAndWait('octicon octicon-mark-github','How people build software · GitHub'); 
driver.saveScreenshot('back_to_homepage.png');




driver.findElement(By.name('user[login]')).sendKeys('amcd1443');
driver.findElement(By.name('user[email]')).sendKeys('acmd1443@gmail.com');
driver.findElement(By.name('user[password]')).sendKeys('amcdamcd14431443');
driver.findElement(By.className('btn btn-theme-green btn-jumbotron btn-block')).click();
driver.wait(until.titleIs('Join GitHub · GitHub'), 3000).then(function() {
    end = new Date();
    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
}).catch(function(e) {
	console.log("sign-in page title NOT found");
})



driver.quit();


