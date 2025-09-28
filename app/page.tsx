"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CodeWave: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // 카드 공통 스타일
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 15,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  };

  return (
    <div
      style={{
        background: "#f4f6fa",
        minHeight: "100vh",
        color: "#000",
        fontFamily: "'Noto Sans KR', sans-serif",
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
            background: "#fff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://github.com/MiruHeon/codewave-site/blob/main/public/cw_img.png?raw=true"
              alt="코드웨이브 로고"
              style={{ width: 60, height: 60 }}
            />
            <div style={{ marginLeft: 10 }}>
              <h2 style={{ margin: 0 }}>코드웨이브</h2>
              <p style={{ fontSize: "0.85rem", color: "#555", margin: 0 }}>
                Hongik Middle School Codewave
              </p>
            </div>
          </div>
          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: 15,
                margin: 0,
                padding: 0,
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              <li><a href="#portfolio">포트폴리오</a></li>
              <li><a href="#curriculum">교육과정</a></li>
              <li><a href="#notice">공지사항</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#gallery">갤러리</a></li>
              <li><a href="#members">구성원</a></li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUK59M375gb1LF6eAmS-S9qUoAnGu_x8WEn1Mnyjew7fD-9w/viewform"
                  target="_blank"
                >
                  2기 지원
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* 포트폴리오 */}
        <motion.section
          id="portfolio"
          style={cardStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: fadeIn ? 1 : 0, x: fadeIn ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, borderRadius: 4 }}>
            포트폴리오
          </h3>
          <a
            href="https://drive.google.com/file/d/161RUJxVb9Nn_o8rwBrrDoXiXp283WoFc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              src="https://github.com/MiruHeon/codewave-site/blob/main/public/chaja-img.png?raw=true"
              alt="포트폴리오"
              style={{ width: "40%", marginTop: 10, borderRadius: 6, border: "1px solid #ccc" }}
              whileHover={{ scale: 1.05 }}
            />
          </a>
        </motion.section>

        {/* 교육과정 */}
        <motion.section
          id="curriculum"
          style={{ ...cardStyle, marginTop: 20 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: fadeIn ? 1 : 0, x: fadeIn ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, borderRadius: 4 }}>
            교육과정
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li style={{ padding: 6, borderBottom: "1px dotted #ddd" }}>프로그래밍</li>
            <li style={{ padding: 6, borderBottom: "1px dotted #ddd" }}>자료구조와 알고리즘</li>
            <li style={{ padding: 6 }}>AI</li>
          </ul>
        </motion.section>

        {/* 공지사항 */}
        <motion.section
          id="notice"
          style={{ ...cardStyle, marginTop: 20 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, borderRadius: 4 }}>
            공지사항
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li>1대 회장 류용헌 당선</li>
            <li>1대 차장 신지욱 당선</li>
            <li>홍대부중 동아리 '코드웨이브' 신설</li>
          </ul>
        </motion.section>

        {/* News */}
        <motion.section
          id="news"
          style={{ ...cardStyle, marginTop: 20 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, borderRadius: 4 }}>
            News
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li>11월 8일 홍대부고 스파이크 프라임 로봇 캠프 주최안내</li>
          </ul>
        </motion.section>

        {/* 갤러리 */}
        <motion.section
          id="gallery"
          style={{ ...cardStyle, marginTop: 20 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, borderRadius: 4 }}>
            갤러리
          </h3>
          <motion.img
            src="https://github.com/MiruHeon/codewave-site/blob/main/public/friend.jpg?raw=true"
            alt="gallery1"
            style={{ width: "100%", maxWidth: 400, marginTop: 10, borderRadius: 6, cursor: "pointer" }}
            whileHover={{ scale: 1.03 }}
            onClick={(e) => window.open(e.currentTarget.src, "_blank")}
          />
        </motion.section>

        {/* 구성원 */}
        <motion.section
          id="members"
          style={{ ...cardStyle, marginTop: 20 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, borderRadius: 4 }}>
            구성원
          </h3>
          <div style={{ marginTop: 10, padding: 10, border: "1px solid #ddd", borderRadius: 6, background: "#f9f9f9" }}>
            <p><strong>류용헌</strong> - 코드웨이브 부장</p>
            <p><strong>전공분야:</strong> AI</p>
            <p><strong>학년/반:</strong> 2학년 5반</p>
            <p><strong>Tel.:</strong> 미제공</p>
            <p><strong>E-mail:</strong> imjamminii@gmail.com</p>
          </div>
        </motion.section>

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
          <p>ⓒ 류용헌</p>
        </footer>
      </div>
    </div>
  );
};

export default CodeWave;
