let pname: string = "kim";
let page: number = 25;
let isMarried: boolean = false;
let empty: null = null;
let not: undefined = undefined; // 변수 만들고 정의 안하면 undefined

// array 자료에 타입 지정 가능
let memArray: string[] = ["kim", "park", "lee"]; //type[]

// 변수 하나에 여러 자료 집어 넣고 싶면 object 자료형 써도 가능
let memObj: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// TIP : 온갖 곳에 다 타입을 지정할 필요가 없다!
// TS는 원래 자동으로 타입 지정을 해준다.
// 변수에 커서 대면 타입 뜸.
let member = "park";
let nums = [1, 2, 3];

// 예제 문제
// 1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let myName: string = "sohee";
let myAge: number = 24;
let myHometown: string = "Incheon";

// 2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보시오.
let fav: { song: string; singer: string } = {
  song: "pporappibbam",
  singer: "sunmi",
};

// 3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
