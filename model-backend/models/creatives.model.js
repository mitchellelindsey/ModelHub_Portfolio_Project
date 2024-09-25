const mongoose = require('mongoose')

const Model = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    creativeCategory: {
        type: String,
        required: true
    },
    reprensentedByAgency: {
        type: Boolean,
        required: true
    },
    profileOverview: {
        type: String,
        required: true
    },
    stats: [{
        name: String,
        value: Number
    }],
    contact: [
        {
            name: String,
            value: String
        }
    ],
    socials: [
        {
            name: String,
            value: String
        }
    ],
    portfolio: {
        type: String,
        required: true
    },
    workExp: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const CreativeModel = mongoose.model('CreativeModel', Model)

module.exports = CreativeModel