const mongoose = require("mongoose")


const AuthorSchema = new mongoose.Schema({

    authorID : {type:String ,required:true , unique :true},
    name : String , 
    birthYear : Number , 
    nationallity : String , 
    bio : String

})

module.exports = mongoose.model("Author", AuthorSchema);
