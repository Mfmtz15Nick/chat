
let db = require('mongoose')
let credentials = require('./credentials')

let Model = require('./model')

db.Promise = global.Promise


// Conexion a bd
db.connect(credentials.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('[db] Conectada con exito');



let addMessage = (message) => {
    //  list.push(message)
    let myMessage = new Model(message)
    myMessage.save()
}

let getMessage = async () => {
    let messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessage
}