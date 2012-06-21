casper.test.comment('Testing that we have an ajax popup');

casper.start('http://www.marthastewart.com/', function() {
  
  this.test.assertEval(function() {
      return document.querySelectorAll('.my-ms-frame').length == 0;
  }, 'There is no iframe with the my-ms-frame class');

  // Now lets click the sign-in link.
  this.click('a.login-frame');

  // Lets test that our remote content is now on the page.
  this.test.assertEval(function() {
      return document.querySelectorAll('.my-ms-frame').length == 1;
  }, 'There is now an iframe with the my-ms-frame class in a pop-up');

});

casper.run(function() {
    this.test.done();
});