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
            background: "#001f3f",
            color: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            opacity: fadeIn ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          {/* 로고 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://github.com/MiruHeon/codewave-site/blob/main/public/cw_img.png?raw=true"
              alt="코드웨이브 로고"
              style={{
                width: 60,
                height: 60,
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(10deg) scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotate(0deg) scale(1)")
              }
            />
            <div style={{ marginLeft: 10 }}>
              <h2 style={{ margin: 0 }}>코드웨이브</h2>
              <p style={{ fontSize: "0.85rem", color: "#FFD700", margin: 0 }}>
                Hongik Middle School Codewave
              </p>
            </div>
          </div>

          {/* 메뉴 */}
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
              {[
                "포트폴리오",
                "교육과정",
                "공지사항",
                "News",
                "갤러리",
                "구성원",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "News" ? "news" : item.toLowerCase()}`}
                    style={{
                      position: "relative",
                      transition: "color 0.3s",
                      color: "white",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFD700")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUK59M375gb1LF6eAmS-S9qUoAnGu_x8WEn1Mnyjew7fD-9w/viewform"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                    border: "1px solid #FFD700",
                    padding: "5px 10px",
                    borderRadius: 4,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFD700";
                    e.currentTarget.style.color = "#001f3f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "white";
                  }}
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
            height: 250,
            background:
              "url('https://github.com/MiruHeon/Normal-Project/blob/main/%EC%84%9C%EC%9A%B8%EC%9D%98%20%EB%8B%AC.png?raw=true') no-repeat center/cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        ></div>

        {/* 포트폴리오 */}
        <section
          id="portfolio"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateX(0)" : "translateX(-50px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 1s ease 0.3s",
          }}
        >
          <h3
            style={{
              background: "navy",
              color: "white",
              margin: 0,
              padding: 10,
            }}
          >
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
                width: "40%",
                marginTop: 10,
                border: "1px solid #ccc",
                borderRadius: 4,
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </a>
        </section>

        {/* 교육과정 */}
        <section
          id="curriculum"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 20,
            padding: 10,
            transform: fadeIn ? "translateX(0)" : "translateX(50px)",
            opacity: fadeIn ? 1 : 0,
            transition: "all 1s ease 0.5s",
          }}
        >
          <h3
            style={{
              background: "navy",
              color: "white",
              margin: 0,
              padding: 10,
            }}
          >
            교육과정
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li style={{ padding: 6, borderBottom: "1px dotted #ddd" }}>
              프로그래밍
            </li>
            <li style={{ padding: 6, borderBottom: "1px dotted #ddd" }}>
              자료구조와 알고리즘
            </li>
            <li style={{ padding: 6 }}>AI</li>
          </ul>
        </section>

        {/* 공지사항 */}
        <section
          id="notice"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 20,
            padding: 10,
          }}
        >
          <h3
            style={{
              background: "navy",
              color: "white",
              margin: 0,
              padding: 10,
            }}
          >
            공지사항
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li>1대 회장 류용헌 당선</li>
            <li>1대 차장 신지욱 당선</li>
            <li>홍대부중 동아리 '코드웨이브' 신설</li>
          </ul>
        </section>

        {/* News */}
        <section
          id="news"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 20,
            padding: 10,
          }}
        >
          <h3
            style={{
              background: "navy",
              color: "white",
              margin: 0,
              padding: 10,
            }}
          >
            News
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li>11월 8일 홍대부고 스파이크 프라임 로봇 캠프 주최안내</li>
          </ul>
        </section>

        {/* 갤러리 */}
        <section
          id="gallery"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 20,
            padding: 10,
          }}
        >
          <h3
            style={{
              background: "navy",
              color: "white",
              margin: 0,
              padding: 10,
            }}
          >
            갤러리
          </h3>
          <img
            src="https://github.com/MiruHeon/codewave-site/blob/main/public/friend.jpg?raw=true"
            alt="gallery1"
            style={{
              width: "100%",
              maxWidth: 400,
              marginTop: 10,
              borderRadius: 4,
              cursor: "pointer",
            }}
            onClick={(e) => window.open(e.currentTarget.src, "_blank")}
          />
        </section>

        {/* 구성원 */}
        <section
          id="members"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 20,
            padding: 10,
          }}
        >
          <h3
            style={{
              background: "navy",
              color: "white",
              margin: 0,
              padding: 10,
            }}
          >
            구성원
          </h3>
          <div style={{ padding: 10 }}>
            <p>
              <strong>강태연</strong> - 물리지구과학부 교원
            </p>
            <p>전공분야: 물리</p>
            <p>연구실: 창조관 5502호</p>
            <p>Tel. 051-606-2391</p>
            <p>e-mail: teyoun@ksa.kaist.ac.kr</p>
          </div>
        </section>

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
