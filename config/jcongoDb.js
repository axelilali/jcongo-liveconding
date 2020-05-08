const mysql = require('mysql')

const con = mysql.createConnection({
  host:'localhost',
  user:'admin',
  password:'admin',
  database:'jcongo'
})

con.connect((err)=>{
   if(err){console.log(err.message)}
   console.log('Connected to the database');
 })

 module.exports = con
