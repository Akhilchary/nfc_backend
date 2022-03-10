const {Router}=require('express');
const servicesController=require('../controller/servicesController');

const router=Router();

router.post('/',servicesController.serv_post);
router.get('/',servicesController.serv_get);

module.exports=router;