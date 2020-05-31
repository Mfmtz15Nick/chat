let express = require('express')
let message = require('../components/message/network')
let user = require('../components/user/network')

let routes = (server) => {
    server.use('/message', message)
    server.use('/user',user)
}

module.exports = routes