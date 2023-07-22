// type Nemo = { color: string; width: number };
interface Nemo {
  color: string;
  width: number;
} // 동일

let nemo: Nemo = {
  color: "red",
  width: 100,
};

interface Stu {
  name: string;
}

// interface Tea {
//   name: string;
//   age: number;
// }

// 인터페이스의 장점 : extends로 복사 가능
interface Tea extends Stu {
  age: number;
}

let stu: Stu = {
  name: "kim",
  score: 20,
};

let tea: Tea = {
  name: "kim",
  age: 20,
  score: 100,
};

// intersection type을 통해 똑같은 기능을 type alias도 할 수 있다.
// & 기호 사용하기
// extends와는 다른 점 : intersection은 두 타입을 전부 만족하는 타입이라는 뜻 (합치는게 아님)
// & 기호는 interface도 사용 가능
type NewAnimal = { name: string };
type Cat = NewAnimal & { age: number };

// type vs interface = 엄격함 vs 유연함
// type : 중복 선언 불가  | interface : 중복 선언 가능
interface Stu {
  score: number;
} // Stu type에는 name과 score라는 속성을 갖고 있다. === 추가

// 언제 인터페이스를 사용할까?
// ts 외부 라이브러리 같은 경우 customizing을 위해서 interface를 많이 사용한다.

// extends 시 중복속성이 발생하면? 에러로 잡아준다!
// &를 쓸 때 중복속성이 발생하면? 미리 에러가 나지 않으니 주의가 필요하다.
// - 사용 시 에러로 잡아줌

// 숙제
// 1. interface 이용해서 간단하게 타입을 만들어봅시다
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다.
// 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다.
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

// 2. array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
console.log(장바구니);

// 3. 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
interface Cartv2 extends Cart {
  card: boolean;
}

let pro: Cartv2 = { product: "청소기", price: 7000, card: false };
console.log(pro);

// 4. object 안에 함수를 2개 넣고 싶은데요
// (1) 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// (2) 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.
interface Calc {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let calc: Calc = {
  plus(num1, num2) {
    return num1 + num2;
  },
  minus(num1, num2) {
    return num1 - num2;
  },
};
