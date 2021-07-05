const mongoose = require('mongoose')

const contributeTemplate = new mongoose.Schema({
    companyName:{
        type:String,
        required: true
    },
    link:{
        type:String,
        required: true
    },
    reportEmailWebform:{
        type:String,
        required: true
    },
    termsOfServiceIpPolicy:{
        type:String,
        required: true
    },
    
    comments:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
    
})

module.exports = mongoose.model('pordbtable', contributeTemplate)