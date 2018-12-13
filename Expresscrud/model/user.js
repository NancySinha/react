var mongoose = require('mongoose')
var mongoSchema = mongoose.Schema
var friends=new mongoSchema({
"name":String,
"location":String,
"year":Number
},
{
versionKey:false
}
);
module.exports=mongoose.model('friends',friends) 
 
