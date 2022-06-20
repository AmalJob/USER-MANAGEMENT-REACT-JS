const express=require('express')
const router=express.Router();
const {authAdmin}=require('../controllers/adminController');
const { getAllUsers,deleteUser,getuser,updateUser } = require('../controllers/userControllers');


router.route('/').get(getAllUsers);
router.route('/adminlogin').post(authAdmin);
router.route("/deleteuser").delete(deleteUser);
router.route("/edituser/:userId").get(getuser);
router.route("/edituser/:userId").patch(updateUser);   


module.exports=router;