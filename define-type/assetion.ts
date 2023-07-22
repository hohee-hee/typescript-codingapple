// 타입 잠깐 덮어 쓰기
function assertion1(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // 왼쪽에 있는 변수를 number로 써주세요.
}

// assertion 문법의 용도
// 1. narrowing 할 때 사용 : union type에서 하나로 확정지을 때 사용
let N: string = "kim";
// N as number; // 타입을 a에서 b로 변경하는건 아니다!
// 2. 무슨 타입이 들어올지 100% 확신할 때 쓰기
// b/c as 문법을 쓰면 타입 오류 버그를 캐치하지 못함

// -> 따라서 보통 as 문법 안쓰고 if문(narrowing) 사용
// 디버깅 / 비상용으로 사용하기
