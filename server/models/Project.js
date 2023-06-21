const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    statue: {
        type: Number,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
})

module.exports = mongoose.model('Project', projectSchema);