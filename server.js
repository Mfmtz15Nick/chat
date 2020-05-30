let express = require('express')
let bodyParser = require('body-parser')

let db = require('./db')

db.connect()


let router = require('./network/routes')

var app = express()
app.use(bodyParser.json())
//app.use(router)

router(app)



app.listen(3000)
console.log('La aplicación está escuchando en http://localhost:3000')
