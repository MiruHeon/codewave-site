'use client';

import React, { useEffect, useState } from 'react';

const ClubPage: React.FC = () => {
  const logoBlue = '#1A237E';
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main
      style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: logoBlue,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '2rem',
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1.2s ease-in-out',
        textAlign: 'center',
        fontFamily: "'Segoe UI', 'Pretendard', sans-serif",
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      <img
        src="https://github.com/MiruHeon/Normal-Project/blob/main/Codewave%20logo.png?raw=true"
        alt="코드웨이브 로고"
        style={{
          width: '160px',
          height: 'auto',
          marginBottom: '2rem',
        }}
      />

      <h1
        style={{
          fontFamily: "'Lexend Mega', 'Segoe UI', 'Pretendard', sans-serif",
          fontSize: '2.8rem',
          fontWeight: 900,
          marginBottom: '1.2rem',
          letterSpacing: '-2px',
        }}
      >
        코드웨이브를 소개합니다!
      </h1>

      <p style={{ fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '600px' }}>
        코드웨이브는 자율성과 창의성이 보장되는 IT 동아리입니다.
        <br />
        매달 정기 모임과 다양한 프로젝트, 교육을 통해 함께 성장해요.
      </p>

      <p style={{ marginTop: '2rem', fontSize: '1.05rem', maxWidth: '600px' }}>
        그 코드웨이브에서 현재 2기 멤버를 모집하니, 관심 있는 분들은 아래 지원서 링크를 통해 지원해 주세요.
      </p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdUK59M375gb1LF6eAmS-S9qUoAnGu_x8WEn1Mnyjew7fD-9w/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#fff',
          color: logoBlue,
          borderRadius: '8px',
          textDecoration: 'none',
          marginTop: '1.5rem',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = logoBlue;
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.color = logoBlue;
        }}
      >
        지원서 작성하러 가기
      </a>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/25q75Ca2nOQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ marginTop: '2rem', borderRadius: '12px' }}
      ></iframe>

      <h1
        style={{
          fontFamily: "'Lexend Mega', 'Segoe UI', 'Pretendard', sans-serif",
          fontSize: '2.8rem',
          fontWeight: 900,
          marginBottom: '1.2rem',
          letterSpacing: '-2px',
          marginTop: '2rem',
        }}
      >
        ACHIEVE INNOVATION
      </h1>
    </main>
  );
};

export default ClubPage;
