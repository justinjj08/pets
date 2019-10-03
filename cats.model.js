const mongoose = require('mongoose');
const schema = mongoose.Schema;


const catSchema = new schema({
    name:String,
    email:String,
    location:String
});
module.exports= mongoose.model('catSchema',catSchema);