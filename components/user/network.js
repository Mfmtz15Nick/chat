let express = require('express')
let response = require('../../network/response')
let controller = require('./controller')
let router = express.Router()

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, data, 201)
    })
    .catch(e => {
        response.error(req, res, 'Internal Error', 500, e)
    })
})
router.get('/', (req, res) => {
    controller.getUsers()
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Internal Error', 500, e)
    })
})


module.exports = router