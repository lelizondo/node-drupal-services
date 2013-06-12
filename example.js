// Require node-drupal-services
var Drupal = require("node-drupal-services");

// Create a new options object to send the url and possible more data
var options = {
	url: "http://localhost/admin/api"
}

// Define the username and the password
var username = "admin";
var password = "123";

// Instantiate a Node and a User classes and pass the options object
var node = new Drupal.Node(options);
var user = new Drupal.User(options);

console.log("Initializing");
// Login passing the username and a password
user.login(username, password, function(err, result) {
	if(err) console.log(err);

	// Print the result
	console.log(result);

	// Get some nodes!
	node.index(function(err, result) {
		if(err) console.log(err);

		// Print the object
		console.log(result);

		// Log out
		user.logout(function(err, result) {
			if(err) console.log(err);
			// Print the result of the logout operation
			console.log(result);
			console.log("Logged out");
		});	
	});

});
