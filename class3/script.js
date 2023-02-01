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

// practice
// const TIMEZONE = {
//   london: 'Europe/London',
//   newyork: 'America/New_York',
//   seoul: 'Asia/Seoul',
// };
// let timer;

// function setTimeByCountry(country) {
//   let now = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[country] });
//   let currentTime = document.getElementById('currentTime');
//   currentTime.innerText = now;
// }

// function setTime(event) {
//   clearInterval(timer);
//   setTimeByCountry(event.target.id);
//   timer = setInterval(setTimeByCountry, 1000, event.target.id);
// }

// let selectedButton;
// const highlight = element => {
//   if (selectedButton) {
//     selectedButton.classList.toggle('highlight');
//   }
//   element.classList.toggle('highlight');
//   return element;
// };

// let menu = document.getElementById('menu');
// menu.addEventListener('click', event => {
//   let target = event.target;
//   selectedButton = highlight(target);
//   setTime(event);
// });

// 02. 이벤트의 다양한 활용 방법

// 1 input event

// const onFocus = event => {
//   event.target.style.backgroundColor = 'bisque';
// };

// 강사님 풀이
// let id = document.getElementById('id');
// let pw = document.getElementById('pw');

// const onFocus = event => {
//   event.target.style.backgroundColor = 'bisque';
// };
// const onBlur = event => {
//   event.target.style.backgroundColor = 'white';
// };
// id.addEventListener('focus', onFocus);
// pw.addEventListener('focus', onFocus);
// id.addEventListener('blur', onBlur);
// pw.addEventListener('blur', onBlur);

// 2 keyboard event
// let pw = document.getElementById('pw');
// pw.addEventListener('keydown', () => {
//   if (event.key == 'Enter') {
//     alert('엔터키 누름');
//   }
// });

// practice 1
// let id = document.getElementById('id');
// let pw = document.getElementById('pw');

// const onFocus = event => {
//   event.target.style.width = '200px';
//   event.target.style.height = '60px';
// };
// const onBlur = event => {
//   event.target.style.width = '100px';
//   event.target.style.height = '30px';
// };

// id.addEventListener('focus', onFocus);
// pw.addEventListener('focus', onFocus);
// id.addEventListener('blur', onBlur);
// pw.addEventListener('blur', onBlur);

// const onKeydown = event => {
//   width = Number(event.target.style.width.slice(0, -2));
//   console.log(event.key);
//   if (event.key == 'Backspace') {
//     event.target.style.width = String(width - 1) + 'px';
//   } else {
//     event.target.style.width = String(width + 1) + 'px';
//   }
// };
// id.addEventListener('keydown', onKeydown);
// pw.addEventListener('keydown', onKeydown);

// const onMousedown = event => {
//   event.target.style.backgroundColor = 'blue';
// };
// const onMouseup = event => {
//   event.target.style.backgroundColor = null;
// };
// id.addEventListener('mousedown', onMousedown);
// id.addEventListener('mouseup', onMouseup);
// pw.addEventListener('mousedown', onMousedown);
// pw.addEventListener('mouseup', onMouseup);

// 3 mouse event
// const moveImage = (img, x, y) => {
//   img.style.left = x - img.offsetWidth / 2;
//   img.style.top = y - img.offsetHeight / 2;
// };

// const onMousedown = event => {
//   const img = event.target;
//   img.style.position = 'absolute';

//   const moveTargetByEvent = e => moveImage(img, e.pageX, e.pageY);
//   // 마우스를 움직이는 동안
//   document.addEventListener('mousemove', moveTargetByEvent);
//   img.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', moveTargetByEvent);
//   });
// };

// 03. window 와 이벤트

// 04. CSS와 애니메이션

// 1 트랜지션
const fadeToRed = event => {
  event.target.style.background = 'red';
};
