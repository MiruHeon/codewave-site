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
    if (saved) setPosts(JSON.parse(saved));
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

  const handleDeletePost = (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleLikePost = (id: string) => {
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

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
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30, color: '#222' }}>홍익갤</h1>

      <section style={{ marginBottom: 50, backgroundColor: '#f9f9f9', padding: 20, borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: 12, color: '#444' }}>글 작성하기</h2>
        <input
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px',
            marginBottom: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={5}
          style={{
            width: '100%',
            padding: '12px 14px',
            marginBottom: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={handleAddPost}
          style={{
            backgroundColor: '#0078D7',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: 6,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#005fa3')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0078D7')}
        >
          글 작성
        </button>
      </section>

      <section>
        <h2 style={{ marginBottom: 20, color: '#444' }}>글 목록</h2>
        {posts.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888' }}>작성된 글이 없습니다.</p>
        )}
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
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 20,
        marginBottom: 30,
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <h3 style={{ marginBottom: 8, color: '#222' }}>{post.title}</h3>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          lineHeight: 1.5,
          color: '#333',
          marginBottom: 12,
          fontSize: 15,
        }}
      >
        {post.content}
      </p>
      <p style={{ fontSize: 12, color: '#777', marginBottom: 12 }}>
        작성일: {new Date(post.createdAt).toLocaleString()}
      </p>
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={onLike}
          style={{
            backgroundColor: '#ff7043',
            border: 'none',
            color: 'white',
            padding: '6px 14px',
            borderRadius: 20,
            cursor: 'pointer',
            marginRight: 10,
            fontSize: 14,
            userSelect: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e65c35')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff7043')}
        >
          👍 추천 {post.likes}
        </button>
        <button
          onClick={onDelete}
          style={{
            backgroundColor: '#e53935',
            border: 'none',
            color: 'white',
            padding: '6px 14px',
            borderRadius: 20,
            cursor: 'pointer',
            fontSize: 14,
            userSelect: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b72b24')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53935')}
        >
          삭제
        </button>
      </div>

      <div>
        <h4 style={{ marginBottom: 10, color: '#555' }}>댓글</h4>
        {post.comments.length === 0 && (
          <p style={{ color: '#aaa', fontStyle: 'italic', marginBottom: 10 }}>
            댓글이 없습니다.
          </p>
        )}
        {post.comments.map(comment => (
          <div
            key={comment.id}
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid #eee',
              marginBottom: 6,
              borderRadius: 6,
              backgroundColor: '#f5f5f5',
            }}
          >
            <p style={{ margin: 0, color: '#333' }}>{comment.text}</p>
            <small style={{ color: '#888' }}>
              {new Date(comment.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
        <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
          <input
            placeholder="댓글 작성"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '8px 12px',
              borderRadius: 20,
              border: '1px solid #ccc',
              fontSize: 14,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <button
            onClick={() => {
              onAddComment(post.id, commentText);
              setCommentText('');
            }}
            style={{
              backgroundColor: '#0078D7',
              color: 'white',
              border: 'none',
              padding: '8px 18px',
              borderRadius: 20,
              cursor: 'pointer',
              fontSize: 14,
              userSelect: 'none',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#005fa3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0078D7')}
          >
            댓글 달기
          </button>
        </div>
      </div>
    </div>
  );
}
