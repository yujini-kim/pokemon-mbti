<div align="center">

  <br />
  <h1> 나는 어떤 포켓몬 MBTI일까? 🧠</h1>
  <a href="#">
  <img src="https://img.shields.io/badge/GitHub%20Pages-Active-AEF359?&logo=github&logoColor=white" alt="GitHub-Pages" />
  </a>
  <br />
</div>

## 목차

1. **웹 서비스 소개**
2. **기술 스택**
3. **주요 기능**
4. **주요 페이지**
5. **폴더구조**
6. **개선 포인트**
7. **실행방법**

<br />

## 💁🏻‍♂ 웹 서비스 소개

간단한 질문에 답하면 당신의 성격과 닮은 포켓몬과 MBTI 유형을 알려주는 심리테스트입니다.  
Zustand를 활용한 상태관리 흐름을 학습하고자 시작한 프로젝트입니다.

<br />

## 🛠 기술 스택

- ![React](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white)
- ![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)
- ![Zustnad](https://img.shields.io/badge/-Zustnad-413C36?&logo=Zustnad&logoColor=white)

<br />

## 💡 주요 기능

- 1.  사용자 답변 상태 저장

const { currentIndex, selectAnswer } = useQuizStore();

- 2. MBTI 계산 로직

<br />

## 📄 주요 페이지

|                               메인 페이지                               |                               서브 페이지                               |
| :---------------------------------------------------------------------: | :---------------------------------------------------------------------: |
| <img src="./images/sample_page.png" alt="Sample Page" height="250px" /> | <img src="./images/sample_page.png" alt="Sample Page" height="250px" /> |

<br />

## 📁 폴더 구조

src/
├── assets/styles/ # 스타일 변수(SCSS)
├── components/ # 주요 컴포넌트 (홈, 결과 등)
├── data/ # 질문 및 결과 데이터
├── pages/ # 라우트 페이지 구성
├── store/ # Zustand 상태관리 store

<br />

## 🧪 개선 포인트

✅ 1. MBTI 계산 로직의 한계
현재는 각 축에서 선택 수가 같을 경우 앞의 항목(E, S, T, J)이 선택됩니다.

개선 아이디어:

질문 수를 늘려 동점 확률 낮추기

동점인 경우 사용자에게 안내 메시지 표시

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

## 💻 실행 방법

1. **실행 1**

```bash
$ git clone https://github.com/yujini-kim/pokemon-mbti.git

```

2. **실행 2**

```bash
$ cd pokemon-mbti
```

3. **실행 3**

```bash
$ npm install
```

4. **실행 4**

```bash
$ npm start
```
