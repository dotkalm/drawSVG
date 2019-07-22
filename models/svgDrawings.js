const mongoose = require('mongoose');

const shapeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    xPosition: Number,
    yPosition: Number,
    isCircle: Boolean,
    radius: Number,
    shapeWidth: Number,
    shapeHeight: Number,
    strokeColor: String,
    shapeFill: String,
    strokeWidth: Number,
});

const Shapes = mongoose.model('Shape', shapeSchema);

module.exports = Shapes;