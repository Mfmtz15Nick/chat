
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

let getMessage = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}
let updateMessage = async (id, message) => {
    return new Promise( async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data')
            return false
            
        }
        let result = await store.updateText(id, message)
        resolve(result)
    })
}

let deleteMessage = async (id) => {
    return new Promise( async (resolve, reject) => {
        if (!id) {
            reject('Id invalido')
            return false
        }

        store.removeMessage(id)
        .then(() => {
            resolve()
        })
        .catch( e => {
            reject(e)
        })

    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}