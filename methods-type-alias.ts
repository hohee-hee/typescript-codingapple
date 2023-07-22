// function func200(a: string): number {} // 함수 타입 지정

// type alias에 함수 type 저장해서 쓰는 법
type FuncType = (a: string) => number;

// 함수 type alias를 부착하려면 함수 표현식을 사용하기
let func201: FuncType = function (a) {
  console.log(a);
  return 0;
};
func201("hello");

// object안에 만들어진 함수 타입 지정하기
let memeberInfo = {
  name: "kim",
  plusOne(a: number): number {
    // 파라미터가 있는데 타입지정이 없으면 안된다
    return a + 1;
  },
  changeName: () => {},
};

// 콜백함수 개념 설명
function callback1(a: Function) {
  a();
}
function callback2() {
  console.log("콜백함수 실행");
}
callback1(callback2);

// 숙제
// 1. 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
// - type 키워드를 쓰든 말든 알아서 합시다.
type MemberInfoType = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};

// 2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

type CutZero = (char: string) => string;
type RemoveDash = (char: string) => number;

let cutZero: CutZero = (char) => {
  return char.replace(/^0/, "");
};

let removeDash: RemoveDash = (char) => {
  let val: number = +char.replace(/-/g, "");
  return val;
};

console.log(cutZero("0 will be deleted"));
console.log(cutZero("1 will be alived"));
console.log(removeDash("129-702"));
console.log(removeDash("990517"));

// 3. 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

type Func202 = (a: string, b: CutZero, c: RemoveDash) => void;
let func202: Func202 = (str, func1, func2) => {
  console.log(func2(func1(str)));
};

func202("010-1111-2222", cutZero, removeDash);
