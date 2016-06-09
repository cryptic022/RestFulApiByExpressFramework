var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


router.route('/users')
   
   /**** User creation with post request ****/
   .post(function(req,res){
        
        var user = new User();
        user.name = req.body.name;

        user.save(function(err){
        	if(err) res.send(err);

        	res.send('User created');
        });
   })

   /**** get All Users *******/

   .get(function(req,res){
      
      User.find({},function(err,users){
           if(err) res.send(err);

           res.json(users);
      })

   });


   /***************Single User Routes **************************/
   /**** get Single User**********************/
router.route('/users/:user_id')

      .get(function(req,res){
          
          var userId = req.params.user_id;

          User.findById(userId,function(err,user){
          	if(err) res.send('User doesnt exists with this id');

          	res.json(user);
          });
      	   
      	})

  /************* update single user with userId*****************/
      .put(function(req,res){

      	  var userId = req.params.user_id;

          User.findByIdAndUpdate(userId,{name:req.body.name},function(err,user){
          	if(err) res.send(err);

          	res.send('User updated');
          	
          });
      })
   
   /********************delete user with userId *********************/
      .delete(function(req,res){

      	  var userId = req.params.user_id;

          User.findByIdAndRemove(userId,function(err){
          	if(err) res.send(err);

          	res.send('User deleted');
          	
          });
      });

module.exports = router;