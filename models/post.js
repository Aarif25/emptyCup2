const  mongoose  = require("mongoose");



const postSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    project : {
        type : Number
    },
    years : {
        type : Number
    },
    price : {
        type : Number
    },
    contact :{
        type : Number
    }

})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;