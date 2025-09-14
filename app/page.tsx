import React from 'react';

const ClubPage: React.FC = () => {
  const seoulNationalBlue = '#003264';

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: seoulNationalBlue }}>
      <img 
        src="https://github.com/MiruHeon/Normal-Project/blob/main/Codewave%20logo.png?raw=true" 
        alt="동아리 로고" 
        style={{ width: '150px', height: 'auto', marginBottom: '1.5rem' }} 
      />

      <h1 style={{ color: seoulNationalBlue }}>코드웨이브</h1>
      <p>
        코드웨이브는 자율성이 보장되고, IT에 대해 공부할 수 있는 최적의 공간입니다.
        매달 정기 모임과 다양한 프로젝트, 교육을 진행해보며 서로의 역량을 키우고 있습니다.
      </p>
      <p>
        관심 있는 분들은 아래 지원서 링크를 통해 지원해 주세요.
      </p>
      <a 
        href="https://example.com/application" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: seoulNationalBlue,
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          marginTop: '1rem',
          fontWeight: 'bold',
        }}
      >
        지원서 작성하러 가기
      </a>
    </main>
  );
};

export default ClubPage;
