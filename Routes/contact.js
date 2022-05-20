
const express = require("express");
const router= express.Router()
const Contact=require("../model/Contact")
router.get("/test",(req,res)=>{
    res.send("hello")
})
//  post:add
// path:http://localhost:1100/api/contacts/add
// req.body
router.post("/add",async(req,res)=>{
    const {name,email,age}=req.body
    // handling errors
    if(!name.length || !email.length){
        res.status(400).send({msg:"name w email lazem tzidhom"})
    }
    
    // handling error email is unique
    const contact=await Contact.findOne({email:email})
    if (contact){
        res.status(400).send({msg:"email mawjoud"})
    }
    try {
        const newcontact=new Contact({name,email,age})
               await newcontact.save()
        res.status(200).send({msg:"contact tzed",newcontact})
    } catch (error) {
        res.status(400).send({msg:"matzedech",error})
    }
})
/**
 *  post:get all
    path:http://localhost:1100/api/contacts/
    req.body
 */
router.get("/",async(req,res)=>{
    try {
        let contactList=await Contact.find()
        res.status(200).send({msg:"hedhy lista mt3na",contactList})
        
    } catch (error) {
        res.status(400).send({msg:"ma3andkch lista",error})
    }
})
router.get("/:_id",async(req,res)=>{
    try {
        const {_id}=req.params;
        let contactToGet=await Contact.findOne({_id})
        res.status(200).send({masg:"hedha contact mte3na",contactToGet})
    } catch (error) {
        res.status(400).send({msg:"ma3andkch contact",error})
    }
})
router.put("/edit/:_id",async(req,res)=>{
    try {
        let {_id}=req.params
         let {name,email,age}=req.body
         await Contact.updateOne({_id},{$set:{...req.body}})
         res.status(200).send({masg:"raho sar update"})

    } catch (error) {
        res.status(400).send({msg:"mafamch update",error})
    }
})
router.delete("/delete/:_id",async (req,res)=>{
    try {
        let {_id}=req.params;
        await Contact.deleteOne({_id})
        res.status(200).send({msg:"raho tefsa5"})
    } catch (error) {
        res.status(400).send({msg:"matefsa5ech",error})
    }
})

module.exports=router
