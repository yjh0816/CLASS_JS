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
class Player {
  constructor(hp, mp) {
    this.hp = hp;
    this.mp = mp;
  }
  checkHp() {
    alert(`${this.hp} 남았다!`);
  }
}

class Warrior extends Player {
  attack() {
    alert(`공격`);
  }
}

warrior = new Warrior(100, 10);
warrior.attack();
console.log(warrior);
