let db = require('mongoose')
let credentials = require('./credentials')

db.Promise = global.Promise
let connect = async () => {
    // Conexion a bd
    await db.connect(credentials.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('[db] Conectada con exito');
}

module.exports = {connect}

