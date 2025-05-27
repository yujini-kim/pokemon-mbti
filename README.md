<div align="center">

<!-- logo -->
<img src="https://user-images.githubusercontent.com/80824750/208554558-490845c9-959a-4823-9003-350ec4d221bf.png" width="400"/>

### 나는 어떤 포켓몬 MBTI일까? 🧠

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />]() [<img src="https://img.shields.io/badge/-tech blog-blue?style=flat&logo=google-chrome&logoColor=white" />]() [<img src="https://img.shields.io/badge/release-v0.0.0-ㅎㄱㄷ두?style=flat&logo=google-chrome&logoColor=white" />]()
<br/> [<img src="https://img.shields.io/badge/프로젝트 기간-2025.05.26~2025.05.28-fab2ac?style=flat&logo=&logoColor=white" />]()

</div>

## 📝 소개

간단한 질문에 답하면 당신의 성격과 닮은 포켓몬과 MBTI 유형을 알려주는 심리테스트입니다.  
Zustand를 활용한 상태관리 흐름을 학습하고자 시작한 프로젝트입니다.

<br />

### 화면 구성

|                                                            화면 명                                                             |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/80824750/208456048-acbf44a8-cd71-4132-b35a-500047adbe1c.gif" width="450"/> |
|                                                 화면에 대한 설명을 입력합니다.                                                 |

|                                                            화면 명                                                             |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/80824750/208456234-fb5fe434-aa65-4d7a-b955-89098d5bbe0b.gif" width="450"/> |
|                                                 화면에 대한 설명을 입력합니다.                                                 |

<br />

## ⚙ 사용기술 및 라이브러리리

<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/TypeScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
<img src="/sass.png" width="80">
<img src="/zustand.png" width="80">
</div>

<br />

## 🤔 개선 포인트

- MBTI 계산 로직의 한계
  - 현재는 각 축에서 선택 수가 같을 경우 앞의 항목(E, S, T, J)이 선택됩니다.
  - 개선아이디어 : 질문 수를 늘려 동점 확률 낮추기 & 동점인 경우 사용자에게 안내메세지 표시
- 버튼 애니메이션 위치 문제
- 현재 버튼 스타일은 ::after 가상 요소로 애니메이션을 구현하였으나, 버튼의 너비에 따라 위치가 달라지는 이슈가 있습니다
- 개선 아이디어 : width값 고정 또는 transform값을 px기준으로 정렬하여 일관성 유지

<br />

## 💁‍♂️ 프로젝트 팀원

|                              Backend                               | Frontend |
| :----------------------------------------------------------------: | :------: |
| ![](https://avatars.githubusercontent.com/u/162581612?v=4&size=64) |   ![]    |
|              [김유진](https://github.com/yujini-kim)               |          |
