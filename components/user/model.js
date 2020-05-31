let mongoose = require('mongoose')

let Schema = mongoose.Schema

let mySchema = new Schema({
    name: String
})

let model = mongoose.model('User', mySchema)

module.exports = model