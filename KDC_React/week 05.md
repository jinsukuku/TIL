# [KDC] React&Reducx로 시작하는 웹프로그래밍


<br>

## 🔥 5주차
*코드컨벤션: 관리하기 쉬운 코드를 작성하기 위한 일종의 코딩 스타일 규약(하나의 작성 표준)
*true 로 해석되는 값: true, {}, [], 1, 2, 'false', -12, '3.14' ...
*false 으로 해석되는 값: false, '', null, undefined, 0, -0, NaN(Not a Number)
	- 1 + "temp" 의 연산 결과는 NaN으로 출력된다

<br>

### ECMA Script 및 프로젝트 초기화
- 설치할 패키지
	*parcel-bundler -D
- package.json scripts 설정
	*dev: parcel index.html
	*build: parcel build index.html
- index.html
- main.js
- .gitignore


### 데이터 타입 확인
```jsx
console.log(typeof 'hello');	//String
console.log(typeof 123);		//Number
console.log(typeof false);		//Boolean
conosle.log(typeof undefined);	//undefined
conosle.log(typeof null);		//object
conosle.log(typeof {});			//object
conosle.log(typeof []);			//object
```
- `typeof` 키워드를 사용해 특정 데이터의 타입을 확인할 수 있다
- object 객체에 대한 명확한 타입을 확인하기에는 불편하다

```jsx
funcion getType(data){
	return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(getType(123));	//Number
console.log(getType(true));	//Boolean
console.log(getType(null));	//Null
console.log(getType({}));	//Object
console.log(getType([]));	//ARray
```
- 더 명확한 타입을 알아내는 별개의 함수를 만들어 사용할 수 있다


### 함수의 모듈화
```jsx
export default funcion getType(data){
	return Object.prototype.toString.call(data).slice(8, -1);
}
```
- 프로젝트 구조에 `getType.js`를 생성하고, export하여 모듈처럼 사용할 수 있다
```jsx
import getType from './getType.js'
```
- 모듈화된 함수를 import하여 사용한다 (js 확장자는 생략가능)
- 경로를 명시하지않으면 node_modules에서 해당 함수를 찾으므로 주의하자


### 변수 유효범위(scope)
```jsx
function scope(){
	console.log(a); // referenceError
	if(true){
		const a = 123
	}
	console.log(a); // referenceError
}
```
- `let` 이나 `const`로 선언한 변수는 선언된 블록 내부에서만 사용가능하다 (변수 유효범위)
- `let`과 `const`는 블럭 레벨의 유효범위를 갖는다

```jsx
function scope(){
	if(true){
		console.log(a); // undefined
		const a = 123
	}
}
```
- 변수가 동일한 유효범위 내에 있지만 값이 할당되는 코드보다 먼저 사용되었으므로 `undefined`가 출력된다

```jsx
function scope(){
	console.log(a); // undefined
	if(true){
		var a = 123
	}
}
```
- `var`는 함수 단위의 유효범위를 갖는다
- `var`는 함수 단위의 유효범위를 갖고있다보니 원하지않은 범위에서 사용되기도 하며 이는 메모리 누수로 발전하기도 한다
- 이와 같은 이유로 `var` 보다는 `let`과 `const`를 사용해 변수를 선언하는 것을 권장한다 


### 일치, 동등 연산자
- `===`: 일치연산자로, 값과 데이터타입이 동일한지 확인한다 
- `==`: 동등연산자로, 데이터타입이 달라도 값이 동일하면 true를 반환한다
	*동등연산자는 자동으로 형변환하며 값만을 비교한다
- 명확한 비교를 위해 동등연산자의 사용은 지양하며 일치연산자를 사용하는것을 권장한다 


### 함수
- 함수의 선언 방식(기명함수), 함수 표현 방식(익명함수)은 호이스팅이 서로 다르다
- return 이후의 코드는 실행되지 않는다
- 매개변수가 많은 경우 arguments 객체를 사용할수도 있다(권장X)
	- `funciton sum(arguments) return arguments[0] + arguments[1];`


