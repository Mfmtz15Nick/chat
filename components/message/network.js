let express = require('express')
let response = require('../../network/response')
let controller = require('./controller')


let router = express.Router()

router.get('/',(req, res) =>{

    controller.getMessage()
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })

})
router.post('/',(req, res) =>{
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage,201)
    })
    .catch(e => {
        response.error(req,res,'Error simulado.',400,'Error en network.')
    })

})



module.exports = router