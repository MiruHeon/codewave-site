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
    <div
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          marginBottom: 40,
          fontWeight: '700',
          fontSize: '2.8rem',
          textShadow: '0 2px 8px rgba(0,0,0,0.7)',
        }}
      >
        홍익갤러리
      </h1>

      <section
        style={{
          width: '100%',
          maxWidth: 800,
          marginBottom: 60,
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 20,
          padding: 30,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <h2 style={{ marginBottom: 20, fontWeight: '600' }}>글 작성하기</h2>
        <input
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 18px',
            marginBottom: 15,
            borderRadius: 15,
            border: 'none',
            fontSize: 18,
            background: 'rgba(255, 255, 255, 0.15)',
            color: 'white',
            outline: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.1)',
            transition: 'background 0.3s',
          }}
          onFocus={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
          onBlur={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={5}
          style={{
            width: '100%',
            padding: '14px 18px',
            marginBottom: 20,
            borderRadius: 15,
            border: 'none',
            fontSize: 16,
            background: 'rgba(255, 255, 255, 0.15)',
            color: 'white',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.1)',
            transition: 'background 0.3s',
          }}
          onFocus={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
          onBlur={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
        />
        <button
          onClick={handleAddPost}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: 30,
            fontSize: 18,
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
          }}
        >
          글 작성
        </button>
      </section>

      <section
        style={{
          width: '100%',
          maxWidth: 800,
        }}
      >
        <h2 style={{ marginBottom: 25, fontWeight: '600', textAlign: 'center' }}>
          글 목록
        </h2>
        {posts.length === 0 && (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
            작성된 글이 없습니다.
          </p>
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
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        padding: 25,
        marginBottom: 30,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
      }}
    >
      <h3 style={{ marginBottom: 12, fontWeight: '700', fontSize: '1.5rem' }}>{post.title}</h3>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          lineHeight: 1.6,
          marginBottom: 18,
          fontSize: 16,
          color: 'rgba(255, 255, 255, 0.85)',
        }}
      >
        {post.content}
      </p>
      <p
        style={{
          fontSize: 13,
          color: 'rgba(255, 255, 255, 0.55)',
          marginBottom: 18,
          userSelect: 'none',
        }}
      >
        작성일: {new Date(post.createdAt).toLocaleString()}
      </p>

      <div style={{ marginBottom: 20, display: 'flex', gap: 12 }}>
        <button
          onClick={onLike}
          style={{
            flex: '1 0 auto',
            backgroundColor: 'rgba(255, 69, 0, 0.7)',
            border: 'none',
            padding: '10px 0',
            borderRadius: 30,
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 16,
            color: 'white',
            boxShadow: '0 4px 15px rgba(255, 69, 0, 0.6)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 69, 0, 0.85)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 69, 0, 0.8)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 69, 0, 0.7)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 69, 0, 0.6)';
          }}
        >
          👍 추천 {post.likes}
        </button>

        <button
          onClick={onDelete}
          style={{
            flex: '1 0 auto',
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            border: 'none',
            padding: '10px 0',
            borderRadius: 30,
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 16,
            color: 'white',
            boxShadow: '0 4px 15px rgba(255, 0, 0, 0.6)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.85)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.8)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.6)';
          }}
        >
          삭제
        </button>
      </div>

      <div>
        <h4 style={{ marginBottom: 16, fontWeight: '600', color: 'rgba(255,255,255,0.8)' }}>
          댓글
        </h4>
        {post.comments.length === 0 && (
          <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', marginBottom: 15 }}>
            댓글이 없습니다.
          </p>
        )}
        {post.comments.map(comment => (
          <div
            key={comment.id}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              padding: '10px 15px',
              borderRadius: 15,
              marginBottom: 12,
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.1)',
              userSelect: 'text',
            }}
          >
            <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.9)' }}>{comment.text}</p>
            <small style={{ color: 'rgba(255,255,255,0.6)' }}>
              {new Date(comment.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
        <div style={{ marginTop: 20, display: 'flex', gap: 15 }}>
          <input
            placeholder="댓글 작성"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '12px 18px',
              borderRadius: 30,
              border: 'none',
              fontSize: 16,
              outline: 'none',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.12)',
              transition: 'background 0.3s',
            }}
            onFocus={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
            onBlur={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
          />
          <button
            onClick={() => {
              onAddComment(post.id, commentText);
              setCommentText('');
            }}
            style={{
              backgroundColor: 'rgba(0, 123, 255, 0.7)',
              border: 'none',
              padding: '12px 28px',
              borderRadius: 30,
              fontSize: 16,
              color: 'white',
              cursor: 'pointer',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(0, 123, 255, 0.6)',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              userSelect: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.85)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.8)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.7)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.6)';
            }}
          >
            댓글 등록
          </button>
        </div>
      </div>
    </div>
  );
}
