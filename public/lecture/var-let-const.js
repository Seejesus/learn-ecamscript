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


// console.log("JavaScript 프로그래밍");

// var variable = "global 변수";
// const PI = 3.141592;

// {
//   let variable = "블럭의 지역 변수";
//   console.log(variable);
// }
// 문인데...블럭이 있는 if문 반복문...함수 선언문...은 블럭 구문은 세미클론이 안들어간다.
// IF, Wwhie 문에는 세미콜이 안붇는다
// 식과 문... 식에는 ..함수표현식에는 붙는다..

// function functionScope() {
//   //함수의 실행 영역
//   var variable = "functiond의 Local 변수";
//   console.log(variable);
// }
// functionScope();

// console.log(variable);
// console.log(`PI = ${PI}`);

// 금고 보호하기 +  외부에 접근 차단
// 외부의 접근을 허용하되,  읽기만 가능하고 쓰기X 제한하기...
//get~ 


//경태 : 집 금고 (보호)
// 경태님 집의 금고를 외부의 침입으로부터 보호한다.
//객체 표현식은 스코프 블럭이 아니다.
// scope { } or function scope
//외부의 침입으로부터 보호

// function creageBox() {

// }
//나조차도 접근못하는 문제가 된다.

//누구나 접근 가능한 상태
// const obj = {
//    state: {
//     name: "상태"
//    }
// };

// 읽기 (외부에서 접근 가능한 상태)
// console.log(obj.state);

// 쓰기 (외부에서 조작이 가능한 상태) 외부에서 변경이 가능한 상태가 되버린다..보호할 필요가 있는거! 위험해진다.
// obj.state = null;  

// 이걸 보호 하고 싶다. 읽기만 해주고 싶다..특정한 방식으로만 읽기해주기
//어떻게 보호할 수이짐? 
// _ <--이거 건들지 말아주세요 라는 시그널...하지만 보호가 되진 않는다/
// 보안을 철저하게 하기! 핵심은 스코프 활용! 

// const tightSecurity = (() => {
//   return {};
// })()

//타이트 시큐러티는 결국 객체가 된다.


// const tightSecurity = (() => {
//   const secreData = {
//     level:0,
//     name: "회사의 사운을 걸만한 기밀 정보"
//   }
//   return {
//     getSecretData: function() {
//       return secreData;
//     },
//   };
// })(); 
//오직 데이터는 내부에서만 가능하게 하기...클로저... 

//key값을 통해...특정한 키를 갖고 있는 사람만 사용할 수 있게도 가능해준다..
// tigjtSecruriy.getSecretData() 



// const tightSecurity = (() => {
//   const secreData = {
//     level:0,
//     name: "회사의 사운을 걸만한 기밀 정보",
//     readingLevelKey: "ts@2022"
//   }
//   return {
//     getSecretData: function(key) {
//       if (key !== secreData.readingLevelKey) {
//         throw new Error("기밀 정보에 접근할 수 없습니다");
//       }
//       return secreData;
//     },
//   };
// })(); 

// 바로 실행되므로, money는 리턴 객체를 갖고있는다..머니는 객체이다..
const money = (() => {
  const data = {
    moneyPassword: 1234,
    content: "돈에 관한 정보",
    readingLevelKey: "ts@2022"
   }
   const access = {
     getData: (key) => {
       if (key !== data.readingLevelKey) {
         throw new Error("접근을 할 수 없습니다")
       }
       return data.moneyPassword
     }
   }
   return access 
})();

var password = money.getData("ts@2022");
console.log(password);