### 화살표함수
```jsx
const double = function(a) { return a*2 } 
const double = (a) => { return a*2 }		//화살표함수
const double = (a) => return a*2;			//실행문이 한 줄이면 중괄호 생략가능
const double = (a) => a*2;					//return문 한 줄만 갖는다면 return, {} 생략가능
const double = a => a*2;					//매개변수가 하나인 경우 소괄호 생략가능

const obj = a => {};	//object를 return하기위해 {}를 사용해도 실행문을 감싸는 {}으로 인지한다
const obj = a => ({});	//object를 축햑형으로 return하기 위해서는 소괄호로 한 번 감싸면 된다
```
- 일반 함수와 달리 화살표함수는 일부 표현을 축약하는 것이 가능하다
- 실행문 블럭과 동일한 괄호를 사용하는 객체는 축약된 화살표함수에서 사용하려면 소괄호로 한 번 감싸준다 



### IIFE(즉시실행함수)
```jsx
const a = 7;
function double() {console.log(a*2);}
double();

// 즉시실행함수로 변경 
(function() {console.log(a*2})();	// (익명함수)()
(function() {console.log(a*2}());	// (익명함수()) -> 권장
```
- 즉시실행함수(IIFE): 함수를 만들자마자 바로 한번만 실행하는 경우, 즉시 실행함수를 사용한다 
- 즉시 실행 함수의 경우 익명함수를 소괄호 내에 작성하고, 익명함수를 실행하기위한 소괄호를 우측에 작성하여 사용한다


### 호이스팅
- 호이스팅: 함수 선언부가 유효범위(scope)의 최상단으로 끌어올려지는 현상
- 함수 선언 방식(기명함수): 호이스팅 발생O
- 함수 표현 방식(익명함수): 호이스팅 발생X


### 타이머함수
```jsx
const timer = setTimeout(()=> {console.log("3s")}, 3000);
const h1El = document.querySelector('h1');
heEl.addEventListner('click',() => {clearTimeout(timer)});
```
- `setTimeout(func, ms)`: 일정시간 후 함수 실행 
- `setInterval(func, ms)`: 시간 간격마다 함수 실행 
- `clearTimeout(timeoutFunc)`: 실행된 Timeout함수 종료
- `clearInterval(intervalFunc)`: 실행된 Interval 함수를 종료


### 콜백함수 
- 함수의 인수로 사용되는 함수를 콜백함수라고 부른다
- 콜백은 실행위치를 보장하는 용도로 많이 활용된다


### 클래스 - 생성자함수
* 생성자함수의 이름의 첫 글자는 대문자로 작성한다
* 자바스크립트에서의 클래스는 다른 프로그래밍 언어의 클래스와는 조금 다르다(찾아보기)
```jsx
function User(first,last){
	this.firstname = first;
	this.lastname = last;
}

// 클래스의 prototype에 메서드를 추가
User.prototype.getFullName = function() {
	return `${this.firstname} ${this.lastname}`
}

const jjangu = new User('jjangu', 'shin');
const yuri = new User('yuri', 'lee');
const huni = new User('balnom', 'hun');

console.log(jjangu.getFullName());
console.log(yuri.getFullName());
console.log(huni.getFullName());
```
- 하나의 객체 데이터를 생성하는 함수인 `User`를 생성자함수라고 말하며, 생성자 함수는 `new`키워드와 함께 호출한다
- 생성자 함수의 호출 결과 반환되어 할당된 값을 인스턴스라고 부른다(jjangu,yuri,huni는 인스턴스)
- 리터럴 방식: 기호를 통해 데이터를 생성하는 방식 (String, Object, Array)
	- ""를 사용해 문자 데이터를 생성하기때문에 String의 생성 방식은 리터럴 방식에 해당한다
	- []를 사용해 배열을 생성하기때문에 Array의 생성 방식은 리터럴 방식에 해당한다
	- {}를 사용해 객체을 생성하기때문에 Object의 생성 방식은 리터럴 방식에 해당한다
