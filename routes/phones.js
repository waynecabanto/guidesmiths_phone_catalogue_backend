const express = require('express');
const router = express.Router();
const Phone = require('../models/Phones');

//ROUTES

//GET
//this gets all the items in 'phones' collections
router.get('/', async (req,res) => {
    try{
        const phones = await Phone.find();
        res.json(phones);
    }catch(err){
        res.json({message: err});
    }
});

//get specific item
/*router.get('/:phoneId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});*/


//POST
//this saves the data(request) that comes from frontend
router.post('/', async (req, res) => {
    const phone = new Phone({
        id: req.body.id,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        color: req.body.color,
        price:req.body.price,
        imageFileName: req.body.imageFileName,
        screen: req.body.screen,
        processor: req.body.processor,
        ram: req.body.ram
    });

    try{
        const savedPost = await phone.save(); //saves to 'phones' collection
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//DELETE
router.delete('/:phoneId', async (req,res) => {
    try{
        const removedPhone = await Phone.remove({id: req.params.phoneId});
        res.json(removedPhone);
    }catch(err){
        res.json({ message : err });
    }
    
});

//UPDATE
router.patch('/:phoneId', async (req,res) => {
    try{
        const updatedPhone = await Phone.updateOne({id: req.params.postId},{
            $set: { name: req.body.name}
        });
        res.json(updatedPhone);
    }catch(err){
        res.json({message: err});
    }
});



module.exports = router;