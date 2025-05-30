const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require ("path");
const Post = require("./models/post.js");



app.set("views", path.join(__dirname,"views"));//for ejs
app.set("view engine", "ejs");//for ejs
app.use(express.static(path.join(__dirname,"public")));//for css
app.use(express.urlencoded({extended : true}));// to parse the data of the post request


main()
.then(()=>{
console.log("connection succesfull");
})
.catch(err => console.log(err))


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/emptycup');
};


// let sample = new Post ({
//     title :"a",
//     description : "sgh",
//     projects : 4,
//     years : 2,
//     price : 45,
//     contact : 4587
// })
// sample.save().then((res)=>{
//     console.log(res);
// }).catch(err => console.log(err));

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
