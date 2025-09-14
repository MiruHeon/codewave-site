'use client';

import React, { useState, useEffect } from 'react';

type Comment = {
  id: string;
  text: string;
  createdAt: number;
};

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  likes: number;
  comments: Comment[];
};

const STORAGE_KEY = 'dc_gallery_posts';

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export default function GalleryPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = () => {
    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력하세요.');

    const newPost: Post = {
      id: generateId(),
      title: title.trim(),
      content: content.trim(),
      createdAt: Date.now(),
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
  };

  // 글 삭제 함수
  const handleDeletePost = (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    setPosts(posts.filter(post => post.id !== id));
  };

  // 좋아요 함수
  const handleLikePost = (id: string) => {
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // 댓글 추가 함수
  const handleAddComment = (postId: string, commentText: string) => {
    if (!commentText.trim()) return alert('댓글 내용을 입력하세요.');

    setPosts(
      posts.map(post => {
        if (post.id === postId) {
          const newComment: Comment = {
            id: generateId(),
            text: commentText.trim(),
            createdAt: Date.now(),
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>홍익갤러리</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>글 작성하기</h2>
        <input
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={4}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
        <button onClick={handleAddPost} style={{ padding: '8px 16px' }}>
          글 작성
        </button>
      </section>

      <section>
        <h2>글 목록</h2>
        {posts.length === 0 && <p>글이 없습니다.</p>}
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            onDelete={() => handleDeletePost(post.id)}
            onLike={() => handleLikePost(post.id)}
            onAddComment={handleAddComment}
          />
        ))}
      </section>
    </div>
  );
}

type PostItemProps = {
  post: Post;
  onDelete: () => void;
  onLike: () => void;
  onAddComment: (postId: string, commentText: string) => void;
};

function PostItem({ post, onDelete, onLike, onAddComment }: PostItemProps) {
  const [commentText, setCommentText] = useState('');

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 20 }}>
      <h3>{post.title}</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
      <p style={{ fontSize: 12, color: '#555' }}>
        작성일: {new Date(post.createdAt).toLocaleString()}
      </p>
      <button onClick={onLike} style={{ marginRight: 8 }}>
        👍 추천 {post.likes}
      </button>
      <button onClick={onDelete} style={{ color: 'red' }}>
        삭제
      </button>

      <div style={{ marginTop: 16 }}>
        <h4>댓글</h4>
        {post.comments.length === 0 && <p>댓글이 없습니다.</p>}
        {post.comments.map(comment => (
          <div key={comment.id} style={{ padding: '4px 0', borderBottom: '1px solid #eee' }}>
            <p style={{ margin: 0 }}>{comment.text}</p>
            <small style={{ color: '#888' }}>
              {new Date(comment.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
        <div style={{ marginTop: 8 }}>
          <input
            placeholder="댓글 작성"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            style={{ width: '80%', padding: 6 }}
          />
          <button
            onClick={() => {
              onAddComment(post.id, commentText);
              setCommentText('');
            }}
            style={{ padding: '6px 12px', marginLeft: 8 }}
          >
            댓글 달기
          </button>
        </div>
      </div>
    </div>
  );
}
