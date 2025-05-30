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
    title : "Software Engineer",
    description: "Developed scalable backend systems using Node.js and MongoDB.",
    project: 15,
    years: 5,
    contact: 9876543210
},
{
    title: "Data Analyst",
    description: "Analyzed large datasets to drive business insights using Python and SQL.",
    project: 9,
    years: 3,
    contact: 9123456789
},
{
    title: "UI/UX Designer",
    description: "Designed user-centric interfaces for mobile and web applications.",
    project: 12,
    years: 4,
    contact: 9988776655
},
{
    title: "DevOps Engineer",
    description: "Implemented CI/CD pipelines and managed cloud infrastructure on AWS.",
    project: 10,
    years: 6,
    contact: 9012345678
}

]
Post.insertMany(posts);
