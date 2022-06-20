const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminmodel");
const generateToken = require('../utils/generateTokens');
const validateLoginForm = require("../validation/login");

const authAdmin = asyncHandler(async (req, res) => {



  const { email, password } = req.body;

  console.log("this is my form ", email, password);
  const credentials={
    email:"admin@gmail.com",
    password:123
   };
  console.log("this is my formmmm ", credentials.email, credentials.password);
//   const { errors, isValid } = validateLoginForm(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

const admin =  credentials.email ;
 
  console.log("hhhhhh",admin);
  if (credentials.email==  email && credentials.password== password) {
  
      res.json({
        _id: admin._id,
        name: admin.email,
        password: admin.password,
        token: generateToken(admin._id),
      });
     
}else{
    res.status(400)
    res.json("Invalid email or password")
    throw new Error("Invalid email or password")
}
});

module.exports = { authAdmin };