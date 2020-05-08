const mysql = require('mysql')

const connection = mysql.createConnection({
  host:'localhost',
  user:'admin',
  password:'admin',
  database:'jcongo'
})

connection.connect((err)=>{
   if(err){console.log(err.message)}
   console.log('Connected to the database');
 })

 module.exports = connection
