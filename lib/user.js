var request = require("request");

var User = function(options) {
  this.init(options);
}

User.prototype.init = function(options) {
  this.options = options;
}

User.prototype.get = function(uid, callback) {
  var options = this.options;

  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    request.get(options.url + "/user/" + uid + ".json", function(err, response, body) {
      callback(err, body);
    })
  }
}

User.prototype.login = function(username, password, callback) {
  var options = this.options;

  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    var url = options.url + "/user/login";
    var params = {
      username: username,
      password: password
    }

    request.post({
      url: url,
      json: params
    }, function(err, response, body) {
      callback(err, body);
    });
  } 
}

User.prototype.logout = function(callback) {
  var options = this.options;
  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    var url = options.url + "/user/logout";
    request.post(url, function(err, response, body) {
      callback(err, body);
    });
  }
}

module.exports = User;