function narrowing1(x: number | string) {
  // 애매한 타입을 만나면 타입 narrowing을 해서 코드를 실행시켜야 ts가 제대로 동작
  // 어떤 변수가 타입이 아직 불확실하면 if문 등으로 narrowing을 해줘야 조작 가능
  if (typeof x === "string") {
    // x의 타입이 string일 때
    return x + "1";
  } else {
    return x + 1;
  }
}

function narrowing2(x: number | string) {
  // narrowing으로 판정해주는 문법들 : 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정
  // 1. typeof 변수
  let arr: number[] = [];
  if (typeof x === "number") arr[0] = x; // if 썼으면 else까지 써야 안전하긴 함
  // 2. 속성명 in 오브젝트 자료 : 어떤 속성이 오브젝트에 있는지 검사
  // 3. 인스턴스 instanceof 부모 : 이 오브젝트가 저거의 자식인지, 저거로부터 생성된 인스턴스인지 확인하는 것
}

// 숙제
// 1. 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function cleaning(arr: (number | string)[]) {
  arr.forEach((e, index) => {
    if (typeof e === "string") {
      arr[index] = parseInt(e);
    }
  });
  console.log(arr);
}

cleaning(["1", 2, "3"]);

// 2. 다음과 같은 함수를 만들어보십시오.
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.
type charge = {
  subject: string | string[];
};

function teacher(info: charge): string {
  let last: string;
  if (Array.isArray(info.subject)) {
    last = info.subject[info.subject.length - 1];
  } else {
    last = info.subject;
  }
  return last;
}

console.log(teacher({ subject: "math" }));
console.log(teacher({ subject: ["science", "art", "korean"] }));
// console.log(teacher({ hello: "hi" }));
