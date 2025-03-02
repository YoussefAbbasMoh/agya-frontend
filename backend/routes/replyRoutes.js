import express from "express";
import mongoose from "mongoose";
import Reply from "../models/Reply.js";
import Post from "../models/Post.js";
import Article from "../models/Article.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

const router = express.Router();

// Create a reply to a comment
router.post("/:id/reply", async (req, res) => {
  const { userId, content } = req.body; // Get userId and content from the request body
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.json({ success: false, message: "Comment not found" });
    }
    if(!content) {
      return res.json({
      success: false,
      message: "please fill content",
    });
    }
    const user = await User.findById(userId)
    const fullname = user.firstname + " " + user.lastname
    // Create and save the reply
    const newReply = new Reply({
      commentId: comment._id,
      userId,
      userImage : user.image,
      userName : fullname,
      content,
    });
    const savedReplay = await newReply.save();
    await Comment.findByIdAndUpdate(req.params.id, { $push: { replies: savedReplay._id } });  
    res.status(201).json(savedReplay);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all replies for a specific comment
router.get("/:id/replies", async (req, res) => {
  try{
    const replies = await Reply.find({commentId: req.params.id });
    res.status(200).json(replies);

  }catch (err){
    res.status(500).json({ error: err.message });
  }
});

// Get all replies for a specific post or articale
router.get("/replies/:id", async (req, res) => {
  try{
    // const post = await Post.find({_id: req.params.id });
    // const article = await Article.find({_id: req.params.id });
    const replies = await Reply.find({commentId: req.params.id });

    res.status(200).json(replies);
  }catch (err){
    res.status(500).json({ error: err.message });
  }
});


// Delete a reply
router.delete("/replies/:id", async (req, res) => {
  try {
    await Reply.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Reply deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
