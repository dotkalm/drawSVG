const SvgDrawings = require('../models/svgDrawings');
const mongoose = require('mongoose')

const shapeController = {
    index:(req,res)=>{
        SvgDrawings.find({},(err, allShapes)=>{
            if(err) {
                res.send(err)
            } else {
                res.render('index.ejs', {
                    allShapes: allShapes
                })
            }
        })
    }
}

module.exports = shapeController;