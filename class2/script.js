// 3회차
// 01. 프로토타입

// 1 프로토타입
// let obj = new Object();
// alert(obj); // [object Object]
// console.log(obj);

// let obj = [];
// alert(obj);
// console.log(obj);

// 2 프로토타입 접근
// Object.prototype.toString = () => {
//   return '오브젝트입니다';
// };
// let obj = new Object();
// alert(obj);
// console.log(obj);

// 3 프로토타입 상속
// let player = {
//   hp: 50,
// };

// let warrior = {
//   ap: 20,
//   mp: 0,
// };

// warrior.__proto__ = player; // player 상속
// console.log(warrior.hp);
// console.log(warrior); // prototype안에 hp가 상속됨

// let arr = [];
// console.log(arr); // prototype 안에 prototype

// let superWarrior = {
//   skill() {
//     alert('스킬을 사용했다');
//   },
//   __proto__: warrior,
// };

// console.log(superWarrior);

// 4 this

// let player = {
//   hp: 50,
//   checkHp: function () {
//     alert(`체력이 ${this.hp} 남음`);
//   },
// };

// player.checkHp(); // 50

// let warrior = {
//   hp: 70,
//   __proto__: player,
// };

// warrior.checkHp(); // 70, this는 .앞에 있는 객체를 말한다

// 5 반복문
// let player = {
//   hp: 50,
// };

// let warrior = {
//   ap: 20,
//   mp: 0,
//   __proto__: player,
// };
// console.log(Object.keys(warrior)); // ap,mp
// for (let key in warrior) {
//   alert(key); // ap, mp, hp
// }

// 6 생성자 함수
// let player = {
//   hp: 50,
// };

// function Warrior(name) {
//   this.name = name;
//   this.__proto__ = player;
// }
// let warrior = new Warrior('이름');
// console.log(warrior);

// practice 1
// let employee = {
//   goToWork: function () {
//     alert('출근');
//   },
//   offWork: function () {
//     alert('퇴근');
//   },
// };

// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
//   this.__proto__ = employee;
// }

// let employee1 = new Employee('Kim', 20);
// console.log(employee1);

// 02. 클래스 기본

// 1 클래스
// class User {
//   constructor(name, age) {
//     // __init__
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     alert(`안녕하세요 저는 ${this.name} 입니다.`);
//   }
//   sayBye() {
//     alert(`잘가`);
//   }
// }
// console.log(typeof User); // class도 생성자 함수 구조
// let kim = new User('Kim', 20);
// kim.sayHi();

// 2 getter setter
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get age() {
//     return this.asd;
//   }
//   // setter를 쓰면 set 안에 커스텀 함수를 실행함
//   set age(value) {
//     return (this.asd = value);
//   }
// }

// let kim = new User('Kim');
// kim.age = 150;
// console.log(kim);
// console.log(kim.age); // getter가 없으면 undefined

// 3 클래스 필드 신기능
// class SeoulUser {
//   city = 'Seoul';

//   constructor(name, age) {
//     (this.name = name), (this.age = age); // 생성자를 통해서 age 에 값이 지정되는 순간 setter 실행
//   }
// }

// let user = new SeoulUser('Kim', 20);
// console.log(user.city); // Seoul

// 4 상속
// class Player {
//   constructor(hp, mp) {
//     this.hp = hp;
//     this.mp = mp;
//   }
//   checkHp() {
//     alert(`${this.hp} 남았다!`);
//   }
// }

// class Warrior extends Player {
//   attack() {
//     alert(`공격`);
//   }
// }

// warrior = new Warrior(100, 10);
// warrior.attack();
// console.log(warrior);

// practice 1
// class Employee {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   goWork() {
//     alert(`${this.name} 출근`);
//   }
//   offWork() {
//     alert(`${this.name} 퇴근`);
//   }
// }

// class Planning extends Employee {
//   plan() {
//     alert(`기획`);
//   }
// }

// class Development extends Employee {
//   develop() {
//     alert(`개발`);
//   }
// }

// let planning = new Planning('Kim', 20);
// planning.goWork();
// planning.plan();
// planning.offWork();

// let development = new Development('Lee', 25);
// development.goWork();
// development.develop();
// development.offWork();

// 03. 클래스 심화

// 04. 에러처리

// 1 try catch
// alert('안녕');
// alert(none); // 에러 발생
// alert('잘가'); // 수행하지 않음

// try {
//   console.log(none); // none 이라는 변수는 없음
//   console.log('이 부분은 실행되지 않음'); // 위에서 에러가 발생했으니 실행 X
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }

// 2 throw, finally
// let successData = { name: 'Kim', age: 30 }; // 완전한 데이터
// let errorData = { age: 30 }; // 불완전한 데이터

// let dataShow = data => {
//   alert(data);
// };

