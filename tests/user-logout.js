var assert = require("assert");

var User = require("../lib/user");
var config = require('./config');

var options = {url: config.url};
var user = new User(options);

var username = config.username;
var password = config.password;

module.exports = {
  setUp: function (callback) {
    user.login(username, password, function(err, result) {
      callback();
    });
  },
  test1: function (test) {
    test.expect(1);
    user.logout(function(err, result) {
      test.ok(result);
      test.done();
    });
  }
};