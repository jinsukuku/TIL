# [KDC] React&Reducx로 시작하는 웹프로그래밍


<br>

## 🔥 6주차
*regexp: 정규표현식
	- /.+(?=@)/
		- // 정규표현식을 감싸는 리터럴
		- . 한글자
		- + 최대한 많이
		- ?=@ 기준이 @
		- () 기준의 앞쪽 문자열 
<br>

### 전역함수
- `setTimeout()`, `setInterval()`, `clearTimeout()`, `clearInterval`
- `parseInt(String)`: 인자에 포함된 정수부분만 추출해서 정수로 반환 (예) "3.14" -> 3  
- `parseFloat()`: 소수점을 유지하며 문자를 정수로 반환 (예) "3.14" -> 3.14

### 문자(String)
*properties
	- `String.length`: 문자데이터의 글자 길이를 반환한다
*methods
	- `String.prototype.indexOf(searchString)`: 인자로 전달된 String의 첫 글자 index를 반환한다
		- 만약 -1이 반환되면 해당 String 내부에 인자로 전달한 문자가 없다는 의미
	- `String.prototype.slice(begin, end)`: 문자열의 일부를 추출해 새로운 문자열을 반환한다(end 미포함) 
	- `String.prototype.replace(pattern, replacement)`: 문자열의 특정 문자열을 새로운 문자열로 치환
	- `String.prototype.match(regexp)`: 정규표현식을 인자로 사용해서 특정 문자를 match하여 배열의 형태로 반환
		*const str = "fffeee@naver.com"
		*str.match(/.+(?=@)/) => [ 'fffeee', index: 0, input: 'fffeee@naver.com', groups: undefined ]
	- `String.prototype.trim()`: 문자열의 공백 문자를 제거한다
