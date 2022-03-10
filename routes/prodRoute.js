const {Router}=require('express');
const prodController=require('../controller/prodController')

const router=Router();

router.post('/',prodController.prod_post);
router.get('/',prodController.prod_get);

module.exports=router;

