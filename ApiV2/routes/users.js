var express = require('express');
var router = express.Router();

function HandleSqlRequest(sql, req, res, next) {
	console.log('Sql = ' + sql)
	res.locals.connection.query(sql, function (error, results, fields) {
	  	if (error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
	});
}

/* GET users listing. */
router.get('/', function(req, res, next) {
	if (req.query.username) 
	    HandleSqlRequest('SELECT * from User where UserName = ' + res.locals.connection.escape(req.query.username), req, res, next)
	else
	    HandleSqlRequest('SELECT * from User', req, res, next)
});

/* GET user by id. */
router.get('/:userid', function(req, res, next) {
	var userid = req.params.userid;
	HandleSqlRequest('SELECT * from User where UserId = ' + res.locals.connection.escape(userid), req, res, next)
});

module.exports = router;
