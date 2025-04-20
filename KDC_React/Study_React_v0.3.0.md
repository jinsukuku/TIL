# React v0.3.0 읽어보기
- 2023-01-19~

## Line24
### Strict 모드
```jsx
"use strict";
```
- ES5부터 사용 가능하며, 자바스크립트 코드에 더욱 더 엄격한 오류 검사를 적용한다
- strict모드는 스크립트 함수나 맨 처음에 `"use strict"` 지시어를 사용해 선언할 수 있다
- strict모드는 해당 블록의 코드를 strict 모드의 문법에 따라 엄격하게 검사한다
- strict모드의 특징
	1. 변수
		* 선언되지 않은 변수나 객체를 사용할 수 없다
		* `eval()` 내에서 선언된 변수는 외부에서 사용할 수 없다
	2. 프로퍼티
		* 읽기전용 프로퍼티에 대입할 수 없으며, 한 프로퍼티를 여러번 정의할 수 없다
	3. 매개변수
		* 매개변수의 이름이 중복되어서는 안된다
		* arguments 객체의 요소값을 변경할 수 없다
	4. 문자열: 문자열 "eval"과 "arguments"는 사용할 수 없음
	5. 8진수: 숫자 리터럴에 8진수 값을 대입할 수 없음
	6. this: this포인터가 가르키는 값이 null이나 undefined인 경우 전역 객체로 변환되지 않음
	7. delete: delete 키워드를 사용할 수 없음
	8. with: with문을 사용할 수 없음
	9. 예약어: 다음 예약어를 사용할 수 없음
		* `inplements` `interface` `let` `package` `private` `protected` `public` `static` `yield`
- [참고] http://www.tcpschool.com/javascript/js_exception_strict

<br>

## Line26-31
### require()
```jsx
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactComponent = require("./ReactComponent");
var ReactDOM = require("./ReactDOM");
var ReactMount = require("./ReactMount");

var ReactDefaultInjection = require("./ReactDefaultInjection");
```
- Node.js에서는 `require(경로)` 메서드를 통해 외부 모듈을 가져올 수 있다

<br>

## Line33
### inject()
```jsx
ReactDefaultInjection.inject();
```
- `inject()`: mobx-react 를 이용해 리액트 컴포넌트에 상태를 주입한다
    - [참고] https://velog.io/@jay/react-dependency-injection
- `inject()`를 찾다가 Vue.js 와 angular에도 비슷한 개념이 있더라 
    1. Vue.js
        * provide는 제공, inject는 주입을 의미한다.
        * 컴포넌트의 깊이에 따라 최상위 컴포넌트부터 최하위 컴포넌트까지 `props`를 효율적으로 전달하기위해 사용한다
        * 정리하면 provde는 부모 컴포넌트에서 props를 `제공`하고, inject는 하위컴포넌트에 props를 ``주입`하여 사용한다
        * [참고] https://kdydesign.github.io/2020/11/13/vuejs-provide-inject/
    2. Angular
        * 여기는 잘 모르겠다ㅎㅎ 나중에 공부할때보자

<br>

###
- 옵셔널 체이닝: https://ko.javascript.info/optional-chaining
