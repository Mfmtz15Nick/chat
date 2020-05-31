let Model = require('./model')

let addMessage = (message) => {
    //  list.push(message)
    let myMessage = new Model(message)
    myMessage.save()
}

let getMessage = async (filterUser) => {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterUser) {
            filter = { user: filterUser }
        }
        Model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if (error) {
                console.log(error);
                reject(error)
                return false
            }
            resolve(populated)
        })
    })
}
let updateText = async (id, message) => {

    let foundMessage = await Model.findOne({
        _id: id,
    })
    foundMessage.message = message
    return await foundMessage.save()
     
}
let removeMessage = async (id) => {

    return Model.deleteOne({
        _id : id
    })

     
}



module.exports = {
    add: addMessage,
    list: getMessage,
    updateText,
    removeMessage
}