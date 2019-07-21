const express = require('express');

const app = express();
const shapeRoutes = require('./routes/shapeRoutes')

require('./db/db')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/shapes', shapeRoutes);

app.listen(3000, () => {
    console.log('my server is listening for client requests on port 3000')
})