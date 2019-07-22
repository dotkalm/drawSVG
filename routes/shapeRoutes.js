const express = require('express');
const router = express.Router();
const shapeController = require('../controllers/shapeController')

router.get('/', shapeController.index);
router.get('/new', shapeController.new);
router.get('/:id/edit', shapeController.edit);
router.put('/:id', shapeController.update)
router.post('/', shapeController.create);

module.exports=router;