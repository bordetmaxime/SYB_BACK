const { User, restore } = require('../models');
const { userView} = require('../dataviews/userView');
const bcrypt = require('bcrypt');



const userController = {

  getUser : async (req,res,next) => {
   try{
const email = req.body.email;
const password = req.body.password;

const userSearch = await User.findOne({where : {user_email: email}})
const goodPassword = await bcrypt.compare(password, userSearch.user_password);

  if(goodPassword){
  res.json(userSearch)
}


else {
  res.status(404).send(`Cant find list with id ${userId}`);
}
} catch (err) {
next(err);
}},



      
    createOrModify: async (req, res, next) => {
        try {

          const hashPassword = await bcrypt.hash(req.body.password, 10);
             
        await User.create({
            user_firstname: req.body.firstname,
            user_lastname: req.body.lastname,
            user_email: req.body.email,
            user_password: hashPassword,
          });

          res.json("okey");

        } catch (err) {
            next(err);
          }
        }
    }
    
    

module.exports = userController;