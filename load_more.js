casper.test.comment('Testing that the load more works as expected.');

casper.start('http://www.marthastewart.com/359460/party-decorations/', function() {

  this.test.assertEval(function() {
      return document.querySelectorAll('.topic-items li').length == 20;
  }, 'There are 20 topic items on this page');

  this.click('.pager-next.first.last a');

  this.wait(2000, function() {
      this.echo("Loading content....");

      this.test.assertEval(function() {
        return document.querySelectorAll('.topic-items li').length == 40;
      }, 'There are now 40 topic items on this page');  
  });
});

casper.run(function() {
    this.test.done();
});
