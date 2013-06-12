var assert = require("assert");

var User = require("../lib/user");
var config = require('./config');

var options = {url: config.url};
var user = new User(options);

var username = config.username;
var password = config.password;

module.exports = {
  tearDown: function (callback) {
    user.logout(function(err, result) {
      callback();
    });
  },
  test1: function (test) {
    test.expect(1);
    user.login(username, password, function(err, result) {
      test.equal(1, result.user.uid, "UID is 1");
      test.done();
    });
  }
};