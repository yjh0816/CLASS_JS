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
// alert(user);

// 2 in 연산자
// const user = {
//   name: 'Kim',
//   age: 20,
// };
// alert('age' in user);
// alert('email' in user);

// for (let key in user) {
//   alert(key);
//   alert(user[key]);
// }

// Object.keys(user); // ['name', 'age']
// Object.values(user); // ['Kim', '20']
// Object.entries(user); // [['name','Kim'], ['age','20']]
// Object.hasOwn(user, 'name'); // true

// 3 복사
// 깊은 복사
// let msg1 = '안녕';
// let msg2 = msg1; // msg2 = 안녕
// msg1 = '잘가';
// alert(msg2); // 안녕

// 앝은 복사, 참조
// let user1 = {
//   name: 'Kim',
// };
// let user2 = user1; // user2 = {name: 'Kim'}
// user1.name = 'Lee'; // user1 = {name: 'Lee'}
// alert(user2.name); // Lee

// 하나하나 복사
// let user1 = {
//   name: 'Kim',
// };
// let user2 = {};
// for (let key in user1) {
//   user2[key] = user1[key];
// }

// let user2 = Object.assign({}, user1);

// 4 메서드
// let user = {
//   name: 'Kim', // 프로퍼티
//   age: 20, // 프로퍼티
//   // 메서드
//   sayHi: function () {
//     alert('안녕');
//   },
// };
// user.sayHi(); // 안녕

// let user = {
//   name: 'Kim', // 프로퍼티
//   age: 20, // 프로퍼티
//   // 메서드
//   sayHi: function () {
//     alert(`${this.name}`);
//   },
// };
// user.sayHi(); // this는 무조건 user가 아님, this는 . 앞에있는 객체를 의미

// let user = {
//   name: 'Kim', // 프로퍼티
//   age: 20, // 프로퍼티
// };

// function sayHi() {
//   alert(`${this.name}`);
// }

// user.sayHi = sayHi;
// console.log(user);
// user.sayHi();

// let user = {
//   name: 'Kim', // 프로퍼티
//   age: 20, // 프로퍼티
//   sayHi: () => {
//     alert(`${this.name}`);
//   },
// };

// user.sayHi();
// // 화살표 함수를 사용하면 this로 접근할 수 없다
// 바로 바깥만 참조

// let user = {
//   name: 'Kim', // 프로퍼티
//   age: 20, // 프로퍼티
//   sayHi: function () {
//     let showMsg = () => alert(`${this.name}`);
//     showMsg();
//   },
// };

// user.sayHi();
// // 바로 바깥은 참조할 수 있어 여기선 참조 가능

// 5 new 생성자
// let user = new Object();
// console.log(user);

// 생성자 함수
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     alert(`저는 ${this.name}입니다.`);
//   };
// }
// let user1 = new User('Kim', 20);
// let user2 = new User('Lee', 25);
// user1.sayHi();
// console.log(user1, user2);

// 6 getter setter
// let user = {
//   name: 'Kim',
//   //   age: 20,
//   birthyear: 2000,

//   // .info로 접근했을 때 실행해
//   get info() {
//     // return `${this.age}살 ${this.name}`;
//     return `${2023 - this.birthyear}살 ${this.name}`;
//   },
// };

// alert(user.info); // 괄호 필요 없음
// // 나이를 저장하면 매년 바꿔야하지만 생년 월일을 저장하면 그럴 필요가 없음

// let user = {
//   name: 'Kim',
//   // 이 프로퍼티의 값을 지정하면 아래 코드를 실행해라
//   set age(value) {
//     alert(`${value}를 할당하셨네요!`);
//   },
// };
// user.age = 2;

// practice 1
// let scores = {
//   Kim: 50,
//   Park: 70,
//   Lee: 80,
// };

// let res = 0;
// for (let key in scores) {
//   res += scores[key];
// }

// console.log(res);

// practice 2
// let player = {
//   hp: 80,
//   mp: 50,
//   heal: function () {
//     this.mp -= 10;
//     this.hp += 10;
//   },
// };

