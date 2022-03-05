// var, let, const 키워드는 변수를 선언할때 쓰는 키워드이다
//var는 스코프의 제한이 없다.
//let과 const는 블락을 스코프 단위로 한다.
//let은 할당되는 데이터가 변할 수 있는 변수이고, const는 변할 수 없는 데이터, 상수가 할당된다.

// 블럭 잡기 => 스코프 설정

// var kkt_name = "고경태";
// kkt_name = "경태고";

// console.log(kkt_name);
// var getName = function ( ) {
//   let kkt_name = "미스터고";
//   return kkt_name;
// };

// getName();

// const TO_BE_JOB = "developer";
// console.log(TO_BE_JOB);


// console.log("JavaScript 프로그래밍");

// var variable = "global 변수";
// const PI = 3.141592;

// {
//   let variable = "블럭의 지역 변수";
//   console.log(variable);
// }

// console.log(variable);
// console.log(`PI = ${PI}`);

// scope = boundary (영역)
// 변수의 유효범위

// var 스코프 - 함수 내부 ..함수 안에서만 스코프를 갖는다
// let, const를 사용할 경우 - 함수 + 블록으로 스코프를 갖는다


console.log("JavaScript 프로그래밍");

var variable = "global 변수";
const PI = 3.141592;

{
  let variable = "블럭의 지역 변수";
  console.log(variable);
}
// 문인데...블럭이 있는 if문 반복문...함수 선언문...은 블럭 구문은 세미클론이 안들어간다.
// IF, Wwhie 문에는 세미콜이 안붇는다
// 식과 문... 식에는 ..함수표현식에는 붙는다..

function functionScope() {
  //함수의 실행 영역
  var variable = "functiond의 Local 변수";
  console.log(variable);
}
functionScope();

console.log(variable);
console.log(`PI = ${PI}`);