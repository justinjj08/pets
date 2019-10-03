
const addValidate = (newCat,res) => {
    if(!newCat.name || !newCat.email || !newCat.location){
        return false; //res.status(400).json({msg:'please enter name and email and location'});
    }else{
        return true;
    }
    
}
const editValidation = (updatedCat,cat)=>{
    cat.name=updatedCat.name ? updatedCat.name : cat.name;
    cat.email=updatedCat.email ? updatedCat.email : cat.email;
    cat.location=updatedCat.location ? updatedCat.location : cat.location;
    
}


module.exports= {addValidate,editValidation};