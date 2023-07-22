// 1. union type 사용
// 할당을 하면 일단 해당 타입으로 지정이 되는데, 다른 타입의 값을 할당하면 타입이 변한다
let a = 123; // 이 변수에는 num 또는 str이 들어올 수 있다.
a = true;
a = "kim";
// 여러가지 타입의 원소를 가진 array와 obj
let numbers = [1, 2, "kim"]; // 소괄호 유무에 따라 타입이 달라진다
let obj = { a: 123 };
// 2. any 타입 : 타입실드 해제 문법
// 하지만 이걸 쓰면 타입스크립트를 쓰는 이유가 없음
let b; // 아무거나 들어올 수 있다
b = 123;
b = "kim";
// 3. unknown : 유연한 타입
// 더 안전. 왜?
// 오염 방지
let c; // 모든 자료형을 허용
c = 123;
c = "kim";
// let d: boolean = c; // 불가능함 : 이상한 타입을 막아준다
let e;
// e - 1; // 오류 : ts는 타입에 엄격하므로 숫자 혹은 그와 비슷한 타입만 연산 가능 => unknown은 불가
let f;
// f + 1; // 타입은 맞지만 +1은 불가능.
// 자스는 string + number 연산이 가능하지만
// 타스는 string 타입 + 1 -> 허용 / number + 1 -> 허용 / string|number 타입 + 1 -> 불가
// 유니온타입 : 타입 두개를 합쳐서 새로운 타입을 만들어 내는 것이므로 불가능
// string도 number도 아님
let g = 1;
// g - 1;
// unknown은 number 타입이 아니다 => -1도 안됨
// Narrowing / Assertion 배워서 코드 엄격하게 짜보기
// 숙제
// 1. 다음 변수 4개에 타입을 지정해봅시다.
// (조건)  age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
// 2. 학교라는 변수에 타입 지정을 해보십시오.
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
