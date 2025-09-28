import React from "react";

const CodeWave: React.FC = () => {
  return (
    <div className="container">
      {/* 헤더 */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #ccc" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://github.com/MiruHeon/codewave-site/blob/main/public/cw_img.png?raw=true"
            alt="코드웨이브 로고"
            style={{ width: 80, height: 80 }}
          />
          <div style={{ marginLeft: 10 }}>
            <h2>코드웨이브</h2>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Hongik Middle School Codewave</p>
          </div>
        </div>

        <nav>
          <ul style={{ listStyle: "none", display: "flex", gap: 30, margin: 0, padding: 0 }}>
            <li><a href="#">포트폴리오</a></li>
            <li><a href="#">교육과정</a></li>
            <li><a href="#">구성원</a></li>
            <li><a href="#">소식</a></li>
          </ul>
        </nav>
      </header>

      {/* 배너 */}
      <div
        className="banner"
        style={{
          width: "100%",
          height: 300,
          background: "url('https://github.com/MiruHeon/Normal-Project/blob/main/%EC%84%9C%EC%9A%B8%EC%9D%98%20%EB%8B%AC.png?raw=true') no-repeat center/cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "20px 0"
        }}
      ></div>

      {/* 콘텐츠 */}
      <div className="content" style={{ display: "flex", gap: 20, padding: "20px 0" }}>
        {/* 공지사항 */}
        <div className="box" style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, overflow: "hidden" }}>
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, fontSize: "1rem" }}>공지사항</h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>1대 회장 류용헌 당선</li>
            <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>1대 차장 신지욱 당선</li>
            <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>홍대부중 동아리 '코드웨이브' 신설</li>
          </ul>
        </div>

        {/* 뉴스 */}
        <div className="box" style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, overflow: "hidden" }}>
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, fontSize: "1rem" }}>News</h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
            <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>11월 8일 홍대부고 스파이크 프라임 로봇 캠프 주최안내</li>
          </ul>
        </div>

        {/* 갤러리 */}
        <div className="box gallery" style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, overflow: "hidden" }}>
          <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, fontSize: "1rem" }}>갤러리</h3>
          <img
            src="https://github.com/MiruHeon/codewave-site/blob/main/public/friend.jpg?raw=true"
            alt="gallery1"
            style={{ width: "100%", height: "auto", objectFit: "contain", marginBottom: 5 }}
          />
        </div>
      </div>

      {/* 포트폴리오 */}
      <div className="box" style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, overflow: "hidden", marginTop: 20 }}>
        <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, fontSize: "1rem" }}>포트폴리오</h3>
        <div>
          <a href="https://drive.google.com/file/d/161RUJxVb9Nn_o8rwBrrDoXiXp283WoFc/view?usp=sharing" target="_blank" rel="noreferrer">
            <img
              src="https://github.com/MiruHeon/codewave-site/blob/main/public/chaja-img.png?raw=true"
              alt="포트폴리오 이미지"
              style={{ width: "30%", marginTop: 10, border: "1px solid #ccc", borderRadius: 4 }}
            />
          </a>
        </div>
      </div>

      {/* 교육과정 */}
      <div className="box" style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, overflow: "hidden", marginTop: 20 }}>
        <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, fontSize: "1rem" }}>교육과정</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
          <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>프로그래밍</li>
          <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>자료구조와 알고리즘</li>
          <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>AI</li>
        </ul>
      </div>

      {/* 소식 */}
      <div className="box" style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4, overflow: "hidden", marginTop: 20 }}>
        <h3 style={{ background: "navy", color: "white", margin: 0, padding: 10, fontSize: "1rem" }}>소식</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 10 }}>
          <li style={{ padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px dotted #ddd" }}>10.17 동아리 부스 준비기간 안내</li>
        </ul>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #ccc", textAlign: "center", padding: 20, background: "#f8f8f8", marginTop: 20 }}>
        <a href="https://hongik.sen.ms.kr/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <p>Hongik Middle School</p>
        </a>
      </footer>
    </div>
  );
};

export default CodeWave;