// try {
//   dataShow(successData.name);
// } catch (err) {
//   console.log(err);
// }
// // SyntaxError, Error -> 에러 객체를 생성하기 위한 생성자 함수
// try {
//   if (!errorData.name) {
//     throw new SyntaxError('데이터 에러: 이름 없음'); // 에러 발생시키기
//   }
//   dataShow(errorData.name); // undefined
// } catch (err) {
//   console.log(err);
// } finally {
//   alert('코드 실행 완료');
// }

// practice 1
// 결과 값을 프로퍼티로 저장하고
// 뒤로 돌아가면 전 결과 값으로 돌아가도록
// 1 + 1 = 2 + 1 = 3 에서 돌아가면 2

// 1 전 결과 값을 모두 저장한다
// 2 계산을 위한 연산자와 두번째 인자를 모두 저장한다
// class Calculator {
//   _result = 0;
//   operator = [];

//   constructor(fristNum) {
//     this._result = fristNum;
//   }
//   add(secondNum) {
//     this.operator.push('+', secondNum);
//     return (this._result += secondNum);
//   }
//   mod(secondNum) {
//     this.operator.push('-', secondNum);
//     return (this._result -= secondNum);
//   }
//   mul(secondNum) {
//     this.operator.push('*', secondNum);
//     return (this._result *= secondNum);
//   }
//   div(secondNum) {
//     this.operator.push('/', secondNum);
//     return (this._result /= secondNum);
//   }
//   undo() {
//     try {
//       secondNum = this.operator.pop();
//       operator = this.operator.pop();
//     } catch {}
//   }
// }

// my class
// class Calculator {
//   _result = 0;
//   prev_result = [];
//   flag = true;

//   constructor(fristNum) {
//     this._result = fristNum;
//     this.prev_result.push(this._result);
//   }
//   add(secondNum) {
//     this._result += secondNum;
//     this.prev_result.push(this._result);
//     this.flag = true;
//     return this._result;
//   }
//   mod(secondNum) {
//     this._result -= secondNum;
//     this.prev_result.push(this._result);
//     this.flag = true;
//     return this._result;
//   }
//   mul(secondNum) {
//     this._result *= secondNum;
//     this.prev_result.push(this._result);
//     this.flag = true;
//     return this._result;
//   }
//   div(secondNum) {
//     this._result /= secondNum;
//     this.prev_result.push(this._result);
//     this.flag = true;
//     return this._result;
//   }
//   undo() {
//     try {
//       if (this.flag) {
//         this.prev_result.pop();
//         this.flag = false;
//       }
//       this._result = this.prev_result.pop();
//       if (!this._result) {
//         throw new ReferenceError('참조 에러: 이전 값 없음');
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       console.log('취소 완료');
//     }
//   }
// }

// calculator = new Calculator(1);

// 강사님 풀이
// class Calculator {
//   history = [];

//   constructor(num) {
//     this.resultNumber = num;
//   }
//   get resultNumber() {
//     return this._resultNumber;
//   }
//   set resultNumber(num) {
//     this._resultNumber = num;
//     this.history = [...this.history, num];
//   }
//   sum(num) {
//     this.resultNumber += num;
//   }
//   sub(num) {
//     this.resultNumber -= num;
//   }
//   mul(num) {
//     this.resultNumber *= num;
//   }
//   div(num) {
//     this.resultNumber /= num;
//   }
//   undo() {
//     this.resultNumber = this.history[this.history.length - 2];
//     this.history = this.history.slice(0, this.history.length - 2);
//   }
// }

// let calculator = new Calculator(1);

// 4회차

// 02. DOM API 기본

// 1 id
// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes);
// console.log(document.body.children);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.previousElementSibling); // head

// console.log(document.body.parentNode); // document

// let title = document.getElementById('title');
// let content = document.getElementById('content');
// content.innerText = 'asd';

// console.log(title, content);

// 2 class
// let div = document.getElementsByClassName('second-div'); // 요소들
// let div = document.getElementsByClassName('second-div')[0]; // 요소들
// console.log(div);
// div.innerText = 'asds';

// 3 tag
// let a = document.getElementsByTagName('a')[0];
// console.log(a.href);
// a.href = 'http://daum.net';

// 4 query selector all
// let div = document.querySelectorAll('div');
// console.log(div);

// let div = document.querySelectorAll('div.second');
// console.log(div);

// let a = document.querySelectorAll('p > a');
// console.log(a);

// let first = document.querySelectorAll('#first');
// console.log(first);

// let second = document.querySelectorAll('.second');
// console.log(second);

// practice
// let firstId = document.getElementById('first');
// console.log(firstId);

// let a = document.getElementsByTagName('a');
// console.log(a);

// let div = document.getElementsByTagName('div');
// console.log(div);

