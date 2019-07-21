const mongoose = require('mongoose');

const shapeSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    shapeFill: String,
    shapeX: Number,
    shapeY: Number,
    isCircle: Boolean,
    radius: Number,
    shapeWidth: Number,
    shapeHeight: Number
});

const Shapes = mongoose.model('Shape', shapeSchema);

module.exports = Shapes;