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
    },
    new: (req,res) => {
        res.render('new.ejs');
    },
    create: (req,res) => {
        if (req.body.isCircle === 'on') {
            req.body.isCircle = true;
        } else {
            req.body.isCircle = false;
        } 
        console.log(req.body)
        SvgDrawings.create({
            xPosition: req.body.xPosition,
            yPosition: req.body.yPosition,
            isCircle: req.body.isCircle,
            radius:  req.body.radius,
            shapeWidth: req.body.shapeWidth,
            shapeHeight: req.body.shapeHeight,
            strokeColor: req.body.strokeColor,
            shapeFill: req.body.shapeFill,
            strokeWidth: req.body.strokeWidth
        },
        (err, createdShape) => {
            err ? console.log(err) : res.redirect('/shapes')
        })
    }
}

module.exports = shapeController;