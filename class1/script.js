// 1회차
// 02. 변수

// 1 alert와 console.log
// alert('내용');
// console.log('내용입니다');

// 2 변수 선언
// let a = 'Hello';
// alert(a);

// 3 최신 문법
// "use strict";
// a = 'Hello';
// alert(a);

// 4 변수와 상수
// let a = 'Hello'; // 변수
// a = 'Bye';

// const b = 'Hello'; // 상수
// b = 'Bye' // 에러 발생

// let c;  // undefined
// c = 'ASDASD';

// var // 옛날 코드, 안정성 문제로 사용하지 않음

// 03. 자료형과 연산자

// 1 산술 연산자
// let x = 5;
// x++;
// alert( x );

// 2 대입 연산자
// let x = 1;
// x+=2;
// alert(x);

// 3 템플릿 리터럴
// let name = '이주형';
// alert(`안녕하세요 저는 ${name}입니다`);

// 4 문자열 추출하기, 길이 구하기, 분리하기, 포함 여부 확인
// let str = "hello world";
// alert(str.slice(0,5)); // 0번~4번 문자까지 추출 (hello)
// alert(str.length);
// alert(str.split(' ')[0]);
// alert(str.includes('hello')); // true

// 04. 상호작용

// 1 prompt
// let input = prompt('이름을 입력하세요','디폴트값');
// alert(`당신의 이름은 ${input}입니다`);

// 2 comfirm
// let input = confirm('글을 삭제하시겠습니까?');
// alert(input);

// 05. 조건문 / 타입변환

// 1 조건문
// let x = 3;
// let x = 1;
// const isThree = (x === 3);
// if (x === 3) {
//     alert('x는 3입니다.');
// }
// if (isThree) {
// alert('x는 3입니다.');
// }

// 2 if else문
// let age = prompt('나이가 어떻게 되세요?','');

// if(age > 18) {
//     alert('성인');
// } else {
//     alert('미성년자');
// }

// 3 else if문
// let age = prompt('나이가 어떻게 되세요?','');

// if (age > 18) {
//     alert('성인');
// } else if (age > 10) {
//     alert('청소년');
// } else {
//     alert('아기');
// }

// 4 삼항연산자
// let age = prompt('나이가 어떻게 되세요?','');
// age > 18 ? alert('성인') : alert('미성년자');
// (age > 18) ? alert('성인') : (age > 10) ? alert('청소년') : alert('아기')

// 5 타입 변환
// let age = '1';
// numAge = Number(age);
// age = String(numAge);

// let age = prompt('나이를 입력해주세요','');
// alert(typeof age);
// alert(typeof Number(age));

// 6 swtich
// let device = 'Desktop';
// switch(device) {
//     case 'Desktop':
//         alert('데스크탑 입니다');
//         break;
//     case 'Tablet':
//         alert('태블릿 입니다');
//         break;
//     case 'Mobile':
//         alert('모바일 입니다');
//         break;
//     default:
//         alert('알수없음');
// }

// practice 1
// let userPoint = prompt('점수를 입력하세요','');
// userPoint = Number(userPoint);
// if (userPoint >= 95) {
//     alert('A');
// } else if (userPoint >= 90) {
//     alert('B');
// } else if (userPoint >= 85) {
//     alert('C');
// } else {
//     alert('F');
// }

// practice 2
// let firstInput = Number(prompt('첫번째 숫자를 입력하세요',''));
// let secondInput = Number(prompt('두번째 숫자를 입력하세요',''));
// isOdd = firstInput % 2 ? true : false;
// isOdd2 = secondInput % 2 ? true : false;
// if (isOdd && isOdd2) {
//     alert('isOdd');
// }

// 강사님 풀이
// if (num1 % 2 === 0 && num2 ===0) {
//     alert('짝수');
// } else if (num1 % 2 === 1 && num2 % 2 === 1) {
//     alert('홀수');
// }

// 06. 반복문

// 1 while
// let i = 0;

// while (i < 3) {
//     alert(i);
//     i++;
// }

// 2 for
// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// 3 break, continue
// for (let i = 0; i < 10; i++) {
// 	if (i === 2) break;
// 	alert(i);
// }

// for (let i = 0; i < 10; i++) {
// 	if (i === 2) continue;
// 	alert(i);
// }

// practice 1
// for(let i = 1; i < 100+1; i++) {
//     if (i % 2 === 0) console.log(i);
// }

// practice 2
// input = prompt('그만을 입력하세요','');
// while (input !== '그만') {
//     input = prompt('그만을 입력하세요','');
// }

// 강사님 풀이
// let flag = 0;
// while (!flag) {
//     input = prompt('그만할까요?');
//     if (input === '그만') flag = 1;
// }

// 07. 함수

// 1 함수
// function showMsg(){
//     alert('안녕안녕');
//     alert('안녕안녕');
//     alert('안녕안녕');
// }

// function showMsg(msg){
//     alert(msg);
// }

// mag = '잘가';

// function showMsg(){
//     let msg = '안녕';
//     alert(msg);
// }
// alert(msg);

// showMsg();

// 2 리턴
// function sum(a, b) {
//     return a + b;
// }

// alert(sum(3, 4));

// result = sum(3, 4);
// alert(result);

// practice 1
// function multiples(num) {
//     for (let i=1; i<10+1; i++) {
//         console.log(num * i);
//     }
// }
// multiples(2);

// practice 2
// function multiples(num) {
//     let result = 0;
//     for (let i=1; i<10+1; i++) {
//         result += num * i;
//     }
//     return result;
// }

// answer = multiples(1);
// alert(answer);

