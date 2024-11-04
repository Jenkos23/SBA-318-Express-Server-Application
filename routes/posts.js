const express = require("express");
const router = express.Router();

const posts = require("../data/posts");
const error = require("../utilities/error");

router
 .route("/")
 .get((req, res) => {
    res.json(posts);

 });



router
 .route("/:id")
 .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);
   if (post) res.json(post);
   else next();
 })

 .post((req, res, next) => {
    const {title, body, tags, reactions, views ,userId} = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required." });
    }
       
       //create new post
        const newPost ={
            id: posts.length + 1,
            title,
            body: body || "",
            tags: tags || [],
            reactions: reactions || 0,
            views: views || 0, //default to 0 if not provides
            userId: userId || null //default to null if not provided
            
        };


        posts.push(newPost);
        res.status(201).json(newPost);
         
 })
 
 .patch((req, res, next) => {
    const post = posts.find((p, i) => {
        if (p.id == req.params.id){
            for (const key in req.body){
                posts[i][key] = req.body[key];
            }
            return true;
        }
    });
    if(post) res.json(post);
    else next();
 })

 .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

   // filter posts by title 
router
 .route("/filter")
 .get((req, res) => {

    const {title} = req.query;

    if (!title){
        return res.status(400).json({message: "Title query parameter is required"})
    }

    const regex = new RegExp(title, 'i');
    const filteredPosts = posts.filter(post => regex.test(post.title));
    
    if (filteredPosts.length > 0)
    res.json(filteredPosts);
    else next();


    
  });







//export the router
module.exports = router;