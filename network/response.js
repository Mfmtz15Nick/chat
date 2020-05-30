exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body: message
    })
}

exports.error = (req, res, message, status, details) => {
    console.log('\x1b[31m [response error] \x1b[0m' + details)
    res.status(status || 500).send({
        error: message,
        body: ''
    })

}