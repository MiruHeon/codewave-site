import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  // 게시물 작성
  const addPost = () => {
    if (newPost.trim() === "") return;
    setPosts([
      ...posts,
      { id: Date.now(), content: newPost, likes: 0, comments: [], commentText: "" },
    ]);
    setNewPost("");
  };

  // 댓글 작성
  const addComment = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId && post.commentText.trim() !== "") {
        return {
          ...post,
          comments: [...post.comments, post.commentText],
          commentText: "",
        };
      }
      return post;
    }));
  };

  // 추천
  const likePost = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>간단 게시판</h1>

      {/* 새 게시물 입력 */}
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="게시물 내용을 입력하세요"
      />
      <button onClick={addPost}>작성</button>

      <hr />

      {/* 게시물 목록 */}
      {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <p>{post.content}</p>
          <button onClick={() => likePost(post.id)}>추천 {post.likes}</button>

          <div style={{ marginTop: "10px" }}>
            {/* 댓글 입력 */}
            <input
              type="text"
              value={post.commentText}
              onChange={(e) =>
                setPosts(posts.map(p => p.id === post.id ? { ...p, commentText: e.target.value } : p))
              }
              placeholder="댓글 입력"
            />
            <button onClick={() => addComment(post.id)}>댓글 달기</button>
          </div>

          {/* 댓글 목록 */}
          <div style={{ marginTop: "10px" }}>
            {post.comments.map((comment, index) => (
              <div key={index} style={{ borderTop: "1px solid #eee", padding: "2px 0" }}>
                {comment}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

}