// // p1 = player;
// // console.log(p1);
// // p1.heal();
// // console.log(p1);

// player.heal();
// console.log(player);
// player.heal();
// console.log(player);

// 03. 배열

// 1 배열
// let fruits = ['사과', '바나나', '배'];
// console.log(fruits[0]);

// fruits[0] = '복숭아';
// console.log(fruits);

// fruits[5] = '복숭아';
// console.log(fruits);

// 2 기본 메서드
// let fruits = ['사과', '바나나', '배'];
// let fruit = fruits.pop();
// console.log(fruit);
// console.log(fruits);

// let fruits = ['사과', '바나나', '배'];
// let fruit = fruits.push('복숭아');
// console.log(fruits);

// let fruits = ['사과', '바나나', '배'];
// let fruit = fruits.shift();
// console.log(fruit);
// console.log(fruits);

// let fruits = ['사과', '바나나', '배'];
// let fruit = fruits.unshift('복숭아');
// console.log(fruits);

// let fruits = ['사과', '바나나', '배'];
// console.log(fruits.indexOf('사과'));

// let fruits = ['사과', '바나나', '배'];
// console.log(fruits.includes('사과'));
// console.log(fruits.includes('복숭아'));

// 3 반복문
// let fruits = ['사과', '바나나', '배'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let fruits = ['사과', '바나나', '배'];
// // for in을 써도 작동을 하기는 하나 훨씬 느림
// // array도 객체이기 때문
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let fruits = ['사과', '바나나', '배'];
// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// let fruits = ['사과', '바나나', '배'];
// fruits.forEach((fruit, index) => {
//   console.log(`${fruit}, ${index}`);
// });

// 4 진짜 진짜 중요한 메서드
// find, 하나만 찾음
// let users = [
//   { id: 1, name: 'Kim' },
//   { id: 2, name: 'Lee' },
//   { id: 3, name: 'Park' },
// ];

// let result = users.find((element, index) => element.name === 'Kim');

// console.log(result);

// filter, 여러개를 return
// let users = [
//   { id: 1, name: 'Kim' },
//   { id: 2, name: 'Kim' },
//   { id: 3, name: 'Park' },
// ];

// let result = users.filter(element => element.name === 'Kim');
// let result = users.filter(element => {
//  return element.name === 'Kim';
// });

// console.log(result);

// map, 모든 요소마다 함수 실행
// let users = [
//   { id: 1, name: 'Kim' },
//   { id: 2, name: 'Kim' },
//   { id: 3, name: 'Park' },
// ];

// let result = users.map(element => {
//   return { id: element.id, name: element.name, age: 20 };
// });
// console.log(result);

// reduce, 모든 요소 접근, for보다 훨씬 빠름
// 첫번째 인자는 이전 리턴 값, 초기 값을 지정해줘야함
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(
//   (prevReturn, currentElement) => prevReturn + currentElement,
//   0,
// );
// console.log(result);

// 5 정렬
// let arr = [2, 3, 1, 5, 4];
// arr.sort();
// console.log(arr);

// string처리 되어 2 > 10
// let arr = [1, 2, 10];
// arr.sort();
// console.log(arr);

// 숫자
// let arr = [1, 2, 10];
// arr.sort((a, b) => a - b); // 숫자가 더 큰 것을 뒤에 배치해라
// // a - b < 0 -> a < b : 음수라면 a, b 순으로 배치
// // a - b > 0 -> a > b : 양수라면 b, a 순으로 배치
// console.log(arr);

// practice 1
let scores = {
  Kim: { math: 50, english: 70 },
  Park: { math: 70, english: 60 },
  Lee: { math: 80, english: 50 },
};

let arr = [];
for (key in scores) {
  arr.push(scores[key]);
}
console.log(arr);

let result = scores.filter(element => )

// let result = scores.reduce(
//   (prevScore, currentElement) => prevScore + currentElement,
//   0,
// );
