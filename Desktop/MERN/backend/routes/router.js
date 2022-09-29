const express=require('express');
const router = express.Router();
const students=require("../models/studSchema");


//post API 
router.post("/addstud",async (req,res)=>{
    console.log(req.body);

    const {name,address,subject,mobile}=req.body;
    if(!name || !address || !subject || !mobile){
        res.status(422).json("please fill the Data");
    }
    try{
        const prestud=await students.findOne({mobile:mobile});
        if(prestud){
            res.status(422).json("This studenet Already Present")
        }else{
            const addstudent =new students({name,address,subject,mobile});
            await addstudent.save();
            res.status(201).json(addstudent);
        }
    }catch(err){
        res.status(422).json(err)
    }
});


//get API
router.get("/getstud",async(req,res)=>{
    try {
        const studdata = await students.find();
        res.status(201).json(studdata);
        console.log(studdata);
    } catch (error) {
        res.status(422).json(error);
    }
});

//get single student
router.get("/getstud/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const singleStud = await students.findById({_id:id});
        console.log(singleStud);
        res.status(201).json(singleStud)

    } catch (error) {
        res.status(422).json(error);
    }
});


// Delete Student
router.delete("/deletstud/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletestud = await students.findByIdAndDelete({_id:id})
        console.log(deletestud);
        res.status(201).json(deletestud);

    } catch (error) {
        res.status(422).json(error);
    }
})

// update student data

router.patch("/updatestud/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updatestud = await students.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updatestud);
        res.status(201).json(updatestud);
    } catch (error) {
        res.status(422).json(error);
    }
});
module.exports = router;
