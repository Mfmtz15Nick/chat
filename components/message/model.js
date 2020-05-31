let mongoose = require('mongoose')

let Schema = mongoose.Schema

let mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type:String,
        required: true
    },
    date: Date
})

let model = mongoose.model('Message', mySchema)

module.exports = model