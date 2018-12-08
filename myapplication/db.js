// const mysql = require('mysql');


// const connection = mysql.createConnection({
// 	host: 'lightos.beget.tech',
// 	user:'lightos_timur',
// 	password:'3Mduhcx*',
// 	database:'lightos_timur'
// });

// connection.connect(function(error){
// 	if(error) throw error;
// });

// module.exports = connection;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'lightos.beget.tech',
  user     : 'lightos_timur',
  password : '3Mduhcx*',
  database : 'lightos_timur'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT Price FROM announcement ORDER BY idAnnouncement DESC',function(error,results,fields){
	if(error)throw error; 
	console.log('The sss: ', results[0].Price);
});
 
connection.end();