const express = require('express')
const app = express()
const path = require('path')
const { create } = require('express-handlebars')
require('./Helper/mdb')()
const pupilsRouter = require('./routers/schoolboys')
const exhbs = create({
  extname: 'hbs',
  defaultLayout: 'layout',
  runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true
  }
})
app.engine('hbs', exhbs.engine)
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', pupilsRouter )



const port = normalizePort(process.env.port || 5000) 
const host = "localhost"
try{
  app.listen(port,host,()=>{
    console.log(`Server working on port ${port}`);
  })

}catch(error){
  console.log(error);
}

function normalizePort(val){
 const port = parseInt(val, 10) 
 if(isNaN(port)){
     return val
 }

 if (port>0){
    return val
 }

 return false 
}