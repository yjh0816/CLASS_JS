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
