'use client';

import React, { useEffect, useState } from 'react';

const ClubPage: React.FC = () => {
  const logoBlue = '#302E8F';
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 헤더 */}
      <header
        style={{
          width: '100%',
          backgroundColor: '#fff',
          color: logoBlue,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          boxSizing: 'border-box',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <h3
            style={{
              fontFamily: "'Lexend Mega', 'Segoe UI', 'Pretendard', sans-serif",
              fontSize: '1.6rem',
              fontWeight: 900,
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            홍대부중 코드웨이브
          </h3>
          <img
            src="/codewav.ico"
            alt="코드웨이브 로고"
            style={{ height: '1.6rem', width: 'auto' }}
          />
        </div>

        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          {['intro', 'exhibition', 'curriculum'].map((id, idx) => {
            const names = ['소개', '포트폴리오', '커리큘럼'];
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: logoBlue,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                {names[idx]}
              </button>
            );
          })}
        </nav>
      </header>

      {/* 메인 */}
      <main
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem 0',
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 1.2s ease-in-out',
          boxSizing: 'border-box',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1050px',
            width: '100%',
            padding: '0 20px',
            backgroundColor: logoBlue,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: '12px',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          {/* 로고 이미지 */}
          <img
            src="https://github.com/MiruHeon/Normal-Project/blob/main/%EC%84%9C%EC%9A%B8%EC%9D%98%20%EB%8B%AC.png?raw=true"
            alt="코드웨이브 로고"
          />

          {/* 소개 */}
          <h1
            id="intro"
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
            코드웨이브에서 현재 2기 멤버를 모집하니, 관심 있는 분들은 아래 지원서 링크를 통해 지원해 주세요.
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

          {/* 유튜브 */}
          <iframe
            id="exhibition"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/25q75Ca2nOQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ marginTop: '2rem', borderRadius: '12px' }}
          ></iframe>

          {/* 포트폴리오 */}
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
            포트폴리오
          </h1>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { img: '/chaja-img.png', pdf: '/chaja-pdf.pdf' },
              { img: '/chatGepeti-img.png', pdf: '/chatgppti.pdf' },
            ].map((item) => (
              <a key={item.pdf} href={item.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt="포트폴리오 미리보기"
                  style={{
                    width: '400px',
                    height: 'auto',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>
            ))}
          </div>

          {/* 커리큘럼 */}
          <h1
            id="curriculum"
            style={{
              fontFamily: "'Lexend Mega', 'Segoe UI', 'Pretendard', sans-serif",
              fontSize: '2.8rem',
              fontWeight: 900,
              marginBottom: '1.2rem',
              letterSpacing: '-2px',
              marginTop: '2rem',
            }}
          >
            커리큘럼
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              maxWidth: '800px',
              width: '100%',
            }}
          >
            {[
              {
                title: '프로그래밍',
                desc: 'IT 기술의 기초가 되는 프로그래밍 교육을 통해 IT 기본 소양을 통달합니다.',
              },
              {
                title: 'AI',
                desc: '프로그래밍 기술의 집합체인 AI를 배움으로써, 전문 지식을 통달합니다.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#fff',
                  color: logoBlue,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', fontWeight: 800 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 공지사항 / News */}
          <div
            className="content"
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
          >
            {[
              {
                title: '공지사항',
                items: [
                  '1대 회장 류용헌 당선',
                  '1대 차장 신지욱 당선',
                  "홍대부중 동아리 '코드웨이브' 신설",
                ],
              },
              {
                title: 'News',
                items: ['11월 8일 홍대부고 스파이크 프라임 로봇 캠프 주최안내'],
              },
            ].map((box) => (
              <div
                key={box.title}
                className="box"
                style={{
                  flex: 1,
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '1rem',
                  backgroundColor: '#fff',
                  color: logoBlue,
                }}
              >
                <h3>{box.title}</h3>
                <ul>
                  {box.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <footer
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              color: logoBlue,
              fontWeight: 'bold',
            }}
          >
            <p>부장 : 류용헌</p>
            <p>차장 : 신지욱</p>
          </footer>

          {/* 마무리 문구 */}
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
        </div>
      </main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        main::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default ClubPage;
