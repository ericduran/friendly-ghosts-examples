casper.test.comment('Testing that the load more works as expected.');

casper.start('http://dev.friendly-ghosts.gotpantheon.com/', function() {

  // Lets 1st click on the Load more test
  this.click('#block-system-navigation li.first a');

  this.wait(2000, function() {
      this.echo("Heading over to the load more page ...");

      this.test.assertEval(function() {
        return document.querySelectorAll('.view-content .views-row').length == 5;
      }, 'There are 5 items on this page');  
  });

});

// Ok now lets test ajax load more.
casper.then(function() {
  // Ok now lets click on the load more link and see what happens
  this.click('.view-load-more-test .pager a');

  this.wait(2000, function() {
      this.echo("Loading ajax content....");

      this.test.assertEval(function() {
        return document.querySelectorAll('.view-content .views-row').length == 10;
      }, 'There are 10 items on this page');  
  });
});

casper.run(function() {
    this.test.done();
});