*[참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String


### 숫자(Number)와 수학(Math)
*Number-methods
	- `Number.prototype.toFixed(digits)`: 인수를 소수점 이하 몇자리까지 남기고 제거할지를 지정한다
		*const pi = 3.141592
		*pi.toFixed(2) // 3.14(String)
		*toFixed()는 String을 반환한다
	*[참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
*Math-methods
	- `Math.abs(x)`: x의 절대값을 반환
	- `Math.min([value1[, value2[, ...]]])`: 인수로 들어온 숫자데이터 중 가장 작은 값을 반환
	- `Math.max()`: 인수로 들어온 숫자데이터 중 가장 큰 값을 반환
	- `Math.ceil()`: 인수의 소수점을 올림처리해서 정수값만을 남긴다
	- `Math.round()`: 인수의 소수점을 반올림처리해서 정수값만을 남긴다
	- `Math.floor()`: 인수의 소수점을 내림처리해서 정수값만을 남긴다
	- `Math.random()`: 0 이상 1 미만의 난수를 반환
	*[참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math


### 배열(1)
*properties
	- `Array.length`: 배열의 길이를 반환한다
*methods
	- `Array.prototype.find(callback)`: 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
		*조건을 만족하는 요소가 없다면 undefined를 반환한다
		*arr.find(el => el >10);
	- `Array.prototype.concat(Array)`: 두 개의 배열 데이터를 병합해서 새로운 배열을 반환한다(원본 유지)
	- `Array.prototype.forEach(callback(element, index, array))`
		- return하지 못한다. return을 하게되면 undefined를 반환한다.
	- `Array.prototype.map(callback(element, index, array))`
		- callback에서 반환된 값을 새로운 배열으로 반환한다.
*[참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
** 인덱스를 사용해서 요소(Element/item)을 꺼내는 행위를 인덱싱(indexing)이라고 부른다 



### 배열(2)
*properties
	- `Array.length`: 배열의 길이를 반환한다
*methods
	- `Array.prototype.find(callback)`: 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
		*조건을 만족하는 요소가 없다면 undefined를 반환한다
		*arr.find(el => el >10);
	- `Array.prototype.concat(Array)`: 두 개의 배열 데이터를 병합해서 새로운 배열을 반환한다(원본 유지)
	- `Array.prototype.forEach(callback(element, index, array))`
		- return하지 못한다. return을 하게되면 undefined를 반환한다.
	- `Array.prototype.map(callback(element, index, array))`
		- callback에서 반환된 값을 새로운 배열으로 반환한다.
*[참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

### 객체(Object)
- `prototype`에 정의된 메소드가 아니면 정적(static) 메소드라고 불린다
	- 정적 메소드는 리터럴 형식에 바로 붙여서 사용할 수 없다
```jsx
const target = {a:1, b:2}
const source = {b:4, c:5}

const returnTarget = Object.assign(target, source);
console.log(target);			// Object{a:1, b:4, c:5}
console.log(returnTarget);		// Object{a:1, b:4, c:5}
```
- `Object.assign(target, sources)`
	- 열거할 수 있는 하나 이상의 출처 객체(sources)로부터 대상 객체(target)로 속성을 복사할 때 사용한다.
	- 실행 결과 대상 객체(target)를 반환하며, 반환된 객체는 target과 같은 주소값을 가진다
	- taget에 sources를 병합해 반환한다(sources=하나 이상 가능)
	- 중복되는 key가 있다면 두번째 인수의 값으로 덮어씌워진다
```jsx
const target = {a:1, b:2}
const source = {b:4, c:5}

const returnTarget = Object.assign({}, target, source);
console.log(target);			// Object{a:1, b:2}
console.log(returnTarget);		// Object{a:1, b:4, c:5}
```
- `Object.assign({}, target, sources)`: 빈 객체를 첫번째 인수로 사용하면, 새로운 객체 데이터를 반환한다
- `Object.keys(target)`: target 객체의 key값을 추출해서 하나의 배열로 반환한다

* [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object


### 구조 분해 할당(비구조화 할당)
```jsx
const user = {
	name: "jjangu",
	age: 5,
	className: "Sunflower",
}

const {name, className, address = 'Korea'} = user;

console.log(name);			//jjangu
console.log(className);		//sunflower
console.log(address);		//Korea
```
- 객체의 데이터를 구조 분해 할당을 사용해 필요한 값만을 꺼내 사용할 수 있다
- 만약 해당한 key의 value가 없는 경우(undefined) 기본값을 지정할 수 있다
- 구조 분해 할당을 사용해 객체 데이터를 조금 더 유연하게 사용할 수 있다

```jsx
const fruits = ['Apple', 'Banana', 'Grape'];
const [a,b,c,d] = fruits;
console.log(a,b,c,d);		//Apple Banana Grape undefined

const [,,grape) = fruits;
console.log(grape)
```
- 구조 분해 할당을 할 때에는 데이터의 타입에 맞게 리터럴을 사용해야한다
	- 객체를 구조 분해 할당할 때에는 `{}`
	- 배열을 구조 분해 할당할 때에는 `[]`
- 배열에서는 key값이 별도로 없으므로, 순서대로(index) 구조 분해 할당한다
- 쉼표를 활용하면 순서대로 모든 값을 가져오지 않고, 필요한 값만 추출해 사용할 수 있다 


### 전개연산자(...)
```jsx
const abc = ['A', 'B', 'C', 'D']
console.log(abc);			//['A', 'B', 'C', 'D']
console.log(...abc);		//A B C D 

fucntion toObject(a,b,...c){
	return {
		a: a,
		b: b,
		c: c,
	}
}

console.log(toObject(...abc));
/*
abc = {
	aaa: 'A',
	bbb: 'B',
	ccc: ['C', 'D']
}
*/
```
- `나머지 매개변수(restParameter)`: 나머지 매개변수는 남아있는 데이터를 모두 받아와 배열의 형태로 사용한다
	- 함수의 파라미터에 사용한다

```jsx
fucntion toObject(a,b,...c){
	return {
		a,
		b,
		c,
	}
}

const toObject = (a,b,...c) => ({a,b,c})

```
- 속성명과 변수명이 동일한 경우, 값을 하나만 사용해 축약한다
- 화살표함수의 경우 반환 데이터가 객체라면 () 으로 감싸서 사용한다


### 데이터 불변성
- 원시 데이터: String, Number, Boolean, undefined, null
- 참조형 데이터: Object, Array, Function(CallBack)
```jsx
let a = 1;
let b = 4;
console.log(a,b,a===b);		// 1,4,false
b = a;
console.log(a,b,a===b);		// 1,4,true
a = 7;
console.log(a,b,a===b);		// 7,1,false
let c = 1;
console.log(b,c,b===c);		// 1,1,true
```
- 원시데이터의 불변성: 새로운 원시 데이터가 기존 메모리 주소가 들어있다면 기존 메모리 주소를 바라보도록 한다

```jsx
let a = {k:1}
let b = {k:1}
console.log(a,b,a===b); // {k:1},{k:1},false

a.k = 7;
b = a;
console.log(a,b,a===b); // {k:7},{k:7},true

a.k = 2;
console.log(a,b,a===b); // {k:2},{k:2},true

let c = b;
console.log(a,b,c,a===c); // {k:2},{k:2},{k:2},true

a.k = 9;
console.log(a,b,c,a===c); // {k:9},{k:9},{k:9},true
```
- 참조형 데이터의 불변성: 없다
- 참조형 데이터는 원시형 데이터와 다르게 새로운 값을 만들때마다 새로운 메모리주소에 할당된다.
- 즉, 참조형 데이터는 불변성이 없고 가변한다


### 얕은복사와 깊은복사
```jsx
const user = {
	name: 'jjangu',
	age: 5,
	className: 'SunFlower',
}

const copyUser = user;
console.log(user === copyUser);	// true

user.age = 6;
console.log(user.age);			// 6
console.log(copyUser.age);		// 6
```
1. 얕은 복사: 참조형 데이터의 표면적인 데이터를 복사
	- `Object.assign()`
	- `전개연산자 ...`
	- 참조형 데이터의 속성에 참조형 데이터가 있다면, 해당 속성과 동일하게 참조한다
	- 해당 속성의 모든 데이터를 복사하고자한다면 깊은 복사를 해야한다
2. 깊은 복사: 참조형 데이터의 모든 데이터를 복사
	```jsx
	import _ from 'lodash'
	...
	const copyUser = _.cloneDepp(user);
	```
	- `lodash` 패키지를 사용해 깊은 복사를 할 수 있다
	
	
### 가져오기, 내보내기
1. import(가져오기)
	- `import _ from 'lodash'` : `node_modules` 폴더에서 패키지를 찾아 가져온다
	- 현재 파일을 기준으로 외부 자바스크립트 파일의 상대 경로를 입력해, 해당 경로의 패키지를 찾아 가져온다
		- `import getType from './getType'`
		- `import getRandom from './getRandom'`
2. export(내보내기)
	*Default export: 이름을 지정하지 않아도 되는 방식	
		- `export default function (data){...}`
		- `import checkType from './getType'`
		- import할 때 이름을 변경해 사용할 수 있다
	*Named export: 이름을 지정해야하는 방식
		- `export function getType(data){...}`
		- `improt {getType, getName as name} from './getType'`
		- import할 때 구조 분해 할당을 하듯이 `{}`로 묶어 필요한 모듈을 가져와 사용한다
		- 모듈의 이름 대신 별칭을 사용하고자 한다면 `as`키워드를 사용한다
	*가장 큰 차이점
		1. DefaultExport는 하나의 모듈만을 내보낼 수 있다
		2. NamedExport는 여러 모듈을 내보낼 수 있다(구조 분해 할당 방식으로 모듈을 가져와 사용하므로)
	*DefaultExport와 NamedExport 를 하나의 js파일에서 함께 사용할 수 있다
	
	
	
### Lodash 사용법 

```jsx
import _ from 'lodash'

const usersA = [
	{ userId: '1', name: 'jjangu'},
	{ userId: '2', name: 'yuri'},
]

const usersB = [
	{ userId: '1', name: 'jjangu'},
	{ userId: '3', name: 'huni'},
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

const usersD = _.unionBy(usersA, usersB, 'userId');
conosle.log('unionBy', usersD);
```
-`_.uniqBy(Array, 고유속성명)`: 고유속성을 기준으로 중복 여부를 판단하고, 중복값을 제외해서 반환한다
-`_.unionBy(Array1, Array2, 고유속성명)`: 고유속성을 기준으로 중복 여부를 판단하고, 중복값을 제외해서 반환한다

```jsx
const users = [
	{ userId: '1', name: 'jjangu'},
	{ userId: '2', name: 'yuri'},
	{ userId: '3', name: 'mengu'},
	{ userId: '4', name: 'huni'},
	{ userId: '5', name: 'jaanga'},
]

const foundUser = _.find(users, {name: 'yuri'});
const foundUserIndex = _.findIndex(users, {name: 'yuri'});

console.log(foundUser, foundUserIndex);

_.remove(users, {name: 'yuri'});
console.log(users);

```
- `_.find(users, {name: 'yuri'})`
- `_.findIndex(users, {name: 'yuri'})`
- `_.remove(users, {name: 'yuri'})`

*[참고] https://lodash.com/docs/


	
### JSON
```json
// myData.json
{
	"string": "jjangu",
	"number": 123,
	"boolean": true,
	"null": null,
	"object": {},
	"array": [],
	"undefined": "error",
}
```
- JSON에서 문자열을 작성할 때에는 ""만을 허용한다

```jsx
// main.js
import myData from './myData.json'

console.log(myData);
```
- js파일과 동일 확장자가 아니므로 impor할 때 확장자를 입력해주어야한다 
- 실제 json파일은 하나의 문자열 데이터이다.
- import를 통해 json파일을 가져오면, json파일의 규칙을 토대로 객체데이터로 자동 변환된다 
- `JSON.stringify(user)`: 객체를 string으로 반환한다 
- `JSON.parse(str)`: string을 JSON화(객체) 시킨다


*[참고] https://ko.wikipedia.org/wiki/JSON
 

### Storage
- 개발자 도구(F12) - Application - Storage 
1. LocalStorage
		*localStorage란?
			- Key,Value형태로 Storage에 데이터를 저장할 수 있다
			- storage 객체에 접근할 수 있으며, 저장된 데이터는 브라우저 세션간에 공유된다
			- 저장된 데이터는 해당 도메인 주소에 종속된다 
			- localStorage의 데이터는 만료되지 않는다(반영구적)
			- [참고] https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
		*사용방법			
			- `localStorage.setItem(key, value)` key, value의 형태로 저장한다. 이때의 value는 String이어야한다
				- 객체데이터를 문자화할때에는 `JSON.stringify()`메서드를 사용한다
			- `const cat = localStorage.getItem('key')`: key를 사용해 저장된 데이터를 읽어온다
			- `localStorage.removeItem('myCat')`: localStorage에 저장된 데이터 제거
			- `localStorage.clear()`: 저장된 전체 데이터 제거
			- 데이터를 수정할 때
				1. `getItem()` 으로 데이터 가져오기
				2. `JSON.parse()` 으로 객체 형태로 변환
				3. 수정
				4. `JSON.stringify()` 으로 String형태로 변환 후 반영(`setItem()`)
2. Session Storage
		*sessionStorage란?
			- Key,Value형태로 Storage에 데이터를 저장할 수 있다
			- sessionStorage의 데이터는 페이지를 닫으면 사라진다
			- [참고] https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
*`lowDB`: Lodash패키지의 lowDB를 사용하면 localStorage의 데이터를 DB처럼 쉽게 관리 할 수 있다
	- JSON기반의 작은 DB



### OMDb API 사용해보기 
- 쿼리스트링(QueryString): 특정 주소에 접근할 때, 해당 페이지에 대한 옵션을 명시하는데 사용하는 문자
	*주소?속성=값&속성=값&속성=값
- OMDB API: 영화 데이터를 요청하고, 받아와서 화면에 출력하도록 도와주는 API
	- [참고] https://www.omdbapi.com/
- Axios: HTTP 요청을 처리해주는 자바스크립트 패키지 
	- Promise based HTTP client for the browser and node.js
	- 실제 웹 브라우저에서도 동작하므로, 일반 의존성 패키지 설치를 해야한다
	- [참고] https://github.com/axios/axios

### OMDb API 실습 코드
```html
// index.html
<h1>Hello World</h1>
<img src="" alt"" width="200">
```
```jsx
// main.js
import axios from 'axios'

function fetchMovies() {
	axios
		.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
		.then((res) => {
			console.log(res);
			const h1El = document.querySelector('h1');
			const imgEl = document.querySelector('img');
			h1El.textContent =  res.data.Search[0].Title;
			imgEl.src = res.data.Search[0].Poster;
		});
}
fetchMovies();
```
*요청 url에는 https를 사용하자
*메소드 체이닝 