const {
    response
} = require('express')
const express = require('express')
const router = express.Router()
const contributeTemplateCopy = require('../models/contributemodels')

router.post('/contribute', (request, response) => {
    const contributedTemplate = new contributeTemplateCopy({
        companyName: request.body.companyName,
        link: request.body.link,
        reportEmailWebform: request.body.reportEmailWebform,
        termsOfServiceIpPolicy: request.body.termsOfServiceIpPolicy,
        comments: request.body.comments
    })
    contributedTemplate.save()
        .then(data => {
            respons.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})
// http://localhost:4000/app/contribute
router.get('/contribute', async (request, response) => {

    console.log('hello');
    //  response.send('hi')

    const contributedTemplate = await contributeTemplateCopy.find();
    response.send(contributedTemplate);
    //     companyName:request.body.companyName,
    //     link:request.body.link,
    //     reportEmailWebform:request.body.reportEmailWebform,
    //     termsOfServiceIpPolicy:request.body.termsOfServiceIpPolicy,
    //     comments:request.body.comments
    // })

})
router.get('/contribute/:cn', async (request, response) => {
    const cn = request.params.cn;

    console.log('hello');
    //  response.send('hi')

    const contributedTemplate = await contributeTemplateCopy.find({
        companyName: cn
    });
    response.send(contributedTemplate);
    //     companyName:request.body.companyName,
    //     link:request.body.link,
    //     reportEmailWebform:request.body.reportEmailWebform,
    //     termsOfServiceIpPolicy:request.body.termsOfServiceIpPolicy,
    //     comments:request.body.comments
    // })

})
/*
router.get("/contribute", (req, res) => {
    pordbtable.pordbtables.find({}, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});
router.get("/contribute/:cn", (req, res) => {
    const cn = req.params.cn;
    pordbtable.pordbtables.find({
        companyName: cn
    }, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
})
*/
module.exports = router