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
// const fadeToRed = event => {
//   event.target.style.background = 'red';
// };

// const next = () => {
//   let items = document.getElementsByClassName('item');
//   for (let item of items) {
//     item.style.transform = `translate(-100%)`;
//   }
// };

// 3 Timing-function
// const transition = event => {
//   event.target.style.left = '500px';
// };

// 05. 실습: 인터랙티브 UI 구현하기

// practice 1
// const showModal = () => {
//   let modal = document.getElementById('modal');
//   modal.style.display = 'flex';
// };

// const closeModal = () => {
//   let modal = document.getElementById('modal');
//   modal.style.display = 'none';
// };

// practice 2
// let nextCount = 0;
// const next = () => {
//   let items = document.getElementsByClassName('item');
//   nextCount++;
//   for (let item of items) {
//     item.style.transform = `translate(${-100 * nextCount}%)`;
//   }
// };

// const prev = () => {
//   let items = document.getElementsByClassName('item');
//   for (let item of items) {
//     item.style.transform = `translate(${-100 * nextCount + 100}%)`;
//   }
//   nextCount--;
// };

// practice 3 미완성
// const moveItem = (item, x) => {
//   console.log(x);
//   console.log(item.offsetWidth);
//   item.style.transform = `translate(${x}%)`;
// };

// const onMouseDown = event => {
//   let items = document.getElementsByClassName('item');
//   for (let item of items) {
//     const moveTargetByEvent = e => moveItem(item, e.clientX);

//     document.addEventListener('mousemove', moveTargetByEvent);
//     item.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', moveTargetByEvent);
//     });
//   }
// };

// 06. 모듈

// 6회차
// 01. 비동기와 콜백

// 1 콜백
// let user = {
//   name: 'Kim',
//   age: 20,
//   setUserInfo: function (name, age) {
//     this.name = name;
//     this.age = age;
//   },
// };

// function dispatchUserInfo(user, name, age, callback) {
//   callback.call(user, name, age);
// }

// dispatchUserInfo(user, 'Lee', 15, user.setUserInfo); // user.setUserInfo('Lee', 15) 실행

// 2 비동기와 콜백
// function appendHello() {
//   let hello = document.createElement('p');
//   hello.innerText = '안녕하세요';
//   setTimeout(() => document.body.append(hello), 2000); // 비동기 동작
// }

// appendHello(); // 비동기 동작
// console.log(document.getElementsByTagName('p'));

// function appendHello(callback) {
//   let hello = document.createElement('p');
//   hello.innerText = '안녕하세요';
//   setTimeout(() => {
//     document.body.append(hello);
//     callback();
//   }, 2000); // 동기 동작
// }

// appendHello(() => {
//   console.log(document.getElementsByTagName('p'));
// }); // 동기 동작

// 3 콜백 지옥
function appendText(text, callback) {
  let p = document.createElement('p');
  p.innerText = text;
  setTimeout(() => {
    document.body.append(p);
    callback();
  }, 2000); // 동기 동작
}

//지옥
// appendText('안', () => {
//   appendText('녕', () => {
//     appendText('하', () => {
//       appendText('셍');
//     });
//   });
// });

// 개선
// const step1 = () => {
//   appendText('안', step2);
// };

// const step2 = () => {
//   appendText('녕', step3);
// };

// const step3 = () => {
//   appendText('하', step4);
// };

// const step4 = () => {
//   appendText('셍');
// };

// practice

// function appendDiv(callback) {
//   let div = document.createElement('div');
//   div.style.width = '100px';
//   div.style.height = '100px';
//   setTimeout(() => {
//     document.body.append(div);
//     callback();
//   }, 2000);
// }

// appendDiv(() => {
//   let div = document.querySelectorAll('body > div')[0];
//   console.log(div);
//   div.style.backgroundColor = 'lightblue';
// });

// 02. Promise

// 1 Promise의 개념

// resolve
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('실행 완료'), 1000);
// });
// // promise 내부 코드가 실행이 완료됐을때 실행할 코드
// promise.then(result => {
//   alert(result);
// });

// reject, promise chaning
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('에러 발생')), 1000);
// });

// promise.then(() => {
// }).catch(error => {
//   alert(error);
// }).finally(() => {

// })

// promise chaning
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('에러 발생')), 1000);
// });

// promise.then(result => {
//   return result
// }).then(result => {
//   return result
// })

// 03. Async, Await

// 1 async와 await

// async
// 비동기 함수 선언
// async function hello() {
//   return '안녕'; // 무조건 promise를 return
// }

// hello().then(result => {
//   console.log(result);
// });

// await 기다렸다가 실행
// async function hello() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('안녕'), 1000);
//   });
//   let result = await promise; // 프로미스 이행되기까지 대기 (then과 동일)
//   alert(result);
// }

// hello();

// 05. Fetch 연습

