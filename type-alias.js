let animal = "coco";
let animalByObj = { name: "kim", age: 12 };
const gf = {
    name: "Ember",
};
console.log(gf.name); // Ember
// gf.name = "Yuri"; // ts 오류
// ts 에러는 에디터와 터미널에서만 존재
console.log(gf.name); // (js 경우) Yuri
let position = { x: 10, y: 20 }; // error 없음
console.log(position);
let test = { x: 10 };
