"use strict";
(() => {
  const modes = {
    wardrobe: {copy:['WITH WHAT YOU OWN','이미 가진 옷에서 찾는 새로운 조합.','내 옷장의 데님 재킷과 버건디 팬츠를 중심으로, 밝은 이너와 스니커즈를 연결한 코디 예시입니다.','보유 옷과 프로필, 선호를 참고해 조합을 찾는 방식입니다.'],image:'fictional-model-styling.png',side:'left',label:'내 옷장 활용 · 남성 코디',alt:'블루 데님 재킷과 버건디 팬츠에 흰 티셔츠와 스니커즈를 매치한 가상 남성',basisLabel:'코디의 중심',basis:'데님 재킷 · 버건디 팬츠',styling:'흰 티셔츠와 아이보리 스니커즈로 색의 무게를 덜어요.',number:'01 / 04'},
    stylist: {copy:['A STYLIST’S PERSPECTIVE','색과 실루엣을 연결하는 시선.','라일락 카디건과 네이비 스커트로 밝고 차분한 색의 균형을 맞추고, 스니커즈로 일상적인 분위기를 더한 예시입니다.','스타일리스트의 코디 기준을 활용합니다. 전용 공식 등록 전에는 LookAmigo 기본 공식을 사용하며, 실시간 상담 기능은 아닙니다.'],image:'fictional-women-styling.webp',side:'left',label:'스타일리스트 · 여성 코디',alt:'라일락 카디건과 네이비 스커트에 흰 스니커즈를 신은 가상 여성',basisLabel:'코디의 중심',basis:'라일락 카디건 · 네이비 스커트',styling:'상의는 부드럽게, 하의는 짙게. A라인으로 자연스러운 실루엣을 만들어요.',number:'02 / 04'},
    amigo: {copy:['LOOKAMIGO’S STYLE FORMULAS','패턴 한 벌에, 코디 공식을 더하면.','질감 있는 데님에 단색 니트를 연결하고 브라운 소품으로 마무리합니다. 룩북과 코디 공식을 활용하는 방식을 보여주는 예시입니다.','LookAmigo 코디 공식과 룩북 DB를 기준으로 보유 옷을 조합합니다. 앱에서 제공 중인 컬렉션을 선택할 수 있습니다.'],image:'fictional-model-styling.png',side:'right',label:'LookAmigo · 남성 코디',alt:'패턴 데님에 아이보리 니트와 브라운 로퍼를 매치한 가상 남성',basisLabel:'코디의 중심',basis:'패턴 데님 · 아이보리 니트',styling:'패턴은 한 곳에, 나머지는 단색으로. 벨트와 로퍼의 브라운을 연결해요.',number:'03 / 04'},
    expand: {copy:['BEYOND YOUR WARDROBE','새로운 한 벌로, 다음 스타일을.','익숙한 데님 재킷에 크림 와이드 팬츠와 베이지 로퍼를 새롭게 제안한 코디입니다. 기존 옷을 살리면서 분위기를 바꿉니다.','AI가 옷장 밖의 새 아이템을 제안하고 보유 옷과 조합합니다. 구매 전 실제 사이즈와 소재를 확인하세요.'],image:'fictional-women-styling.webp',side:'right',label:'AI 추천 · 여성 코디',alt:'데님 재킷과 밝은 이너, 크림 와이드 팬츠와 베이지 로퍼를 입은 가상 여성',basisLabel:'보유 옷 + 새 제안',basis:'데님 재킷 + 크림 팬츠 · 베이지 로퍼',styling:'밝은 하의로 데님을 산뜻하게. 넉넉한 팬츠 핏과 가벼운 로퍼를 더해요.',number:'04 / 04'}
  };
  const modeButtons = [...document.querySelectorAll('[data-mode]')];
  modeButtons.forEach(button => button.addEventListener('click', () => {
    modeButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    const data = modes[button.dataset.mode];
    ['mode-kicker','mode-title','mode-description','mode-note'].forEach((id,index) => document.getElementById(id).textContent = data.copy[index]);
    const photo = document.getElementById('mode-photo');
    photo.src = `../assets/lookamigo/${data.image}`;
    photo.alt = data.alt;
    document.getElementById('mode-photo-frame').className = `single-look part-${data.side}`;
    for (const [id,value] of Object.entries({'mode-photo-label':data.label,'mode-basis-label':data.basisLabel,'mode-basis':data.basis,'mode-styling':data.styling,'mode-number':data.number})) document.getElementById(id).textContent = value;
  }));
  document.querySelectorAll('[data-select-mode]').forEach(link => link.addEventListener('click', () => {
    const button = modeButtons.find(button => button.dataset.mode === link.dataset.selectMode);
    button?.click();
  }));
  const outfitButtons = [...document.querySelectorAll('[data-outfit]')];
  outfitButtons.forEach(button => button.addEventListener('click', () => {
    outfitButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    document.querySelectorAll('[data-outfit-panel]').forEach(panel => panel.hidden = panel.dataset.outfitPanel !== button.dataset.outfit);
  }));
  const magazinePages = [
    {label:'표지',alt:'햇살이 드는 중정의 라일락 카디건과 네이비 스커트. 사진 위에 한글 코디 해설이 들어간 LookAmigo 매거진 표지',kicker:'01 / THE COURTYARD',title:'라일락과 네이비, 부드러움에 깊이를 더하다.',copy:'얼굴 가까이 밝은 카디건을 두고, 짙은 A라인 스커트로 중심을 잡았어요. 흰 스니커즈가 일상적인 경쾌함을 더합니다.'},
    {label:'데님',alt:'성수의 벽돌 거리를 배경으로 데님 재킷과 크림 팬츠를 입은 여성. 전신과 재킷 및 로퍼 확대 사진, 번호별 한글 코디 설명',kicker:'02 / SEONGSU STREET',title:'짧은 재킷, 길게 흐르는 실루엣.',copy:'데님의 질감 아래 크림 팬츠를 길게 떨어뜨렸어요. 재킷의 길이와 허리선, 베이지 로퍼까지 번호별 디테일로 살펴보세요.'},
    {label:'테일러링',alt:'갤러리에서 베이지 재킷과 블랙 팬츠를 입은 여성. SOFT POWER 제목과 소매, 가방, 시계에 대한 사진 속 스타일 노트',kicker:'03 / THE GALLERY',title:'부드러운 재킷에, 단정한 중심.',copy:'베이지와 블랙의 차분한 대비에 브라운 소품을 더했어요. 걷어 올린 소매와 작은 시계가 테일러링을 편안한 일상복으로 바꿉니다.'},
    {label:'이브닝',alt:'노을빛 서울 루프톱의 네이비 원피스와 아이보리 니트 착장. 탄 컬러 가방 확대 사진과 어깨 위 니트에 대한 한글 설명',kicker:'04 / THE GOLDEN HOUR',title:'네이비 위에 내려앉은 아이보리.',copy:'어깨에 두른 밝은 니트로 얼굴 주변에 빛을 더하고, 탄 컬러 가방과 크림 슈즈로 따뜻하게 연결했어요. 해 질 무렵에 어울리는 조합입니다.'}
  ];
  const magazineButtons = [...document.querySelectorAll('[data-magazine-page]')];
  let magazinePage = 1;
  function selectMagazinePage(page) {
    magazinePage = ((page - 1 + magazinePages.length) % magazinePages.length) + 1;
    const data = magazinePages[magazinePage - 1];
    magazineButtons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.magazinePage) === magazinePage)));
    const image = document.getElementById('magazine-page-image'), link = document.getElementById('magazine-preview-link');
    image.src = `../assets/lookamigo/editorial-page-${magazinePage}.webp`;
    image.alt = data.alt;
    link.href = image.src;
    link.dataset.previewTitle = `LookAmigo 매거진 룩북 · ${data.label}`;
    link.setAttribute('aria-label', `LookAmigo 매거진 룩북 ${data.label} 크게 보기`);
    document.getElementById('magazine-page-status').textContent = `0${magazinePage} / 04 · ${data.label}`;
    document.getElementById('magazine-note-kicker').textContent = data.kicker;
    document.getElementById('magazine-note-title').textContent = data.title;
    document.getElementById('magazine-note-copy').textContent = data.copy;
  }
  magazineButtons.forEach(button => button.addEventListener('click', () => selectMagazinePage(Number(button.dataset.magazinePage))));
  document.querySelectorAll('[data-magazine-step]').forEach(button => button.addEventListener('click', () => selectMagazinePage(magazinePage + Number(button.dataset.magazineStep))));
  const verdicts = {
    0: ['구매를 고려해도 좋아요', '같은 카테고리·색상의 보유 옷이 없어 새로운 조합을 넓힐 수 있는 후보입니다.'],
    1: ['구매는 신중히 고려하세요', '소재나 핏에 필요한 차이가 있는지 비교한 뒤 결정하세요.'],
    2: ['사지 않는 걸 추천해요', '같은 카테고리·색상의 옷이 이미 2벌 이상 있습니다. 먼저 보유 옷을 활용해보세요.']
  };
  const countButtons = [...document.querySelectorAll('[data-count]')];
  countButtons.forEach(button => button.addEventListener('click', () => {
    countButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    const values = verdicts[button.dataset.count];
    document.getElementById('purchase-verdict').textContent = values[0];
    document.getElementById('purchase-reason').textContent = values[1];
  }));
})();
