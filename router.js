const express= require('express');
const {getAllCats,getSingleCat,addCat,editCat,deleteCat} = require('./controller');

const router = express.Router();

router.get('/cats',getAllCats);
router.get('/cat/:id',getSingleCat);

router.post('/cat',addCat);

router.put('/cat/:id',editCat);

router.delete('/cat/:id',deleteCat);

module.exports = router;