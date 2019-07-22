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
        
        SvgDrawings.create({
            name: req.body.name,
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
            err ? console.log(err) : res.redirect('/svgDrawing/')
        })
    },
    edit: (req,res) => {
        SvgDrawings.findById(req.params.id, (err, shape) => {
            if(err) {
                res.send(err);
            } else {
                res.render('edit.ejs', {
                    shape: shape
                })
            }
        })
    },
    update: (req,res) => {
        if(req.body.isCircle==='on'){
                req.body.isCircle = true
            } else {
                req.body.isCircle = false
            }
        SvgDrawings.findByIdAndUpdate(req.params.id,req.body,(err,response)=>{
            console.log('update route')
            if(err){
                res.send(err);
            } else {
                console.log(response, '<-- put route');
                res.redirect('/svgDrawing/')
            }
        })
    }
}

module.exports = shapeController;