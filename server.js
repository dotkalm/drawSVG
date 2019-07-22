const express = require('express');
const methodOverride = require('method-override')
const app = express();
const shapeRoutes = require('./routes/shapeRoutes')

require('./db/db')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/shapes', shapeRoutes);
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log('my server is listening for client requests on port 3000')
})