// 함수의 타입 지정하기
// 파라미터 : 타입 선택 안하고 적으면 any 타입으로 적용되므로 타입 지정을 해주어야한다.
// 리턴 값 : 함수 선언 시 타입 지정 하기
function func1(x) {
    return x * 2;
}
func1(30);
// func1('123'); // 오류
// * void 타입 : return이 없는 경우 사용 -> 실수로 무언가를 return 하는 것을 막을 수 있음
function func2(x) {
    x + 1;
}
// 자스와 다른 점 : 타입 지정된 파라미터는 필수 파라미터
// 옵션 파라미터는 ? 붙여주기 (obj3ect 일 때도 가능함)
// ? === undefined가 포함된 union type
function func3(x) { }
// Quiz
function func4(x) {
    // 에러 이유 : x + 3에서 x는 현재 union type이므로 x를 숫자라고 받아들이지 않음.
    //   console.log(x + 3);
    // Narrowing으로 해결 가능
    // if(x의 타입이 숫자면) console.log(x+3);
}
// 숙제
// 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function greeting(name) {
    if (name === undefined)
        console.log("이름이 없습니다.");
    else
        console.log("안녕하세요 " + name);
}
greeting();
greeting("소히");
// 2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
function counting(param) {
    param = param.toString();
    return param.length;
}
console.log(counting("123"));
console.log(counting(12345));
// 3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// (1) 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// (2) 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// (3) 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
function posMarry(income, jaga, appeal) {
    let score = income;
    if (jaga)
        score += 500;
    if (appeal === "상")
        score += 100;
    if (score >= 600)
        return "결혼가능";
}
console.log(posMarry(700, false, "중"));
console.log(posMarry(100, false, "상"));
