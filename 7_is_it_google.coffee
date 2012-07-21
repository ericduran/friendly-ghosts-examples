casper = require("casper").create()
url = casper.cli.get 0

if not url
  casper
    .echo("Usage: $ casperjs is_it_google.coffee <url>")
    .exit 1

casper.start url, ->
  @test.assertTitle("Google", "The page title is Google. You are probably looking at Google!")

casper.run ->
  @test.renderResults true
