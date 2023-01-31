// 5회차
// 01. 이벤트 심화

// 1 이벤트 버블링 중단
// const buttonClick = event => {
//   event.stopPropagation();
//   alert('버튼을 눌렀습니다!');
// };

// 2 이벤트 캡쳐링
// let div = document.getElementById('div');
// div.addEventListener('click', () => alert('div'), { capture: true });
// let button = document.getElementById('button');
// button.addEventListener('click', () => alert('button'));

// 3 이벤트 위임 (가장 중요)
// 버블링의 원리를 사용해서 부모 요소에 적용

// 하이라이트 함수
// const highlight = element => {
//   element.classList.toggle('highlight');
// };

// // 부모 요소
// let menu = document.getElementById('menu');
// menu.addEventListener('click', event => {
//   highlight(event.target);
// });

// 4 브라우저 기본 동작 방지하기
