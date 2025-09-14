'use client';

import React, { useEffect, useState } from 'react';

const ClubPage: React.FC = () => {
  const seoulNationalBlue = '#003264';
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: seoulNationalBlue,
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1.2s ease-in-out',
        fontFamily: "'Segoe UI', 'Pretendard', sans-serif",
      }}
    >
      <img
        src="https://github.com/MiruHeon/Normal-Project/blob/main/Codewave%20logo.png?raw=true"
        alt="동아리 로고"
        style={{ width: '150px', height: 'auto', marginBottom: '1.5rem' }}
      />

      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
        코드웨이브를 소개합니다!
      </h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
        코드웨이브는 자율성이 보장되고, IT에 대해 공부할 수 있는 최적의 공간입니다.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        매달 정기 모임과 다양한 프로젝트, 교육을 통해 서로의 역량을 키워가고 있어요.
      </p>

      <p style={{ marginTop: '2rem', fontSize: '1.05rem' }}>
        관심 있는 분들은 아래 지원서 링크를 통해 지원해 주세요.
      </p>

      <a
        href="https://example.com/application"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#fff',
          color: seoulNationalBlue,
          borderRadius: '8px',
          textDecoration: 'none',
          marginTop: '1.5rem',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = seoulNationalBlue;
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.color = seoulNationalBlue;
        }}
      >
        지원서 작성하러 가기
      </a>
    </main>
  );
};

export default ClubPage;
