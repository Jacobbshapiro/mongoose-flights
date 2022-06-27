const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema ({
    date: Date,
    arrival: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    }
})

const flightSchema = mongoose.Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 2,
    },
    
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    
    departs: {
        type: Date
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)