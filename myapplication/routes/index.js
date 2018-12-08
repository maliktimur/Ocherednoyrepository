var express = require('express');
var router = express.Router();
var connection = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
	connection.query('SELECT Price FROM announcement ORDER BY idAnnouncement DESC',function(error, results, fields){
		if(error) throw error;
		res.render('index',{
			results
		});
	});
  // res.render('index', { price: '6000' });
});

module.exports = router;