- 자바스크립트의 클래스는 메모리의 효율적인 관리를 위해 사용된다
- 생성자함수를 통해 만들어진 객체에 동일하게 사용될 멤버의 경우 프로토타입에 멤버를 할당한다
- 해당 생성자 함수의 프로토타입(__proto__)에 할당된 멤버를 공유한다


### 클래스 - this
```jsx
const jjangu = {
	name: 'jjangu',
	normal: function(){
		console.log(this.name);
	},
	arrow: () => {
		console.log(this.name);
	},
}

jjangu.normal();		// jjangu
jjangu.arrow();			// undefined
```
- 일반 함수는 호출 위치에 따라 this가 정의된다
- 화살표 함수는 자신이 선언된 함수 범위(블록)에서 this가 정의된다

```jsx
function User(name) { this.name = name; }

user.prototype.normal = function() { console.log(this.name); }
user.prototype.arrow = () => { console.log(this.name); }

const jjangu = new User('jjangu');

jjangu.normal(); 	// jjangu
jjangu.arrow();		// undefined
```

```jsx
const timer = {
	name: 'jjangu',
	timeout: function(){
		setTimeout(() => {
			console.log(this.name);
		},2000);
	}
}

timer.timeout();	// jjangu
```

- setTimeout()의 콜백함수로 일반함수를 정의한다면, 호출되는 위치에 해당하는 setTimeout()함수가 this에 해당한다.
- this.name이 timer의 name속성값을 가져오길 바란다면 호출 위치가 아닌 선언위치로 this를 정의하도록 화살표함수를 사용해야한다


### 클래스 - ES6 Classes
```jsx
const jjangu = {
	name: 'jjagu',
	normal(){
		console.log(this.name);
	},
	arrow: () => {
		console.log(this.name);
	}
}

jjangu.normal();
jjangu.arrow();
```
- 객체 데이터 내부에서 일반함수를 작성할 때 콜론(:)과 함께 fucntion 키워드를 생략할 수 있다
	- (예) `normal: function(){...}` -> `normal() {...}`

```jsx
//before
function User(first,last){
	this.firstname = first;
	this.lastname = last;
}

// 클래스의 prototype에 메서드를 추가
User.prototype.getFullName = function() {
	return `${this.firstname} ${this.lastname}`
}

const jjangu = new User('jjangu', 'shin');
const yuri = new User('yuri', 'lee');
const huni = new User('balnom', 'hun');

console.log(jjangu.getFullName());
console.log(yuri.getFullName());
console.log(huni.getFullName());
```
- 자바스크립트는 prototype기반의 프로그래밍 언어
- 직관적,안정적이고 신뢰도가 높은 다른 객체지향언어의 영향을 받아, 클래스라는 개념을 ES6부터 제공
- 위의 코드를 클래스를 사용해 변경한 코드는 아래와 같다

```jsx
class User{
	constructor(first, last) {
		this.firstname = first;
		this.lastname = last;
	}
	getFullName(){
		return `${this.firstname} ${this.lastname}`
	}
}
```
- 클래스를 사용할 때는 `constructor()` 를 사용해 생성자함수를 작성한다


### 클래스 - 상속(확장)
```jsx
class Vehicle {
	constructor(name, wheel){
		this.name = name;
		this.wheel = wheel;
	}
}
class Bicycle extends Vehicle{
	constructor(name, wheel){
		super(name, wheel);
	}
}
class Car extends Vehicle{
	constructor(name, wheel, license){
		super(name, wheel);
		this.license = license;
	}
}
```
- 클래스 선언부에 extends 키워드를 사용해 상속(확장)하여 사용할 수 있다 
- 부모 클래스의 멤버를 사용할 때에는 `super`키워드를 사용한다