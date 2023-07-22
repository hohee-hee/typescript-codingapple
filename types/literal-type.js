let definedName; // 무조건 kim만 들어올 수 있음
// definedName = "Park"; // 불가
let me;
me = "대머리";
console.log(me);
// 함수도 가능
// 함수의 리턴값도 제한 가능
// 들어올 수 없는 파라미터가 많지 않을 때 제한하면 유리!
function func100(a) {
    +console.log(a);
    return 1;
}
func100("hello");
// 1. 가위바위보 중 1개만 파라미터로 입력 가능
// 2. 가위바위보만 들어올 수 있는 array를 return 해야함
function rsp(param) {
    return ["rock"];
}
// const 변수의 한계
const var1 = "kim"; // 원하는 값을 2개 이상 저장하지 못함.
var data = {
    name: "kim",
};
console.log(data.name); // kim
function myFunc(a) { }
// myFunc(data.name);
// error : myFunc의 파라미터에 있는 a:'kim'은 kim이라는 타입만 들어올 수 있다는 의미.
// 하지만 data.name의 type은 string 이므로 error
// 해결 방안
// 1. object 만들 때 타입 지정
var sol1 = {
    name: "kim",
};
myFunc(sol1.name);
// 2. as 문법으로 타입을 속이기
var sol2 = {
    name: "kim",
};
myFunc(sol2.name);
// 3. as const 사용 : 완전히 잠가놓기
// === 이 obj는 literal type으로 알아달라
// 효과 1. obj value 값을 그대로 타입으로 지정해준다
// 효과 2. object 속성들에 모두 readonly를 붙여줌
var sol3 = {
    name: "kim",
};
myFunc(sol3.name);
// sol3.name="park"; // 오류 (readonly 여서)
