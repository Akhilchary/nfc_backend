const {Router}=require('express');
const custController=require('../controller/custController')

const router=Router();

router.post('/',custController.cust_post);
router.get('/',custController.cust_get);

module.exports=router;

