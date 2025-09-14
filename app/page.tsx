"use client"; // ✅ 반드시 최상단에 넣기

import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([
      ...posts,
      { id: Date.now(), content: newPost, likes: 0, comments: [], commentText: "" }
    ]);
    setNewPost("");
  };

  const addComment = (postId) => {
    setPosts(prev =>
      prev.map(post => {
        if (post.id === postId && post.commentText.trim() !== "") {
          return {
            ...post,
            comments: [...post.comments, post.commentText],
            commentText: ""
          };
        }
        return post;
      })
    );
  };

  const likePost = (postId) => {
    setPosts(prev =>
      prev.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post)
    );
  };

  const handleCommentChange = (postId, value) => {
    setPosts(prev =>
      prev.map(post => post.id === postId ? { ...post, commentText: value } : post)
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>간단 게시판</h1>

      <input
        type="text"
        value={newPost}
        onChange={e => setNewPost(e.target.value)}
        placeholder="게시물 내용을 입력하세요"
      />
      <button onClick={addPost}>작성</button>

      <hr />

      {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <p>{post.content}</p>
          <button onClick={() => likePost(post.id)}>추천 {post.likes}</button>

          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              value={post.commentText}
              onChange={e => handleCommentChange(post.id, e.target.value)}
              placeholder="댓글 입력"
            />
            <button onClick={() => addComment(post.id)}>댓글 달기</button>
          </div>

          <div style={{ marginTop: "10px" }}>
            {post.comments.map((comment, idx) => (
              <div key={idx} style={{ borderTop: "1px solid #eee", padding: "2px 0" }}>
                {comment}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
