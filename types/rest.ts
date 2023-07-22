// rest parameter type 지정 : array 타입으로 지정해주어야한다.
function func300(...a: number[]) {
  console.log(a);
}

func300(1, 2, 3, 4, 5, 6);
