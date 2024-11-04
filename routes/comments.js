const express = require("express");
const router = express.Router();

const Comments = require("../data/comment");
const error = require("../utilities/error");




//Get/Comments

router
  .route("/")
  .get((req, res) => {
   res.json(Comments)
  });



router
 .route("/:id")
 .get((req, res, next) => {
    const comment = Comments.find((c) => c.id == req.params.id);
   if (comment) res.json(comment);
   else next();
 })

 .post((req, res, next) => {

    const {userId, postId,content, createdAt,updatedAt,user,likes,replies} = req.body;
   
    if (!userId) {
        return res.status(400).json({ error: "UserId is required." });
    }
       
       //create new post
        const newComment ={
            id: Comments.length + 1,
            userId,
            postId,
            content: content || "",
            createdAt: createdAt || [],
            updatedAt: updatedAt || 0,
            user: user || 0, //default to 0 if not provides
            likes: likes || null ,//default to null if not provided
            replies: replies || []
            
        };


        Comments.push(newComment);
        res.status(201).json(newComment);
         
 })
 
 .patch((req, res, next) => {
    const comment = Comments.find((c, i) => {
        if (c.id == req.params.id){
            for (const key in req.body){
                Comments[i][key] = req.body[key];
            }
            return true;
        }
    });
    if(comment) res.json(comment);
    else next();
 })

 .delete((req, res, next) => {
    const comment = Comments.find((c, i) => {
      if (c.id == req.params.id) {
        Comments.splice(i, 1);
        return true;
      }
    });

    if (comment) res.json(comment);
    else next();
  });


    // filter posts by content 
router
.route("/userContent")
.get((req, res) => {

   const {content} = req.query;

   if (!content){
       return res.status(400).json({message: "content query parameter is required"})
   }

   const regex = new RegExp(content, 'i');
   const filteredComments= Comments.filter(comment => regex.test(comment.content));
   
   if (filteredComments.length > 0)
   res.json(filteredComments);
   else next();


   
 });










//export the router
module.exports = router;