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

    var content = {
      title: "Hello World",
      type: "page",
      uid: 1,
      body: {
        und: {
          0: {
            value: "Hello World, this is the body field"
          }
        }
      }
    }
    
    node.post(content, function(err, result) {
      test.equal(result.nid, 132);
      test.done();
    });
  }
};