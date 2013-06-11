var request = require("request");

// Create a new class Node, pass options
var Node = function(options) {
  this.init(options);
}

// Constructor, set the options object for the class Node
Node.prototype.init = function(options) {
  this.options = options;
}

// Get a node
Node.prototype.index = function(callback) {
  var options = this.options;

  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    request.get(options.url + "/node.json", function(err, response, body) {
      callback(err, body);
    });  
  }
}

// Get a node
Node.prototype.get = function(nid, callback) {
  var options = this.options;

  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    request.get(options.url + "/node/" + nid + ".json", function(err, response, body) {
      callback(err, JSON.parse(body));
    });  
  }
}

// Post a node
Node.prototype.post = function(params, callback) {
  var options = this.options;

  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    var url = options.url + "/node.json";
    request.post({
      url: url,
      json: params,
    }, function(err, response, body) {
      callback(err, body);
    })
  }
}

// Put a node
Node.prototype.put = function(nid, params, callback) {
  var options = this.options;
  if(typeof options.url == "undefined") {
    callback("Error: URL not defined", false);
  }
  else {
    var url = options.url + "/node/" + nid + ".json";
    request.put({
      url: url,
      json: params
    }, function(err, response, body) {
      callback(err, body);
    });
  }
}

Node.prototype.delete = function(nid, callback) {
  var options = this.options;
  if(typeof options.url == "undefined") {
    callback("Error: URL not defiend", false);
  }
  else {
    var url = options.url + "/node/" + nid + ".json";
    request.del({
      url: url
    }, function(err, response, body) {
      callback(err, body);
    });
  }
}

module.exports = Node;