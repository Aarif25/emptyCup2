const mongoose = require ("mongoose");
const Post = require ("./models/post.js");


main()
.then(()=>{
console.log("connection succesfull");
})
.catch(err => console.log(err))


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/emptycup');
};
let posts = [
    {
        title : "first",
        description : "a",
        project : 10,
        years : 4,
        contact : 6260696370

    },
    {
        title : "second",
        description : "b",
        project : 55,
        years : 3,
        contact : 626069656
    }
]
Post.insertMany(posts);
