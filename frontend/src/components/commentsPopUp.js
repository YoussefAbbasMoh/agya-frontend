import React, { useState, useEffect, useContext, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { GlobalContext } from "../context/GlobelContext.js";
import { Toast } from "primereact/toast";
const CommentPopup = ({ isOpen, onClose, articleID }) => {
  const [comments, setComments] = useState([]);
  const [replys, setReplys] = useState([]);
  const toastBC = useRef(null);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const { setIsAuthUser, isAuthUser } = useContext(GlobalContext);
  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const now = new Date();
    const timeDiff = now - date;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    let dayIndicator;
    if (daysDiff === 0) {
      dayIndicator = "Today";
    } else if (daysDiff === 1) {
      dayIndicator = "1d";
    } else {
      dayIndicator = `${daysDiff}d`;
    }
    return `${dayIndicator} • ${formattedTime}`;
  }
  useEffect(() => {
    setIsAuthUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [setIsAuthUser]);
  useEffect(() => {
    const fetchData = async () => {
      if (isOpen && articleID) {
        try {
          // Fetch comments
          const commentsRes = await fetch(
            `https://agyademo.uber.space/api/comments/article/${articleID}`
          );
          const commentsData = await commentsRes.json();
          setComments(commentsData);

          // Fetch replies
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [isOpen, articleID]);
  const handleCommentSubmit = async () => {
    if (!isAuthUser) {
      return toastBC.current.show({
        severity: "error",
        summary: "Please login",
        sticky: true,
      });
    }
    if (newComment.trim() === "") {
      return toastBC.current.show({
        severity: "error",
        summary: "Comment cannot be empty",
        sticky: true,
      });
    }
    try {
      const response = await fetch(
        `https://agyademo.uber.space/api/comments/article/${articleID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newComment,
            articleId: articleID,
            userId: isAuthUser.id,
          }),
        }
      );
      console.log("adding comment")
      const newCommentData = await response.json();
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");
      toastBC.current.show({
        severity: "success",
        summary: "Comment added successfully",
        life: 3000,
      });
    } catch (error) {
      console.error("Error adding comment:", error);
      toastBC.current.show({
        severity: "error",
        summary: "Error adding comment",
        life: 3000,
      });
    }
  };
  const handleReplySubmit = async (commentId) => {
    if (!isAuthUser) {
      return toastBC.current.show({
        severity: "error",
        summary: "Please login",
        sticky: true,
      });
    }
    if (replyText.trim() === "") {
      return toastBC.current.show({
        severity: "error",
        summary: "Reply cannot be empty",
        sticky: true,
      });
    }
    try {
      const response = await fetch(
        `https://agyademo.uber.space/api/replies/${commentId}/reply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: replyText,
            userId: isAuthUser.id,
          }),
        }
      );
      const newReplyData = await response.json();

      setComments(
        comments.map((comment) => {
          if (comment._id === commentId) {
            return { ...comment, replies: [...comment.replies, newReplyData] };
          }
          return comment;
        })
      );

      setReplyText("");
      setReplyingTo(null);
      toastBC.current.show({
        severity: "success",
        summary: "Reply added successfully",
        life: 3000,
      });
    } catch (error) {
      console.error("Error adding reply:", error);
      toastBC.current.show({
        severity: "error",
        summary: "Error adding reply",
        life: 3000,
      });
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-h-[600px] w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg relative overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h3 className="text-lg font-semibold mb-4">Comments</h3>
        <div className="space-y-6">
          {comments.map((comment) => {
            const commentReplies = replys.map((e) => e);
            return (
              <div key={comment._id} className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={
                        comment.userImage === "/uploads/default.png" ||
                        comment.userImage === undefined
                          ? "/User-60.png"
                          : comment.userImage
                      }
                      alt="Profile"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{comment.userName}</p>

                      <p className="text-gray-700">{comment.content}</p>

                      <p className="text-gray-500 text-sm mt-1">
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>

                    <button
                      className="bg-main text-white text-sm px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                      onClick={() =>
                        setReplyingTo(
                          comment._id === replyingTo ? null : comment._id
                        )
                      }
                    >
                      Reply
                    </button>
                  </div>
                  {/* Display replies */}
                  <div>
                    {comment.replies.map((reply) => (
                      <div
                        key={reply._id}
                        className="flex items-start space-x-4 ml-4 bg-gray-50 p-3 rounded-lg"
                      >
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src={
                            comment.userImage === "/uploads/default.png" ||
                            comment.userImage === undefined
                              ? "/User-60.png"
                              : reply.userImage
                          }
                          alt="Profile"
                        />

                        <div className="flex-1">
                          <p className="font-semibold">{reply.userName}</p>

                          <p className="text-gray-700">{reply.content}</p>

                          <p className="text-gray-500 text-sm mt-1">
                            {formatDate(reply.createdAt)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* {commentReplies && (
                        <div className="ml-14 mt-4 space-y-4">
                          {commentReplies.map((reply) => (
                            <div
                              key={reply._id}
                              className="flex items-start space-x-4 bg-gray-50 p-3 rounded-lg"
                            >
                              <img
                                className="w-8 h-8 rounded-full object-cover"
                                src={
                                  comment.userImage ===
                                    "/uploads/default.png" ||
                                  comment.userImage === undefined
                                    ? "/User-60.png"
                                    : reply.userImage
                                }
                                alt="Profile"
                              />

                              <div className="flex-1">
                                <p className="font-semibold">
                                  {reply.userName}
                                </p>

                                <p className="text-gray-700">{reply.content}</p>

                                <p className="text-gray-500 text-sm mt-1">
                                  {formatDate(reply.createdAt)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply input */}

                  {replyingTo === comment._id && (
                    <div className="relative flex items-center gap-2 ml-14 mt-4">
                      <textarea
                        className="w-full rounded-lg p-3 text-main bg-[#E4F5E4] pr-16 resize-none focus:outline-none min-h-[50px]"
                        placeholder="Write your reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      ></textarea>

                      <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-main hover:text-opacity-80 transition-colors"
                        onClick={() => handleReplySubmit(comment._id)}
                      >
                        <IoSend size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* New comment input */}
        <div className="relative mt-6">
          <textarea
            className="w-full rounded-lg p-3 text-main bg-[#E4F5E4] pr-16 resize-none focus:outline-none min-h-[60px]"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-main hover:text-opacity-80 transition-colors"
            onClick={handleCommentSubmit}
          >
            <IoSend size={24} />
          </button>
        </div>
      </div>
      <Toast ref={toastBC} position="top-right" />
    </div>
  );
};
export default CommentPopup;
