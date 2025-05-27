# 🧠 나는 어떤 포켓몬 MBTI일까?

간단한 질문에 답하면 당신의 성격과 닮은 포켓몬과 MBTI 유형을 알려주는 심리테스트입니다.  
Zustand를 활용한 상태관리 흐름을 학습하고자 시작한 프로젝트입니다.

<br/>

## 📌 프로젝트 소개

사용자가 선택한 답변을 전역 상태에 저장하고, 이를 바탕으로 MBTI를 계산하여 결과를 제공합니다.  
각 유형에 맞는 포켓몬을 매칭해 시각적으로 결과를 확인할 수 있도록 구성되어 있습니다.

<br/>

## 🛠️ 사용 기술 및 라이브러리

- **React**
- **TypeScript**
- **Sass (SCSS)**
- **Zustand** – 상태 전역 관리
- **React Router Dom** – 페이지 라우팅

<br/>

## ✨ 주요 기능

### 1. 사용자 답변 상태 저장

```tsx
const { currentIndex, selectAnswer } = useQuizStore();
currentIndex, answers를 Zustand를 통해 전역에서 관리

사용자의 답변을 저장하며 다음 질문으로 넘어가는 로직 구현

2. MBTI 계산 로직
ts
복사
편집
export function calculateMBTI(answers: string[]): string {
  const counts = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  };

  answers.forEach((type) => {
    counts[type as keyof typeof counts]++;
  });

  return [
    counts.E >= counts.I ? "E" : "I",
    counts.S >= counts.N ? "S" : "N",
    counts.T >= counts.F ? "T" : "F",
    counts.J >= counts.P ? "J" : "P",
  ].join("");
}
총 8가지 유형(E/I, S/N, T/F, J/P)의 선택 수를 기준으로 MBTI 결정

3. 결과 페이지 구현
tsx
복사
편집
function Result() {
  const { answers } = useQuizStore();
  const resultMBTI = calculateMBTI(answers);
  const result = mbtiResults[resultMBTI];
  return (
    <div className={styles.container}>
      <h1>{result.name}</h1>
      <img src={`/${resultMBTI}.png`} alt={result.name} />
      <h2>{resultMBTI}</h2>
      <p>{result.desc}</p>
      <ResetButton />
    </div>
  );
}
계산된 MBTI 값을 기준으로 포켓몬 결과를 매칭

public 폴더에 저장된 이미지 사용

다시하기 버튼 클릭 시 상태 초기화 및 홈으로 이동

<br/>
🧩 질문 구성
각 질문은 MBTI의 4가지 축(E/I, S/N, T/F, J/P)을 기준으로 구성되어 있습니다.
보너스 질문에서는 복합 축을 한 번에 묻는 방식도 포함되어 있어 결과의 신뢰도를 높입니다.

예시:

"포켓몬 시합 전날, 나는?"

A. 친구들과 전략 회의! (E)

B. 혼자 상상하며 정리 (I)

<br/>
📁 폴더 구조
bash
복사
편집
src/
├── assets/styles/      # 스타일 변수(SCSS)
├── components/         # 주요 컴포넌트 (홈, 결과 등)
├── data/               # 질문 및 결과 데이터
├── pages/              # 라우트 페이지 구성
├── store/              # Zustand 상태관리 store
<br/>
🧪 개선 포인트
✅ 1. MBTI 계산 로직의 한계
현재는 각 축에서 선택 수가 같을 경우 앞의 항목(E, S, T, J)이 선택됩니다.

개선 아이디어:

질문 수를 늘려 동점 확률 낮추기

동점인 경우 사용자에게 “경계 성향” 안내 메시지 표시

✅ 2. 버튼 애니메이션 위치 문제
현재 버튼 스타일은 ::after 가상 요소로 애니메이션을 구현하였으나, 버튼의 너비에 따라 위치가 달라지는 이슈가 있습니다.

해결 방법 예시:

scss
복사
편집
.button {
  width: 250px; // 고정 너비
}
또는 transform 값을 px 기준으로 정렬하여 일관성 유지

<br/>
🧠 포켓몬 MBTI 결과 예시
MBTI	포켓몬	설명
ENFP	🐭 피카츄	활발한 에너자이저
INFP	🦊 이브이	깊은 감성의 몽상가
INTJ	😈 뮤츠	논리적이고 독립적인 천재
ESFP	🦦 파오리	유쾌하고 사교적인 인싸
ISTJ	🗿 롱스톤	성실하고 원칙적인 관리자
...	...	...

(전체 목록은 data/results.ts 참고)

<br/>
🚀 향후 계획
결과 공유 기능 (SNS 공유 또는 URL 복사)

더 많은 질문 추가

반응형 스타일 개선 및 다크모드 지원

<br/>
🧑‍💻 개발자
프론트엔드 개발자 김유진

GitHub

bash
복사
편집
npm install
npm run dev
사용자가 간단한 테스트를 통해 나와 닮은 포켓몬을 찾을 수 있도록 만든 따뜻한 프로젝트입니다 😊
```
