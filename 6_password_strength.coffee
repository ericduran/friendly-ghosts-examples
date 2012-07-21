casper = require('casper').create({
  verbose: true,
})

casper.test.comment "Take screenshots of the Drupal password strength form."

casper.start()

casper.thenOpen "http://dev.friendly-ghosts.gotpantheon.com/user/register"

casper.then ->
  @fill "#user-register-form", {
    "name": "test",
    "mail": "test@example.com",
  }, false
  @capture "pass1.png"
  @test.assertEquals(@visible(".password-confirm"), false, "Password match indicator is invisible.")

casper.then ->
  @fill "#user-register-form", {
    "pass[pass1]": "test",
  }, false
  @capture "pass2.png"
  @test.assertEquals(@visible(".password-confirm"), false, "Password match indicator is visible.")

casper.then ->
  @fill "#user-register-form", {
    "pass[pass2]": "test2",
  }, false
  @capture "pass3.png"
  @test.assertEquals(@visible(".password-confirm"), true, "Password match indicator is visible.")
  @test.assertEval ->
    jQuery(".password-confirm span").text() == "no"
  , "Drupal reports that the passwords do not match."

casper.then ->
  @fill "#user-register-form", {
    "pass[pass1]": "test2",
  }, false
  @capture "pass4.png"
  @test.assertEquals(@visible(".password-confirm"), true, "Password match indicator is visible.")
  @test.assertEval ->
    jQuery(".password-confirm span").text() == "yes"
  , "Drupal reports that the passwords match."

casper.run ->
  @test.renderResults true
