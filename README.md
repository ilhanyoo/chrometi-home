# chrometi-home

CHROMETI 공식 홈페이지: https://chrometi.com

## 배포

GitHub Pages가 `main` 브랜치의 저장소 루트를 배포합니다. `CNAME`의 운영 도메인은 `chrometi.com`입니다.
ChatGPT Sites의 `chrometi.ilhanyoo.chatgpt.site`와는 별도 소스이므로, 그쪽 변경이 이 저장소로 자동 동기화되지는 않습니다.

## Neardia Home

- 홈페이지의 네 번째 앱: `index.html`
- 출시 전 소개 페이지: `services/neardia.html`
- 이미지와 글꼴: `assets/neardia/`

Neardia Home은 **곧 오픈 예정**으로 안내합니다. Chrometi 메인에서는 소개 페이지로 연결하며, 소개 페이지의 브랜드 이야기와 하단 오픈 안내에서 공식 홈페이지 예정 주소 `https://neardia.com`을 새 창으로 엽니다.

브랜드 이름 **Neardia**는 **Near + Dear**를 결합한 조어입니다. **다시곁**은 같은 브랜드를 한국어로 부르는 이름으로, 첫 소개에서는 `Neardia · 다시곁`을 함께 사용합니다. 브랜드는 추모뿐 아니라 함께하는 가족의 기록과 대화까지 담을 수 있는 방향을 지향합니다. **Neardia Home**은 그 첫 번째 서비스이며, 처음에는 강아지와 고양이를 위한 AI 추억 공간으로 소개합니다.

## Neardia 로고

- 브랜드 이야기: `services/neardia.html#nh-brand-story`
- 벡터 원본: `assets/neardia/brand/vector/` (SVG, PDF / 글자까지 경로로 구성)
- 투명 PNG: `assets/neardia/brand/logo/`
- 심벌·앱 아이콘: `assets/neardia/brand/icon/`
- 전용 파비콘: `assets/neardia/brand/favicon/`
- 전체 다운로드: `assets/neardia/neardia-brand-kit.zip`
- 색상·사용법: `assets/neardia/brand/사용안내.txt`

Neardia 서비스 페이지에만 전용 파비콘을 적용하며, Chrometi 메인 페이지는
Chrometi 파비콘과 Neardia 서비스 아이콘을 사용합니다. 기존 `logo.webp`는
참고 이미지로 보관하고 현재 화면은 SVG 원본을 사용합니다.

다시곁 브랜드 표기는 Neardia와 같은 글자 크기로 나란히 배치하며, 로즈 색상과 주아체를 사용합니다. 첫 화면과 브랜드 이야기에 적용한 주아체는 필요한 세 글자만 포함한 로컬 웹폰트입니다. 원본: https://github.com/google/fonts/tree/main/ofl/jua · 라이선스: `assets/neardia/brand/font/OFL-Jua.txt`.
