const { response } = require('express');
const express = require('express');
const router = express.Router();
const companyTemplate = require('../models/companymodels');

router.post('/companies', (request, response) => {
    const template = new companyTemplate({
        companyName: request.body.companyName,
        link: request.body.link,
        reportEmailWebform: request.body.reportEmailWebform,
        termsOfServiceIpPolicy: request.body.termsOfServiceIpPolicy,
        comments: request.body.comments
    });
    template
        .save()
        .then((data) => {
            response.json(data);
        })
        .catch((error) => {
            response.json(error);
        });
});

// http://localhost:4000/api/companies
router.get('/companies', async (request, response) => {
    const template = await companyTemplate.find();
    response.send(template);
});

// http://localhost:4000/api/companies
router.get('/companies/:companyName', async (request, response) => {
    const { companyName } = request.params;

    const template = await companyTemplate.find({
        companyName: { $regex: companyName, $options: 'i' }
    });
    response.send(template);
});
module.exports = router;
