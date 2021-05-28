const router = require('express').Router();
const postUserModel = require('../models/postModel');
router.get('/' , async (req , res) => {
    try {
        const getPosts = await postUserModel.find();
    return res.status(201).send({
        success : true,
        dataCount : getPosts.length,
        data: getPosts
       })
    } catch (error) {
        res.status(400).send({message : error})
    }
})


router.post('/' , async (req , res) => {

   
  try {
    const postSaved = await postUserModel.create(req.body);
    return res.status(201).send({
     success : true,
     data: postSaved
    })
  } catch (error) {
      res.status(400).send({message : error})
  }

    //alternative to it
   /*const posts = new postUserModel({
       name: req.body.name,
       email :req.body.email,
   }) 
   const postSaved = await posts.save();*/

  
})

module.exports = router;