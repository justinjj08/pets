const MongoClient = require('mongodb');
const mongoose = require('mongoose');
const catSchema = require('./cats.model');
const url = "mongodb://localhost:27017/mydb";
const {addValidate,editValidation} = require('./validate');
mongoose.connect(url);
mongoose.Promise = global.Promise;

const getAllCats = async(req,res)=>{
    try{
      const getcat = await catSchema.find({}).select({ "name": 1, "_id": 1});
      res.json(getcat);
    }catch(error){
      res.status(400).json({msg:"error"});
    }
}

const getSingleCat =async (req,res)=>{
  try{
    const singleCat = await catSchema.findOne({_id:req.params.id},(error,result)=>{
      if(error){
       res.status(400).json({msg:`no member  with the id ${req.params.id}`});
      }else{
         res.json(result);
      }
     });
  }catch(error){
    res.json(error);
  }
}
const addCat = async(req,res)=>{
    const newCat = new catSchema();
    newCat.name= req.body.name;
    newCat.email = req.body.email;
    newCat.location = req.body.location;
    try{
      const addingCat = await newCat.save((error,result)=>{
        if(error){
          res.status(400).json({msg:'please enter name and email and location'});
        }else{
          res.send(result);
        }
      })
    }catch(error){
      res.status(500).json({msg:error});
    }
}
const editCat = async (req,res)=>{
  try{
    const editingcat = await catSchema.findOneAndUpdate({_id:req.params.id },{$set:{name: req.body.name,email:req.body.email,location:req.body.location}},{upsert: true},(err,result)=> {
      console.log(result);
      if (err){
        res.status(400).json({msg:"Plese enter correct ID"});
      } else{
        res.json({msg:"deleted"})
      }
    });
  }catch(error){
    res.status(500).json({msg:error});
  }
}
const deleteCat = async(req,res)=>{
    try{
      const deleted = await catSchema.findOneAndRemove({_id:req.params.id },(err,result)=> {
        if (err){
          res.status(400).json({msg:"Plese enter correct ID"});
        } else{
          res.json({msg:"deleted"})
        }
      });
    }catch(error){
      res.status(500).json({msg:error});
    }
}
module.exports= {getAllCats,getSingleCat,addCat,editCat,deleteCat};