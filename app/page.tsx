import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 프로필 상단 */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-32 h-32 relative">
          <Image
            src="/path-to-your-image.jpg" // 이미지 경로
            alt="류용헌 프로필"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">류용헌 (Ryu-Yong-Heon)</h1>
          <p className="mt-2 italic">"시련은 있어도 실패는 없다."</p>
        </div>
      </div>

      {/* 기본 정보 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">기본 정보</h2>
        <ul className="space-y-2">
          <li><strong>본명:</strong> 류용헌</li>
          <li><strong>출생:</strong> 2011년 1월 5일 (서울 성북구 삼선동)</li>
          <li><strong>국적:</strong> 대한민국</li>
          <li><strong>신체:</strong> 168cm, A형</li>
          <li><strong>학력:</strong> 서울삼선초, 홍익대학교사범대부속중, 선린인터넷고 (예정), 한국공학대학교 (예정)</li>
          <li><strong>별명:</strong> 가오, 안진우, 유슽</li>
          <li><strong>종교:</strong> 무종교</li>
          <li><strong>MBTI:</strong> ESTP</li>
        </ul>
      </section>

      {/* 개요 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">개요</h2>
        <p>
          대한민국 서울특별시 성북구 삼선동에서 태어난 평범한 학생이다. 
          홍익대학교사범대학부속중학교 2학년 재학 중이며, 1학기 2학년 5반의 반장. 
          그리고 동아리 1기 코드웨이브 동아리장 직을 맡고 있다.
        </p>
      </section>

      {/* 특징 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">특징</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>옛날부터 가정교육을 똑바로 받아 상황대처실력, 예의, 성격 모두 갖춤</li>
          <li>친구들 사이에서 '해킹을 할 줄 아는 남'으로 소문</li>
          <li>편집과 합성 실력이 뛰어남</li>
          <li>장래가 빨리 바뀌는 특징</li>
          <li>선택장애가 있음</li>
          <li>감정 변화가 심각하게 나타남</li>
          <li>주변에서도 인정하는 프로그래밍 실력</li>
          <li>실용 재능 다수 보유</li>
          <li>가명이 많음</li>
          <li>확고한 꿈이 있음</li>
          <li>정주영이 롤모델</li>
          <li>항상 자신감 있게 대답하지만 예상치 못한 답도 내놓음</li>
          <li>인서울 대학보다 자신의 장래를 중시</li>
        </ul>
      </section>

      {/* 어록 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">어록</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>난 시간이 많아.</li>
          <li>그래, 맞아 다 해볼거야.</li>
        </ul>
      </section>

      {/* 여담 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">여담</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>축구 구단 중에서도 토트넘 홋스퍼를 가장 좋아함</li>
          <li>아이폰 12프로 사용 중</li>
          <li>군대를 무상캠프로 생각함</li>
          <li>편집 앱은 캡컷과 미리캔버스 사용</li>
          <li>복싱은 아웃복서식 운영</li>
          <li>선린인터넷고와 한국공학대 입학 준비 중</li>
        </ul>
      </section>

      {/* 수상 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">수상</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>홍익대학교사범대학부속중학교에서 열린 프레젠테이션 대회에 재미로 참가했지만 동상 수상</li>
        </ul>
      </section>
    </div>
  );
}
