var assert = require("assert");

var Node = require("../lib/node");
var User = require("../lib/user");
var config = require('./config');

var options = {url: config.url};
var node = new Node(options);
var user = new User(options);

var username = config.username;
var password = config.password;

module.exports = {
  setUp: function (callback) {
    user.login(username, password, function(err, result) {
      callback();
    })
  },
  tearDown: function (callback) {
    user.logout(function(err, result) {
      callback();
    });
  },
  test1: function (test) {
    test.expect(1);

    var nid = 132;
    node.delete(nid, function(err, result) {
      test.ok(result);
      test.done();
    });
  }
};