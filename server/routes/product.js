const router = require('express').Router();
const ctrls=require('../controllers/product')
const{verifyAccessToken, isAdmin}=require('../middlewares/verifyToken')

router.post('/',[verifyAccessToken,isAdmin],ctrls.createProduct)

router.get('/', ctrls.getProducts)

module.exports=router