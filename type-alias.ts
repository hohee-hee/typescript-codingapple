// let animal: string | number | undefined;
type Animal = string | number | undefined; // 변수랑 똑같이 할당 : type alias (타입 변수)
let animal: Animal = "coco";

// object 타입도 저장 가능
type animalObj = {
  name: string;
  age: number;
};
let animalByObj = { name: "kim", age: 12 };

// type alias 작명 : 대문자로 시작, 뒤에 Type을 붙이면 조금 더 정확

// const 변수가 object일 때, 안에 잇는 object 자료 수정은 막지 못한다.
// 이유 : const 변수는 등호로 재할당만 막음
// ts 쓰면 obj 자료 수정도 막을 수 있다.
type Girlfriend = {
  readonly name: string;
  //   name?: string; // ? 속성도 사용 가능
};

const gf: Girlfriend = {
  name: "Ember",
};
console.log(gf.name); // Ember

// gf.name = "Yuri"; // ts 오류
// ts 에러는 에디터와 터미널에서만 존재

console.log(gf.name); // (js 경우) Yuri

// type 변수를 union type으로 합치기
type Name = string;
type Age = number;
type Person = Name | Age; // 가능

// & 연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };

// {x:number, y:number} 만들기
type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 }; // error 없음
console.log(position);

// * 같은 이름의 type 변수는 재정의가 불가능하다.

// 숙제
// 1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type HW1 = PositionX & PositionX;
let test: HW1 = { x: 10 };
// 중복되는 key는 1개만 담을 수 있다.

// 2. 다음 조건을 만족하는 타입을 만들어봅시다.
// (1) 이 타입은 object 자료형이어야합니다.
// (2) 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// (3) 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// (4) 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
type HW2 = { color?: string; size: number; position };
