
let store = require('./store')
let addUser = (name) => {
    if (!name) {
        return Promise.reject('Invalid name')
    }
    let user = {
        name
    }
    return store.add(user)
}

let getUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addUser,
    getUsers
}