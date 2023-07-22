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
type HW2 = { color?: string; size: number; readonly position: number[] };

// 3.  다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// (1) 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// (2) object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// (3) 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
type HW3 = { name: string; phone: string; email: string };

// 4. 다음을 만족하는 type alias를 만들어보십시오
// (1) 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// (2) 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// (3) 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
// type HW4 = { name: string; phone: string; email: string; isAdult: boolean };

type Adult = { isAdult: boolean };
type HW4 = HW3 & Adult;
