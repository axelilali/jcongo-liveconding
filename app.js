const express = require('express')
const connection = require('./config/jcongoDb');

const app = express()

app.set('view engine','ejs')
app.use(express.static('./public'))

app.get('/',(req,res)=>[
  res.render('accueil',
  {
    title:'Accueil'
  })
])

app.listen(4000,()=>{
  console.log('server running on port 4000')
})
