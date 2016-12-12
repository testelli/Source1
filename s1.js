
phantom.casperTest = true;
var casper = require('casper').create();
var x = require('casper').selectXPath;

casper.options.viewportSize = {width: 1600, height: 950};

/*-------------------------------------------------------------------------------------*/
	//START  

			casper.echo('S1 Test Script', 'COMMENT');

	   		// Home page
	   		casper.start('http://s1.pt-env.com');

	   		// Check HTTP status
	   		//casper.then(function () {
	   			//var hsc = this.status(false);
	   			//casper.test.assert(hsc.currentHTTPStatus === 200, "Http Status Code: " + hsc.currentHTTPStatus);
	   		//});


			//Login:      
			casper.then(function() {
				this.sendKeys('username', 'colin');
				this.sendKeys('password', 'aolin');
				casper.capture("Home.png");
				
				casper.thenClick(x('//*[@id="login-form"]/form/button')); 

			});






			//Check for admin button (successful login)
			//casper.then(function() {
				//his.test.assertExists({
					//type: 'xpath',
					//path: '//*[@id="rt-top"]/div/div[2]/div/div/div/ul/li[2]/a'
				//}, "Login successful, Logged in as " + user);
				
			//});

		
						// casper.capture("scriptshots/NCTC_TEST3.png");
						// casper.thenClick(x('//*[@id="msr-app"]/ng-view/div/div[2]/table/tbody/tr[1]/td[1]/span[1]'));  
						
						// //Edit counts
						// casper.wait(3000, function() {

						// 	// the casper clear field method is not working the way it should, sending a non numerical character clears the field, using this as a work around
						// 	//clear basic
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[2]/input'), 'a');
						// 	//clear expanded
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[3]/input'), 'a');
						// 	//clear Dig. Homes
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[4]/input'), 'a');
						// 	//clear Dig. Gateway
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[5]/input'), 'a');
						// 	//clear HD Homes
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[6]/input'), 'a');
						// 	//clear VOD
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[7]/input'), 'a');
						// 	//clear Data Subs
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[8]/input'), 'a');
						// 	//clear Bandwidth
						// 	this.sendKeys(x('//*[@id="msr-app"]/ng-view/div/div[2]/form/table/tbody/tr[3]/td[9]/input'), 'a');