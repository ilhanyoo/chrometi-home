# chrometi-home

CHROMETI 공식 홈페이지: https://chrometi.com

## 배포

GitHub Pages가 `main` 브랜치의 저장소 루트를 배포합니다. `CNAME`의 운영 도메인은 `chrometi.com`입니다.
ChatGPT Sites의 `chrometi.ilhanyoo.chatgpt.site`와는 별도 소스이므로, 그쪽 변경이 이 저장소로 자동 동기화되지는 않습니다.

## Neardia

- `services/neardia.html`은 정보 유출 방지를 위해 **준비 중** 안내만 보여 줍니다(검색 제외 `noindex`).
- 이전 소개 페이지와 이미지·영상·브랜드 키트는 공개 사이트에서 내렸습니다. 원본은 git 기록의 커밋 `9ca7fee`에 남아 있습니다.
- 남은 파일: 메인 카드용 심벌(`assets/neardia/brand/vector/neardia-symbol.svg`)과 파비콘(`assets/neardia/brand/favicon/`).

## 딧(DIT)

AIOudit·VIDEOudit이 함께 쓰는 진단 로봇 캐릭터(2026-11-04).

- 소개 페이지: `services/dit.html` (이름의 뜻, 태어난 이야기, 몸에 담긴 뜻, 두 서비스의 딧, 약속, 표정)
- 메인 `index.html#dit` 섹션, AIOudit·VIDEOudit 소개 페이지의 ‘With DIT’ 섹션과 서비스 둘러보기 목록
- 그림: `assets/dit/*.svg` — 움직임이 파일 안에 들어 있어 `<img>`로 써도 움직이며, 움직임 줄이기 설정이면 멈춤. 원본 그림 함수는 VIDEOudit 저장소 `dit.mjs`의 `ditSvg`
- 스타일 `dit.css`, 소개 페이지 동작 `dit.js`
- 서비스 소개 화면: `assets/screens/*-2611.jpg` (2026년 11월 화면)

## daraktok · 다락톡

- 홈페이지: VIDEOudit 다음, LookAmigo 앞. 기존 product-entry 형식 유지.
- 소개 페이지: `services/daraktok.html`
- 스타일·대화/기억 예시: `daraktok-story.css`, `daraktok-story.js`
- 기존 퍼플 4D 로고: `assets/daraktok/`

2026-11-11 제품 담당자의 요청으로 최초 개발계획서 전체 의도와 이후 기억 기능을 통합한 **완성형 서비스 소개**를 작성했다. 핵심은 “누구에게도 말 못한 나만의 고민을 털어놓는 채팅”이며, 기억은 다음에도 처음부터 설명하지 않아도 되도록 돕는 보조 가치다. 8명 캐릭터·관계·솔직함·4개 반응 방식·3개 상황 모드·선호/경계·목소리·기억 전달까지 목표 경험을 소개한다. 이는 기능 구현 완료 기록이 아니다.

페이지의 대화와 기억지도는 가상 데이터로 동작하는 설명 예시다. 실제 AI 호출·개인정보 수집·저장·발송은 하지 않는다. 가격·암호화 수준·가입자 수·효과 등 확인되지 않은 수치는 추가하지 않았다. 현재 운영 앱의 공개 접속 주소 대신 문의 메일과 페이지 내 예시 탐색을 연결했다.
