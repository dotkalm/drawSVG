const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/svgDrawing'
mongoose.connect(connectionString,{useNewUrlParser:true,useCreateIndex:true});
mongoose.connection.on('connected', () => {
    console.log(`mongoose ${connectionString}`)})
mongoose.connection.on('disconnected', () => {
    console.log(`mongoose ${connectionString}`)})
mongoose.connection.on('', (err) => {
    console.log(`mongoose ${err}`)
})