
let store = require('./store')

let addMessage = (user, message) => {
    return new Promise((resolve, reject) =>{
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false
        }
        let fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

let getMessage = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessage
}