// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var result = 0;
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://killerisland.herokuapp.com/api/v2/users', true)

request.onload = function() {
  // Begin accessing JSON data here
  console.log(this.response)
  var data = JSON.parse(this.response)
  console.log(data)
  if (request.status >= 200 && request.status < 400) {
 //     data.response.forEach(user => {
		  console.log(data.response.length)
		  result = data.response.length
//	  }
//     )
  } else {
    console.log('error')
  }
}

// Send request
request.send()
if (request.status >= 200 && request.status < 400) {
  console.log('length = ')
  console.log(result)
}