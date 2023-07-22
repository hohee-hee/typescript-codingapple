// 클래스 만들기
class PersonClass {
    // 생성자에 파라미터 전달 가능
    constructor(a) {
        this.data = 0; // field 값 / type 지정은 안써도 알아서 해주긴 함
        this.name = a;
    }
    printName(a) {
        console.log("안녕" + a);
    }
}
PersonClass.prototype.printName = function (a) {
    console.log("프로토타입 정의 : 안녕" + a);
};
let p1 = new PersonClass("hohee");
let p2 = new PersonClass("kim");
console.log(p1.name);
console.log(p2.name);
p1.printName(" 반가워");
// 숙제
// 1. Car 클래스를 만들고 싶습니다.
// (1) 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// (2) 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
// (3) model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
class Car {
    constructor() {
        this.model = "소나타";
        this.price = 3000;
    }
    tax() {
        console.log(this.price / 10);
    }
}
let c1 = new Car();
c1.tax();
// 2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// (1) object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// (2) 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
// (3) 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// (4) class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈
class Word {
    constructor(...param) {
        let numbers = [];
        let strings = [];
        param.forEach((e) => {
            if (typeof e === "number")
                numbers.push(e);
            else
                strings.push(e);
        });
        this.num = numbers;
        this.str = strings;
    }
}
