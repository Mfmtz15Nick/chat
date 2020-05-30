let express = require('express')
let response = require('../../network/response')
let controller = require('./controller')


let router = express.Router()

router.get('/', (req, res) =>{
    let filterMessage = req.query.user || null
    controller.getMessage(filterMessage)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })

})
router.post('/', (req, res) =>{
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage,201)
    })
    .catch(e => {
        response.error(req,res,'Error simulado.',400,'Error en network.')
    })

})
router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
     
})
router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then((data) => {
        response.success(req, res, `Usuario ${req.params.id} eliminado `, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
     
})



module.exports = router