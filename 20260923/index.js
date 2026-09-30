// console.log('Hello javascript~');
// console.log('Hello WEB!!');
// alert('추석!');

// 1. 변수 정의(선언과 초기화)
// 변수 정의 기본 문법: var 변수명 = 데이터;
var myScore = 80;
console.log(myScore);

myScore = 90;
console.log(myScore);

myScore = "Hello";
console.log(myScore);

myScore = 3.14;
console.log(myScore);

myScore = "o";
console.log(myScore);

myScore = true;
console.log(myScore);

// 2. 변수 선언 키워드(var, (let, const) -> ES6+)
// var, let : 일반 변수 선언 키워드
// const: 상수 선언

// let myName = "gildong";
// console.log(myName);

// myName = 50;
// console.log(myName);

// const PI = 3.14;
// console.log(PI);

// PI = 3.13;
// console.log(PI);

// Q-01) 변수 myName과 myMajor에 자신의 이름과 전공을 저장하고 출력해보자!
var myName = "홍길동";
var myMajor = "computer";

console.log("myName: ", myName);
console.log("myMajor: ", myMajor); 

var score;
score = 80;

/*
Q-02) 다음 순서에 맞추어 코드를 작성해봅시다.
① intro 변수를 선언하고 'Hello'로 초기화합니다.
② intro 변수에 저장된 값을 화면에 출력합니다.
③ intro 변수의 데이터를 '안녕하세요.'로 변경합니다.
④ 변경된 값을 화면에 출력합니다.
*/

var intro = 'hello';
console.log(intro);     // hello
intro = '안녕하세요.';
console.log(intro);     // 안녕하세요

console.log(intro);     // hello
console.log('intro');   // intro

console.log("intro: ", intro);     // intro: hello

// 3. 변수명 규칙
// 3-1. 영문자를 사용한다.
var gildongAge = 20;
console.log(gildongAge);       // 20

// var 홍길동나이 = 20;
// console.log(홍길동나이);        // 20

// 3-2. 소문자로 시작한다.
var money = 100;  // 권장
var Money = 100;  // 권장하지 않음

// 3-3. 데이터의 의미를 쉽게 파악할 수 있게 짓는다.
// 길동 플레이어

var player = "gildong"; // 권장
var p = "gildong"; // 권장하지 않음
// 점수 score 위치 location 시간 time 현재시간 current_time

// 3-4. 두 개 이상의 단어가 조합될 경우 낙타표기법을 따른다.
// 새로운 아이템 new item -> newitem(비권장) -> newItem(권장)
// 현재위도값 current location latitude
// currentlocationlatitude   currentLocationLatitude
// current_location_latitude current-location-latitude
// CurrentLocationLatitude

// 3-5. 예약어(키워드)는 변수명으로 사용할 수 없다.
// var let const for if else return ...
// var const = 'asdf';

// 3-6. 언더바(_)를 제외한 특수문자는 사용할 수 없다.
var _score = 100;
var $score = 100;
// var !score = 100;
// var ^^score = 100;
// var %score = 100;
// var -score = 100;
// var sc ore = 100;

// 3-7. 숫자는 첫 글자는 제외한 나머지 자리에서만 사용한다.
// var 1player = 'gildong'; (X)
var pla1yer = 'gildong'; (0)
var player1 = 'gildong'; (0)

/*
  • 첫 글자는 소문자로 시작하고 낙타표기법을 따른다. 
  • 언더바(_)를 제외한특수문자, 예약어, 공백문자는 사용하지 않는다.
  • 숫자를 사용할 경우 변수의 중간 또는 뒤에 사용한다.
*/

// 4. 데이터 자료형
// 정수형(Integer): 1, 100, 99, -20, -100, 0
// 실수형(float): 3.14, 0.1, 0.0, -5.129
// 문자열형(String): "Hello", 'Hi', "good", 'a', '', " "
// 논리형(Boolean): true, false

/*
int currentScore = 100;
float currentScore_ = 0.1f;
String currentScore__ = "Hello";
boolean currentScore___ = true;
*/

var currentScore = 100;  // 4byte
var currentScore_ = 0.1;  // 4byte
var currentScore__ = "100";  // 
var currentScore___ = true;  // 1byte

console.log(typeof(currentScore));
console.log(typeof(currentScore_));
console.log(typeof(currentScore__));
console.log(typeof(currentScore___));
