let title = document.querySelector("#title");
// title.innerHTML = "반가워요"; // 안됨 -> title은 uniontype - null | Element
// => type narrowing 필요
// HTML 조작 시 narrowing 방법
// 1. null이 아닐 때
if (title != null) {
    title.innerHTML = "반가워요";
}
// 2. instanceof 연산자 : 가장 보편적
if (title instanceof Element) {
    title.innerHTML = "반가워요";
}
// 3. as로 속이기
let titleAssertion = document.querySelector("#title");
if (titleAssertion instanceof Element) {
    titleAssertion.innerHTML = "반가워요";
}
// 4. Object에 ? 붙이기 : optional chaining
// 1) 제목에 innerHTML이 있으면 출력
// 2) 없으면 undefined
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = "반가워요";
}
// 5. tsconfig.json에서 strict 모드 끄기
// <a> 태그의 href 속서 바꾸기
let link = document.querySelector(".link");
// if (link instanceof Element) {
//   link.href = "https://kakao.com"; // error : Property 'href' does not exist on type 'Element'.
// }
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
// HTMLAnchor, Heading, Button ELement 타입 : 각 태그를 desc 하기 위해.
// 따라서 Element안에는 크게 든게 없다.
// Anchor : href, style, class 등등 object 타입이 잘 정의되어 있음.
// event Listner 부착하기
let btn = document.querySelector("#button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("hello");
});
// 숙제
// 1. 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
let img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
}
// 2. 바꾸고 싶은 html 요소가 많습니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요?
let tokakao = document.querySelectorAll(".naver");
tokakao.forEach((element) => {
    if (element instanceof HTMLAnchorElement) {
        element.href = "https://kakao.com";
    }
});
