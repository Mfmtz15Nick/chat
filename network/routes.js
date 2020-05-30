let express = require('express')
let message = require('../components/message/network')

let routes = (server) => {
    server.use('/message', message)
}

module.exports = routes