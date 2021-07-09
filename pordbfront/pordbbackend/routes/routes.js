const { response } = require('express')
const express = require('express')
const router = express.Router()
const contributeTemplateCopy = require('../models/contributemodels')

router.post('/contribute', (request, response) =>{
    const contributedTemplate = new contributeTemplateCopy({
        companyName:request.body.companyName,
        link:request.body.link,
        reportEmailWebform:request.body.reportEmailWebform,
        termsOfServiceIpPolicy:request.body.termsOfServiceIpPolicy,
        comments:request.body.comments
    })
    contributedTemplate.save()
    .then(data =>{
        respons.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router