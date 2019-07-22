const mongoose = require('mongoose');

const shapeSchema = new mongoose.Schema({
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