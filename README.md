# 타입스크립트 강의

### ✍ TypeScript를 쓰는 이유

- `JS` : Dynamic Typing 제공
  - 코드가 길어지면 자유도와 유연성은 독이다.
- `TS` : 타입 검사가 엄격해...<br>
  => 그냥 에디터 부가 기능 정도로 봐도 된다!

### ⚙ 개발환경 셋팅

1. node.js 설치 (최신버전)
2. VS 에디터로 터미널 오픈
3. 설치 `npm install -g typescript`
4. 에디터로 폴더 오픈
5. 파일이름.ts 파일 생성 후 코드 작성
6. `tsconfig.json` 생성 후 내용 작성 (컴파일 옵션)

```{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}
```

7. 브라우저는 .ts 파일은 못 읽으므로 변환해서 활용해야한다.
   : `tsc -w` 입력

### ⚙ React에서 TS 사용

- 이미 있는 React 프로젝트에 설치 : `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
- 새로 만들기 : `npx create-react-app my-app --template typescript`

## 📝 TypeScript 문법 정리

> 파일 : [index.ts](index.ts)

- 변수에 타입 지정 가능 === 변수에 실드를 씌우는 것.
  - 장점 : 타입이 실수로 변경되면 에러로 알려준다.
- 타입 지정에 들어갈 수 있는 자료형 : int, string, boolean, null, undefind, bigint, [], {}

## 📝 TS 기본 타입 정리

> 파일 : [types/primitive-type.ts](types/primitive-type.ts)

## 📝 타입을 미리 정하기 애매할 때

> 파일 : [types/ambiguous.ts](types/ambiguous.ts)

1. union type
2. any
3. unknown

## 📝 함수에 타입 지정하기

> 파일 : [types/function-type.ts](types/function-type.ts)

## 📝 Narrowing, Assertion

> 파일 : [define-type/narrowing.ts](define-type/narrowing.ts)<br>
> 파일 : [define-type/assertion.ts](define-type/assertion.ts)

## 📝 type alias

> 파일 : [type-alias/type-alias.ts](type-alias/type-alias.ts)

- 타입이 너무 길 때, 타입을 변수에 담아둘 수 있다

## 📝 literal type

> 파일 : [types/literal-type.ts](types/literal-type.ts)

- `literal type` : 엄격한 타입 지정 가능
  - ex) 이런 문자만 들어올 수 있습니다 가능!
  - 함수도 가능
- 장점
  - 변수에 뭐가들어올지 더 엄격하게 관리 가능
  - 자동완성 지원
- `const` : 원하는 값을 2개 이상 저장하지 못함
  => literal type은 const 변수의 업그레이드 버전으로 생각하면 됨!

## 📝 methods type alias

> 파일 : [type-alias/methods-type-alias.ts](type-alias/methods-type-alias.ts)

**type alias에 함수 type 저장해서 쓰는 법**<br>

- 함수 타입 지정은 화살표 함수 사용하기
- return 타입은 `=>` 뒤에 넣기

```
type FuncType = (a: string) => number;
```

**함수 type alias 부착하기**

- 함수 표현식에만 부착 가능

## 📝 ts로 HTML 변경 및 조작 시 주의점

> 파일 : [HTML/index.ts](HTML/index.ts)

**img, button 등 특정 태그 선택 시 타입 지정 방법**

- `HTMLAnchorElement` `HTMLHeadingElement` `HTMLButtonElement` 등등 : 각 태그를 desc 하기 위해 사용
- 따라서 Element안에는 크게 든게 없다.
  - ex) Anchor : href, style, class 등등 object 타입이 잘 정의되어 있음.

## 📝 ts에서 class 문법 사용하기

> 파일 : [types/class.ts](types/class.ts)

## 📝 ts에서 interface 문법 사용하기

> 파일 : [types/interface.ts](types/interface.ts)

**object 자료형은 type지정을 interface로 할 수 있다**

- interface 장점
  - extends로 복사 가능
  - 중복 선언이 가능하여 customizing이 가능 (그래서 외부 라이브러리에서 많이 사용)

## 📝 rest parameter에서 type 지정하기

> 파일 : [types/rest.ts](types/rest.ts)<br>
> 파일 : [types/destructuring.ts](types/destructuring.ts)

- rest parameter 사용 시 type은 array로 지정하기