// 1 jsonplaceholder
// let response = fetch('https://jsonplaceholder.typicode.com/posts/1');
// console.log(response); // return Promise

// fetch('https://jsonplaceholder.typicode.com/posts/1').then(result => {
//   console.log(result);
// });

// 옛날 방식
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(result => {
//     return result.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// 요즘 방식?
// async function getPostList() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   let data = await response.json();
//   console.log(data);
// }

// addPost
// post = {
//   title: '안녕',
//   body: '내용이야.내용이야.내용이야.내용이야.내용이야.',
// };

// async function addPost(post) {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   let data = await response.json();
//   console.log(data);
// }

// updatePost
// post = {
//   title: '수정된 제목',
//   body: '수정된 내용',
// };

// async function updatePost(post, id) {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       method: 'PUT',
//       body: JSON.stringify(post),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     },
//   );
//   let data = await response.json();
//   console.log(data);
// }

// deletePost
// async function deletePost(id) {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       method: 'DELETE',
//     },
//   );
//   let data = await response.json();
//   console.log(data);
// }

// 2 get 활용하기
// async function getPostDetail(id) {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//   );
//   let data = await response.json();
//   return data;
// }

// // getPostDetail(1).then(data => {
// //   let title = document.getElementById('title');
// //   title.innerText = data.title;
// //   let body = document.getElementById('body');
// //   body.innerText = data.body;
// // });

// async function insertPost(id) {
//   let data = await getPostDetail(id);
//   let title = document.getElementById('title');
//   title.innerText = data.title;
//   let body = document.getElementById('body');
//   body.innerText = data.body;
// }

// 3 post 활용하기
// async function addPost(post) {
//   let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   let data = await response.json();
//   return data;
// }

// async function submitPost() {
//   let post = {
//     title: document.getElementById('title').value,
//     body: document.getElementById('body').value,
//   };
//   let result = await addPost(post);
//   console.log(result);
// }

// practice

// api
async function getPostDetail(id) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  let data = await response.json();
  return data;
}

async function updatePost(post, id) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  let data = await response.json();
  return data;
}

async function getPostList() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await response.json();
  return data;
}

async function deletePost(id) {
  console.log(id);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'DELETE',
    },
  );
  // let data = await response.json(); // 굳이 추출할 필요는 없음 보통 204
  // return data;
  return response.status;
}

// function
async function erasePost(id) {
  let data = await deletePost(id);
  let div = document.getElementById(`${id}`);
  div.remove();
}

async function showPostList() {
  let data = await getPostList();
  data.forEach(element => {
    document.body.insertAdjacentHTML(
      'beforeEnd',
      `<div id="${element.id}">
        <h2>${element.title}</h2>
        <p>${element.body}</p>
        <button onclick="erasePost(${element.id})">삭제</button>
      </div>`,
    );
  });
}

async function showPostDetail(id) {
  let data = await getPostDetail(id);
  let title = document.getElementById('title');
  let body = document.getElementById('body');
  title.value = data.title;
  body.value = data.body;
}

async function modifyPost(id) {
  let post = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value,
  };
  let data = await updatePost(post, id);
  console.log(data);
  let div = document.getElementById(`${id}`);
  div.innerHTML = `
  <div id="${data.id}">
    <h2>${data.title}</h2>
    <p>${data.body}</p>
    <button onclick="erasePost(${data.id})">삭제</button>
  </div>`;
}

showPostList();
showPostDetail(1);

let button = document.querySelectorAll('button')[0];
button.onclick = () => modifyPost(1);

// practice 2

// const LOCATION = {
//   london: {
//     latitude: 51.51,
//     longitude: -0.13,
//   },
//   newyork: {
//     latitude: 40.71,
//     longitude: -74.01,
//   },
//   seoul: {
//     latitude: 37.57,
//     longitude: 126.98,
//   },
// };

// async function getInfo(country) {
//   console.log(LOCATION[country].latitude);

//   let response = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${LOCATION[country].latitude}&longitude=${LOCATION[country].longitude}&daily=weathercode&current_weather=true&timezone=auto`,
//   );
//   let data = await response.json();
//   return data;
// }

// async function showInfo(event) {
//   country = event.target.id;
//   let data = await getInfo(country);
//   console.log(data);
//   weather = data.current_weather.weathercode;
//   if (weather === 0) {
//     weather = '매우 맑음';
//   } else if (weather === 1) {
//     weather = '맑음';
//   } else if (weather === 2) {
//     weather = '약간 흐림';
//   } else if (weather === 3) {
//     weather = '흐림';
//   }
//   let div = document.getElementById('country');
//   div.innerHTML = `<div id="country"><p>${event.target.innerText}</p><h2>${weather}</h2><br><p>현재 기온:${data.current_weather.temperature}도</p><br><p>기준시간:${data.current_weather.time}</p></div>`;
// }
