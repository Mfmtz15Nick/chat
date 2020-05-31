let Model = require('./model')

let addUser = (user) => {
    let myUser = new Model(user)
    return myUser.save()
}
let getUsers = async () => {
    let users = await Model.find()
    return users
}


module.exports = {
    add: addUser,
    list: getUsers
}