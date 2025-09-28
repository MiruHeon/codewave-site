"use client";

import React, { useEffect, useState } from "react";

const CodeWave: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        color: "#222",
        fontFamily: "'Noto Sans KR', '맑은 고딕', sans-serif",
      }}
    >
      <div style={{ maxWidth: 950, margin: "0 auto", padding: "0 20px" }}>
        {/* 헤더 */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            borderBottom: "1px solid #ccc",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://github.com/MiruHeon/codewave-site/blob/main/public/cw_img.png?raw=true"
              alt="코드웨이브 로고"
              style={{ width: 80, height: 80 }}
            />
            <div style={{ marginLeft: 10 }}>
              <h2 style={{ margin: 0 }}>코드웨이브</h2>
              <p style={{ fontSize: "0.9rem", color: "#555", margin: 0 }}>
                Hongik Middle School Codewave
              </p>
            </div>
          </div>
          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: 20,
                margin: 0,
                padding: 0,
                alignItems: "center",
              }}
            >
              <li>
                <a href="#notice">공지사항</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#gallery">갤러리</a>
              </li>
              <li>
                <a href="#portfolio">포트폴리오</a>
              </li>
              <li>
                <a href="#curriculum">교육과정</a>
              </li>
              <li>
                <a href="#members">구성원</a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUK59M375gb1LF6eAmS-S9qUoAnGu_x8WEn1Mnyjew7fD-9w/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  2기 지원
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* 배너 */}
        <div
          style={{
            width: "100%",
            height: 300,
            background:
              "url('https://github.com/MiruHeon/Normal-Project/blob/main/%EC%84%9C%EC%9A%B8%EC%9D%98%20%EB%8B%AC.png?raw=true') no-repeat center/cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>

        {/* 공지사항 */}
        <div
          id="notice"
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateX(0)" : "translateX(-40px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10 }}>
            공지사항
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10, lineHeight: "1.8" }}>
            <li>1대 회장 류용헌 당선</li>
            <li>1대 차장 신지욱 당선</li>
            <li>홍대부중 동아리 '코드웨이브' 신설</li>
          </ul>
        </div>

        {/* News */}
        <div
          id="news"
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateX(0)" : "translateX(40px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 0.8s ease 0.4s",
          }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10 }}>
            News
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10, lineHeight: "1.8" }}>
            <li>11월 8일 홍대부고 스파이크 프라임 로봇 캠프 주최 안내</li>
          </ul>
        </div>

        {/* 갤러리 */}
        <div
          id="gallery"
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateY(0)" : "translateY(40px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 0.8s ease 0.6s",
            textAlign: "center",
          }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10 }}>
            갤러리
          </h3>
          <img
            src="https://github.com/MiruHeon/codewave-site/blob/main/public/friend.jpg?raw=true"
            alt="gallery1"
            style={{
              maxWidth: "100%",
              borderRadius: 6,
              marginTop: 10,
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* 포트폴리오 */}
        <div
          id="portfolio"
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateX(0)" : "translateX(-40px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 0.8s ease 0.8s",
          }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10 }}>
            포트폴리오
          </h3>
          <a
            href="https://drive.google.com/file/d/161RUJxVb9Nn_o8rwBrrDoXiXp283WoFc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://github.com/MiruHeon/codewave-site/blob/main/public/chaja-img.png?raw=true"
              alt="포트폴리오"
              style={{
                width: "30%",
                marginTop: 10,
                border: "1px solid #ccc",
                borderRadius: 4,
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        </div>

        {/* 교육과정 */}
        <div
          id="curriculum"
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateX(0)" : "translateX(40px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 0.8s ease 1s",
          }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10 }}>
            교육과정
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10, lineHeight: "1.8" }}>
            <li>프로그래밍</li>
            <li>자료구조와 알고리즘</li>
            <li>AI</li>
          </ul>
        </div>

        {/* 구성원 */}
        <div
          id="members"
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            marginTop: 20,
            padding: 10,
          }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10 }}>
            구성원
          </h3>
          <p style={{ padding: 10 }}>아직 구현되지 않았습니다.</p>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #ccc",
            textAlign: "center",
            padding: 20,
            background: "#f8f8f8",
            marginTop: 20,
          }}
        >
          <a
            href="https://hongik.sen.ms.kr/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p>Hongik Middle School</p>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default CodeWave;
