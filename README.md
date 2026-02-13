# ⚡ 아낌표! (Time Value Calculator)

> **"1,500원을 아끼려고 30분을 걷는 것이 과연 이득일까?"**  
> 시간을 돈으로 계산해 가장 이득인 이동수단을 알려주는 의사결정 앱

---

## 📖 프로젝트 소개 (Project Overview)

현대인은 물건의 가격(명시적 비용)에는 민감하지만,  
그 과정에서 소모되는 **시간의 가치(암묵적 비용)** 는 간과하는 경향이 있습니다.

**아낌표!**는 사용자의 시급을 기준으로 이동 시간의 기회비용을 계산하여,  
**“돈을 쓸 것인가, 시간을 쓸 것인가”**에 대한 데이터 기반 해답을 제공합니다.

---

## 🚀 주요 기능 (Key Features)

- 💰 **개인 맞춤형 시급 설정**  
  사용자의 시급을 입력받아 1분당 가치로 환산

- ⚖️ **실질 총비용 비교**  
  `지출 금액 + (소요 시간 × 분당 가치)` 공식을 통해 선택지 비교

- 📊 **비용 구조 시각화**  
  지출액과 시간 가치 비용을 구분한 **Stacked Bar Chart**

- 🚌 **교통수단 프리셋 제공**  
  버스, 지하철, 택시, 자차 등 기본값 제공

- 💡 **손익분기 시급 분석**  
  어느 시점부터 선택이 바뀌는지 안내

---

## 🛠 기술 스택 (Tech Stack)

- Frontend: React 19
- Build Tool: Vite 7
- Styling: Tailwind CSS 4
- Deployment: Vercel

---

## 💻 실행 방법 (Getting Started)

### 1. 저장소 클론

```bash
git clone https://github.com/[본인아이디]/noa-opportunity-cost.git
cd noa-opportunity-cost
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 아래 주소로 접속:

👉 http://localhost:5173

---

## 📝 개발 과정 및 문제 해결 (Troubleshooting)

### Tailwind CSS 4.0 호환성 문제 해결

- 기존 `npx tailwindcss init` 방식이 최신 버전과 충돌
- `@tailwindcss/vite` 플러그인 방식으로 마이그레이션

### 데이터 무결성 확보를 위한 로직 구현

- 음수 입력 차단
- A/B 동일 옵션 선택 방지
- 도보 선택 시 비용 입력 비활성화
- 입력값 검증으로 계산 오류 방지

---

## 📂 폴더 구조 (Project Structure)

```
src
 ┣ assets        # 이미지 및 정적 파일
 ┣ App.jsx       # 메인 로직 및 UI
 ┣ main.jsx      # React 진입점
 ┣ index.css     # Tailwind 설정
 ┗ vite.config.js # Vite 설정
```

---

## 🎯 프로젝트 목적

시간과 비용 사이의 선택 상황에서  
**시간의 가치를 수치화하여 더 합리적인 의사결정을 돕는 것**을 목표로 합니다.
