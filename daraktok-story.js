"use strict";
// Illustrative interactions only. No user input, API calls, storage or analytics.
const styles = {
  listen: ["들어만 줘 · 조언 없이 곁에", "거절하기는 어려웠고, 그러고 나니 네 마음이 더 무거워졌구나. 오늘은 해결하려고 하지 않을게. 하고 싶은 말부터 해.", "질문과 해결책을 서두르지 않고, 네 이야기를 받아줘요."],
  side: ["편들어줘 · 마음부터 내 편", "네 일도 있는데 부탁까지 떠안으니 답답하지. 오늘 하루 버틴 네 마음부터 챙기자. 서운하고 화나는 마음, 여기서는 참지 않아도 돼.", "감정은 함께 받아주되, 다른 사람의 속마음을 단정하지 않아요."],
  honest: ["솔직하게 · 위로 뒤에 한마디", "화나는 건 이해돼. 그런데 네가 괜찮다고 하면 상대는 네 한계를 모를 수도 있어. 다음엔 ‘오늘은 내 일 때문에 어려워’라는 말부터 연습해볼까?", "무조건 맞장구치기보다, 내가 바꿀 수 있는 부분도 함께 봐요."],
  spar: ["한판 붙자 · 가볍게 티격태격", "잠깐, 네 일정표에 네 자리는 왜 맨 마지막인데? 착한 사람 역할도 퇴근은 해야지. 오늘은 ‘네 일 먼저’ 편에 서서 너랑 한판 붙을래.", "생각과 행동을 두고 티격태격해요. 상처를 공격하지 않고, 그만하면 멈춰요."]
};
document.querySelectorAll('[data-style]').forEach(button => {
  button.addEventListener('click', () => {
    const [label, reply, note] = styles[button.dataset.style];
    document.querySelectorAll('[data-style]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    document.getElementById('dt-reply-label').textContent = label;
    document.getElementById('dt-reply').textContent = reply;
    document.getElementById('dt-style-note').textContent = note;
  });
});
const memories = {
  boundary: {year:2026,topic:'일·사업',place:'머리',title:'나를 위한 작은 거절',body:'부탁을 거절하는 것이 관계를 거절하는 건 아니라는 걸, 조금씩 연습하고 있어요.'},
  dream: {year:2025,topic:'꿈·목표',place:'머리',title:'언젠가 열고 싶은 가게',body:'서두르지 않고 내 취향이 담긴 작은 가게를 준비해보고 싶어요.'},
  lesson: {year:2026,topic:'배움·성장',place:'머리',title:'완벽하지 않아도 시작하기',body:'모든 준비를 끝낸 다음보다, 할 수 있는 작은 일부터 시작해보기로 했어요.'},
  dad: {year:1998,topic:'가족·친구',place:'마음',title:'아빠와 걸었던 여름 바다',body:'무슨 말을 했는지는 잘 기억나지 않아도, 나란히 걷던 그때의 마음은 남아 있어요.'},
  walk: {year:2026,topic:'일상·취미',place:'마음',title:'생각이 가벼워진 산책길',body:'답이 나지 않는 날에도 한 바퀴 걷고 돌아오면, 마음에 작은 틈이 생겼어요.'},
  thanks: {year:2025,topic:'사랑·관계',place:'마음',title:'그날 들었던 “고마워”',body:'별것 아닌 줄 알았던 내 마음을 알아준 한마디가 오래 남아 있어요.'}
};
const map = document.getElementById('dt-map');
const originalMap = map.innerHTML;
let selected = 'dad';
function memoryButton(key) {
  const memory = memories[key];
  const button = document.createElement('button');
  button.type = 'button';button.dataset.memory = key;
  const dot = document.createElement('i');dot.setAttribute('aria-hidden','true');
  const text = document.createElement('span');const small = document.createElement('small');
  small.textContent = memory.year+' · '+memory.topic;
  text.append(small, document.createTextNode(memory.title));button.append(dot,text);
  return button;
}
function selectMemory(key) {
  selected=key;const memory=memories[key];
  document.getElementById('dt-memory-date').textContent=memory.year+' · '+memory.topic+' · '+memory.place;
  document.getElementById('dt-memory-title').textContent=memory.title;
  document.getElementById('dt-memory-body').textContent=memory.body;
  map.querySelectorAll('[data-memory]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.memory===key)));
}
map.addEventListener('click', event => {const button=event.target.closest('[data-memory]');if(button)selectMemory(button.dataset.memory);});
document.querySelectorAll('[data-view]').forEach(button=>{
  button.addEventListener('click',()=>{
    const view=button.dataset.view;map.dataset.current=view;
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    if(view==='map')map.innerHTML=originalMap;
    else {
      map.replaceChildren();
      const keys=Object.keys(memories).sort((a,b)=>memories[a].year-memories[b].year);
      if(view==='time'){
        [...new Set(keys.map(key=>memories[key].year))].forEach(year=>{
          const group=document.createElement('section');group.className='dt-year-group';
          const heading=document.createElement('h3');heading.textContent=year;
          const nodes=document.createElement('div');nodes.className='dt-memory-nodes';
          keys.filter(key=>memories[key].year===year).forEach(key=>nodes.append(memoryButton(key)));
          group.append(heading,nodes);map.append(group);
        });
      }else{const nodes=document.createElement('div');nodes.className='dt-memory-nodes';keys.forEach(key=>nodes.append(memoryButton(key)));map.append(nodes);}
    }
    selectMemory(selected);
  });
});
selectMemory(selected);
