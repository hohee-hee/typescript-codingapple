// function func200(a: string): number {} // 함수 타입 지정
// 함수 type alias를 부착하려면 함수 표현식을 사용하기
let func201 = function (a) {
    console.log(a);
    return 0;
};
func201("hello");
// object안에 만들어진 함수 타입 지정하기
let memeberInfo = {
    name: "kim",
    plusOne(a) {
        // 파라미터가 있는데 타입지정이 없으면 안된다
        return a + 1;
    },
    changeName: () => { },
};
// 콜백함수 개념 설명
function callback1(a) {
    a();
}
function callback2() {
    console.log("콜백함수 실행");
}
callback1(callback2);
let cutZero = (char) => {
    return char.replace(/^0/, "");
};
let removeDash = (char) => {
    let val = +char.replace(/-/g, "");
    return val;
};
console.log(cutZero("0 will be deleted"));
console.log(cutZero("1 will be alived"));
console.log(removeDash("129-702"));
console.log(removeDash("990517"));
let func202 = (str, func1, func2) => {
    console.log(func2(func1(str)));
};
func202("010-1111-2222", cutZero, removeDash);
