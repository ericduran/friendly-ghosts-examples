
casper.test.comment('Testing that there are Featured upcoming events on groups.drupal.org.');

// 
casper.start('http://groups.drupal.org/nyc/', function() {
  this.test.assertTextExists('Featured upcoming events', 'page body contains "Featured upcoming events"');
});
// 
casper.run(function() {
    this.test.done(); // I must be called once all the async stuff has been executed
});