// practice 3
// function checkAdult(name, age) {
//     let isAdult = '';
//     if (age >= 20) {
//         isAdult = '성인';
//     } else {
//         isAdult = '미성년자';
//     }
//     alert(`${name}님은 ${isAdult}입니다.`)
// }

// Practice 1
// function rps() {
//     flag = true;
//     while(flag) {
//         let userInput = Number(prompt('1)가위 2)바위 3)보 4)exit'));
//         if (userInput === 4) return flag = false;
//         let computerInput = Math.floor(Math.random() * 3) + 1;
//         isUserWin = '';
//         isComWin = '';

//         if (userInput > computerInput) {
//             if (userInput != 3) {
//                 isUserWin = '승';
//                 isComWin = '패';
//             } else {
//                 isUserWin = '패';
//                 isComWin = '승';
//             }
//         } else if (userInput < computerInput) {
//             if (userInput != 3) {
//                 isUserWin = '패';
//                 isComWin = '승';
//             } else {
//                 isUserWin = '승';
//                 isComWin = '패';
//             }
//         } else {
//             isUserWin = '무';
//             isComWin = '무';
//         }
//         console.log(computerInput);
//         alert(`유저: ${isUserWin}, 컴퓨터: ${isComWin}`);
//     };
// }

// 강사님 풀이
// let choices = ['가위', '바위', '보'];
// let user = prompt('1)가위 2)바위 3)보 4)exit');
// let computer = choices[Math.floor(Math.random() * 3)];

// const isUserWin = (computer === '가위' && user === '바위')
// || (computer === '바위' && user === '보')
// || (computer === '보' && user === '가위')

// const isUserLose = (computer === '가위' && user === '보')
// || (computer === '바위' && user === '가위')
// || (computer === '보' && user === '바위')

// alert('컴퓨터는 ' + computer );
// if (computer === user) {
//     alert('무승부');
// } else if (isUserWin) {
//     alert('유저 승');
// } else if (isUserLose) {
//     alert('유저 패');
// }

// Practice 2
// function numGuess() {
//     flag = true;
//     ans = Math.floor(Math.random() * 100) + 1;

//     while(flag) {
//         let userInput = Number(prompt('숫자를 입력하세요'));
//         if (userInput > ans) {
//             alert('다운');
//         } else if (userInput < ans) {
//             alert('업');
//         } else {
//             alert('You win!');
//             flag = false;
//         }
//     }
// }

// Practice 3
// function baskinRobins31() {
//     goal = 0;
//     while (true) {
//         let userInput = Number(prompt('숫자를 입력하세요(1~3)'));
//         for (let i = 1; i < userInput+1; i++) {
//             console.log('user');
//             console.log(++goal);
//             if (goal === 31) return false;
//         }
//         let computerInput = Math.floor(Math.random() * 3) + 1;
//         for (let i = 1; i < computerInput+1; i++) {
//             console.log('com');
//             console.log(++goal);
//             if (goal === 31) return true;
//         }
//     }
// }

// 강사님 풀이
// let number = 0;
// let isFinished = 0;

// while(!isFinished) {
//     let user = prompt('부르고 싶은 숫자만큼 띄어쓰기해서 입력해주세요','').split(' ');
//     number += user.length;
//     if (number >= 31) {
//         alert('컴퓨터가 이김 게임 종료');
//         isFinished = 1;
//     }
//     console.log(number);
//     let computer = Math.floor(Math.random() * 10) % 3 + 1;
//     number += computer;
//     if (number >= 31) {
//         alert('유저 이김 게임 종료');
//         isFinished = 1;
//     }
//     console.log(number);
// }

// 필승법도 있음. 무조건 이기는 알고리즘도 구현 추천

// 2회차
// 01. 함수의 생성 방식

// 1 블록, 함수, 전역 스코프
// let msg = '난 전역스코프';

// function showMsg() {
// 	let msg = '난 함수스코프';
// 	if (true) {
// 		let msg = '난 블록스코프'; // 함수 밖에 msg가 있지만, 여기서 선언한 msg가 우선됨 (블록스코프)
// 		alert(`블록스코프:${msg}`);
// 	}
// 	alert(`함수스코프:${msg}`);
// }

// showMsg();
// alert(`전역스코프:${msg}`);

// 2 호이스팅
// showMsg(); // 안녕

// function showMsg() {
//   alert('안녕');
// }

// 3 매개변수 지정과 동시에 함수 생성
// 선언문만 사용하면 실행이 불가능
// 표현식으로 사용하면 실행과 동시에 선언

// 4 화살표 함수
// function sum(a, b) {
//     // 선언식
//     return a + b;
// }

// let sum = function(a, b) {
//     // 표현식
//     return a + b;
// }

// let sum = (a, b) => {
//     // 화살표 함수
//     return a + b;
// }

// practice 1
// function calculator(type, a, b) {
//   if (type === 'sum') {
//     return a + b;
//   } else if (type === 'subtract') {
//     return a + b;
//   } else {
//     alert('올바른 타입을 명시해주세요.');
//   }
// }

// let calculator = function (type, a, b) {
//   if (type === 'sum') {
//     return a + b;
//   } else if (type === 'subtract') {
//     return a + b;
//   } else {
//     alert('올바른 타입을 명시해주세요.');
//   }
// };

// let calculator = (type, a, b) => {
//   if (type === 'sum') {
//     return a + b;
//   } else if (type === 'subtract') {
//     return a + b;
//   } else {
//     alert('올바른 타입을 명시해주세요.');
//   }
// };

// 02. 객체

// 1 객체
// const user = {
//   name: 'Kim',
//   age: 20,
// };

// // user = {}; // error
// user.age = 30;
// alert(user.age);

// let name = 'Kim';
// const user = {
//   name,
//   age: 20,
// };

// console.log(user);

// 2
