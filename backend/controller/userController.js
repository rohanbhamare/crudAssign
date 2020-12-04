const express = require("express");
const app = express();
const router = express.Router();
const Users = require("../database/models/user");
const ObjectId = require("mongoose").Types.ObjectId; 

router.get("/", (req, res) =>{
    Users.find((err, docs)=>{
        if(!err)res.send(docs);
        else console.log("Unable to retrieve users list...");
    })
})

router.post("/",(req,res)=>{
    let userObj = new Users({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    });

    userObj.save((err, doc)=>{
        if(!err)res.send(doc);
        else console.log("Error while adding new user...");
    })
})

router.get("/:id", (req, res) =>{
    if(!ObjectId.isValid(req.params.id)) return res.status(404).send(`No record present for ${re.params.id}`);

    Users.findById(req.params.id,(err, docs)=>{
        if(!err)res.send(docs);
        else console.log("Unable to retrieve users list...");
    })
})

router.put("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id)) return res.status(404).send(`No record present for ${re.params.id}`);

    let userObj = {
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    }
    Users.findByIdAndUpdate(req.params.id,{$set:userObj},{new:true},(err,doc)=>{
        if(!err)res.send(doc);
        else console.log("Error while updating the user details...")
    });
})

router.delete("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id)) return res.status(404).send(`No record present for ${re.params.id}`);

    Users.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err)res.send(doc);
        else console.log("Error while deleting the user data");
    })
})


module.exports = router;