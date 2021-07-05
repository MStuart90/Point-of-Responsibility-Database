const { response } = require('express')
const express = require('express')
const router = express.Router()

router.post('/contribute', (request, response) =>{
    response.send('send')
})


module.exports = router