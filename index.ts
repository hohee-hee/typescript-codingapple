let pName: string = "kim";
// pName = 123; // string으로 선언된 변수에 숫자를 넣어 오류 발생
console.log(pName);

let nameList: string[] = ["kim", "park"];
// let nameList : string[] = [123, 'park']; // string 배열에 숫자를 넣으면 오류 발생

let objectType: { name: string } = { name: "kim" }; // 오브젝트 자료형에도 해당 타입 지정 가능
let optionalType: { name?: string } = { name: "kim" }; // 물음표가 들어가면 option으로 해당 변수에 해당 타입이 들어가고 되고 안들어가도 된다.

let unionType: string | number = "kim"; // 다양한 타입이 들어올 수 있게 할 떄 사용 -> []도 가능함

// 변수 만들기
type MyType = string | number; // 타입은 대문자로 작성 (변수와 헷갈리지 않도록)
let typeTest: MyType = 123; // 타입은 변수에 담아쓸 수 있다!

// 함수를 만들 때도 타입 지정 가능
function fun1(x) {
  return x * 2;
}

// parameter, return 타입 지정 가능
function fun2(x: number): number {
  // number이 파라미터, number이 리턴타입
  return x * 2;
}

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john: Member = [123, true];

// object에 타입 지정해야할 속성이 너무 많을 때
type Mem = {
  [key: string]: string; // 문자열로 들어오는 오브젝트 속성(key)가 문자열로 들어와야한다
};
let jane: Mem = { name: "kim" };

// class 타입 지정 가능
// 단, 중괄호 내에 미리 name 이렇게 변수를 만들어놓아야 constructor 안에서 사용 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
