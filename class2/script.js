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

// 1
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
