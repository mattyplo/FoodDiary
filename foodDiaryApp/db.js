var mysql = require('mysql');

/*
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Masmatt#7',
  database: 'foodDiary'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...');
});
*/

var state = {
  pool: null
}

exports.connect = function(done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Masmatt#7',
    database: 'foodDiary'
  })
  
  done()
}

exports.get = function() {
  return state.pool
}