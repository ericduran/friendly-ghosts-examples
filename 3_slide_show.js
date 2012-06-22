casper.test.comment('Testing that the slide show works as expected.');

// Start are our homepage.
casper.start('http://dev.friendly-ghosts.gotpantheon.com/', function() {

  // Lets 1st click on the slide show link
  this.click('#block-system-navigation li.last a');

  this.wait(2000, function() {
      this.echo("Heading over to the slide show page ...");

      this.test.assertEval(function() {
        // Lets count how many slides we have.
        return document.querySelectorAll('.views-slideshow-cycle-main-frame .views-row').length == 10;
      }, 'There are 10 slides on this page'); 

      // Lets also test that the 1st slide is visible.
      this.test.assertEval(function() {
        // Lets count how many slides we have.
        return jQuery('.views-slideshow-cycle-main-frame .views-row-1').css('display') == 'block';
      }, 'The 1st slide is a block'); 

  });
});

// Lets also test that the 2nd slide is not visible.
casper.then(function() {

  this.test.assertEval(function() {
    // Lets count how many slides we have.
    return jQuery('.views-slideshow-cycle-main-frame .views-row-2').css('display') == 'none';
  }, 'The 2nd slide is hidden'); 

  // Lets click the slide show next.
  this.click('.views-slideshow-controls-text-next a');

  this.wait(2000, function() {
      this.echo("Letting the JS do its work....");

      // Lets also test that the 1st slide is visible.
      this.test.assertEval(function() {
        // Lets count how many slides we have.
        return jQuery('.views-slideshow-cycle-main-frame .views-row-1').css('display') == 'none';
      }, 'The 1st slide is now hidden'); 

      this.test.assertEval(function() {
        // Lets count how many slides we have.
        return jQuery('.views-slideshow-cycle-main-frame .views-row-2').css('display') == 'block';
      }, 'The 2nd slide is now visible'); 
  });
});

casper.run(function() {
    this.test.done();
});
