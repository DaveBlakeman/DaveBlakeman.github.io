// Create a request variable and assign a new XMLHttpRequest object to it.
const fetch = require("node-fetch");

const request = async () => {
    var response = await fetch('https://killerisland.herokuapp.com/api/v2/users')

	var data = await response.json()

	console.log(json)
}

request();