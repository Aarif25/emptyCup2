const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require ("path");
const Post = require("./models/post.js");



app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));


main()
.then(()=>{
console.log("connection succesfull");
})
.catch(err => console.log(err))


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/emptycup');
};


app.get("/posts", async(req, res)=>{
   
    let posts = await Post.find();
    console.log(posts);
     res.render("home.ejs",{posts});

})


app.get("/",(req,res) =>{
    res.send("root is working");
})
app.listen(8080, ()=>{
    console.log("server is running ");
});
