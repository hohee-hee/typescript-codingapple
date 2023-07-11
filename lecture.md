# 타입스크립트 강의

## TypeScript를 쓰는 이유

- `JS` : Dynamic Typing 제공
  - 코드가 길어지면 자유도와 유연성은 독이다.
- `TS` : 타입 검사가 엄격해...<br>
  => 그냥 에디터 부가 기능 정도로 봐도 된다!

### 개발환경 셋팅

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

## TypeScript 문법 정리

- 타입 지정에 들어갈 수 있는 자료형 : int, string, boolean, null, undefind, bigint, [], {}

## React에서 TS 사용

- 이미 있는 React 프로젝트에 설치 : `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
- 새로 만들기 : `npx create-react-app my-app --template typescript`