// let second = document.getElementsByClassName('second');
// console.log(second);

// let secondDiv = document.querySelectorAll('div.second');
// console.log(secondDiv);

// let secondDivA = document.querySelectorAll('div.second > a');
// console.log(secondDivA);

// 03. DOM API 활용

// 1 노드의 프로퍼티
// let firstDiv = document.getElementById('firstDiv');
// firstDiv.tagName; // div
// firstDiv.innerHtml;
// firstDiv.innerText;

// 2 스타일 수정하기
// let blueDiv = document.getElementsByClassName('blue-div')[0];
// let redDiv = document.getElementsByClassName('red-div')[0];

// 3 HTML 프로퍼티
// let img = document.getElementById('img');
// let google = document.getElementById('google');

// practice 1
// let naver = document.querySelectorAll('a')[1];
// naver.innerText = '네이버로 가기';
// naver.setAttribute('href', 'http://www.naver.com');

// practice 2 미완성
// let box = document.getElementsByClassName('box')[0];
// box.classList.add('box');
// box.classList.add('blue-background');
// box.innerHTML = '<h1>안녕</h1>';
// box.innerHTML.classList.add('white');

// 04. DOM 요소 관리

// 1 요소 생성 및 추가
// append, prepend // 내부
// before, after // 외부

// 2 인접 요소 추가
// let firstBox = document.getElementById('firstBox');
// beforeBegin = before
// afterBegin = prepend
// beforeEnd = append
// afterEnd = after

// 05. 이벤트 기초

// 1 브라우저 이벤트
// let onclick = document.getElementsByTagName('button')[0];
// onclick.onclick = function () {
//   alert('2');
// };

// function toggleMenu() {
//   let menu = document.getElementById('menu');
//   menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
// }

// 2 this
// this는 이벤트가 발생한 그 html tag를 가리킨다

// 3 이벤트 리스너
// let firstBox = document.getElementById('firstBox');
// function sayHi() {
//   alert('안녕');
// }

// firstBox.addEventListener('click', sayHi); // 함수에 () 를 붙이면 안됨!
// let inputBox = document.getElementById('inputBox');
// inputBox.addEventListener('focus', sayHi);

// // 4 이벤트 객체
// function showResult() {
//   num1 = document.getElementById('firstInput');
//   num2 = document.getElementById('secondInput');

//   res = document.getElementById('result');
//   res.innerHTML = `<h1 id="answer">${
//     Number(num1.value) + Number(num2.value)
//   }</h1>`;
// }

// function minusNum() {
//   res = document.getElementById('answer').innerText;
//   res.innerText = `<h1>${Number(res) - 1}</h1>`;
// }

// 07. 함수 호출 스케쥴링

// 1 setTimeout
// function countUp(target) {
//   target.innerText = Number(target.innerText) + 1;
// }
// let num = document.getElementById('num');
// let timer = setInterval(countUp, 1000, num); // 타이머 아이디가 timer 에 할당

// let stopButton = document.getElementById('stopButton');
// stopButton.onclick = function () {
//   clearInterval(timer); // let timer 에서 만든 그 타이머를 중지
// };

// 2 Date
// let now = new Date(); // 현재 시간을 자동으로 가져옴
// console.log(now);

// practice
// let now = '';
// let timer = '';

// function setCountryLondon() {
//   clearInterval(timer);
//   now = new Date().toLocaleString('kr-KO', {
//       timeZone: 'Europe/London',
//     });
//   let time = document.getElementById('time');
//   time.innerText = now;
//   timer = setInterval(setCountryLondon, 1000);
// }
// function setCountryNewYork() {
//   clearInterval(timer);
//   now = new Date().toLocaleString('kr-KO', {
//       timeZone: 'America/New_York',
//     });
//   let time = document.getElementById('time');
//   time.innerText = now;
//   timer = setInterval(setCountryNewYork, 1000);

// }
// function setCountrySeoul() {
//   clearInterval(timer);
//   now = new Date().toLocaleString('kr-KO', {
//       timeZone: 'Asia/Seoul',
//     });
//   let time = document.getElementById('time');
//   time.innerText = now;
//   timer = setInterval(setCountrySeoul, 1000);
// }

// 강사님 풀이
const TIMEZONE = {
  london: 'Europe/London',
  newyork: 'America/New_York',
  seoul: 'Asia/Seoul',
};
let timer;

function setTimeByCountry(country) {
  let now = new Date().toLocaleString('kr-KO', {
    timeZone: TIMEZONE[country],
  });
  let time = document.getElementById('time');
  time.innerText = now;
}

function setTime(event) {
  clearInterval(timer);
  // setTimeByCountry(event.target.id);
  timer = setInterval(setTimeByCountry, 1000, event.target.id);
}
