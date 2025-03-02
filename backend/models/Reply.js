import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userImage: { type: String, required: true },
  userName: { type: String, required: true }, 
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Reply = mongoose.model("Reply", ReplySchema);

export default Reply;
