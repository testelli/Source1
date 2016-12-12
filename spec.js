// spec.js
describe('Source1 Test Script', function() {

  it('Login', function() {
    browser.get('http://s1.uat-env.com/Content/dist/access/login');
    element(by.name('username')).sendKeys('colin');
    element(by.name('password')).sendKeys('aolin');
   
    it('Click Login', function() {
    	element(by.type('submit')).click();
	});

    it('Navigate to Quotes Page', function() {
    	//element(by.span('a[href*="/Content/dist/quotes/list"]')).click();
    	browser.get('http://s1.uat-env.com/Content/dist/quotes/list');
    	element(by.type('search')).sendKeys('55171');
    	element(by.type('search')).sendKeys('55171');
	 });




  });

 








//END  
});