import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: false,
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: false,
  }, // Added for articles
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userImage: { type: String },
  userName: { type: String },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
