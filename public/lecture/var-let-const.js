// var, let, const 키워드는 변수를 선언할때 쓰는 키워드이다
//var는 스코프의 제한이 없다.
//let과 const는 블락을 스코프 단위로 한다.
//let은 할당되는 데이터가 변할 수 있는 변수이고, const는 변할 수 없는 데이터, 상수가 할당된다.

var kkt_name = "고경태";
kkt_name = "경태고";

console.log(kkt_name);
var getName = function ( ) {
  let kkt_name = "미스터고";
  return kkt_name;
};

getName();

const TO_BE_JOB = "developer";
console.log(TO_BE_JOB);