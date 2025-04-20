# [KDC] React&Reducx로 시작하는 웹프로그래밍


<br>

## 🔥 4주차

### 표기법
1. dash-case(kebab-case): `-` 기호를 사용한 표기법
2. snake_case: `_` 기호를 사용한 표기법
3. camelCase: 첫 단어의 첫 글자는 소문자, 다음 단어의 첫 글자를 대문자
4. PascalCase: 모든 단어의 첫 글자를 대문자
5. Zero-based Numbering: 0 기반 번호 매기기
	*특수한 경우를 제외하고 0부터 숫자를 센다
6. /* 여러줄 주석 */
7. // 한줄 주석
8. 한 줄의 코드가 끝나면 `;`을 붙여주어 코드가 끝났음을 명시한다
	
	
	
#### 데이터의 종류
- String: 문자 데이터를 따옴표를 사용해 표기한다. 백틱(그레이브)을 사용하는 경우 `${변수명}` 으로 표기 가능
	```jsx
	let myName = "jinsook";
	let email = "jinsukuku@gmail.com";
	let hello = `Hello ${myName}`;
	```
	* `${}` 을 보관이라고 부른다
- Number: 숫자 데이터. 정수 빛 부동소수점 숫자를 나타낸다.
- Boolean: 불린 데이터. `true`, `false` 의 두가지 값을 갖는 논리 데이터
- Undefined: 값이 할당되지 않은 상태를 나타낸다 (예) `let undef;`
- Null: 어떤 값이 의도적으로 비어있음을 의미한다 (예) `let empty = null;`
- Object: 객체 데이터. 여러 데이터를 Key:Value의 형태로 저장한다
	**메소드: 객체 데이터에 함수가 들어있다면 이를 메소드라 부른다
- Array: 배열 데이터. 여러 데이터를 순차적으로 저장한다



#### 변수, 예약어
- 변수: 데이터를 저장하고 참조(사용)하는 데이터의 이름
	*`var` `let` `const`
	*`var` 사용은 지양한다
	*`let`을 사용해 선언한 변수는 재할당이 가능하다
	*`const`를 사용해 선언한 변수는 재할당이 불가능하다 
- 예약어: 특별한 의미를 가지고 있어 변수나 함수 이름으로 사용할 수 없는 단어
	*(예)`this` `if` `break` ... 


#### 함수
```jsx
function helloFunc() {
	// 실행코드
	return "hello";
}

// 함수 호출
let res = helloFunc(); 
console.log(res); // hello
```
- 함수: 특정 동작(기능)을 수행하는 일부 코드의 집합
	*매개변수: 함수 선언시에 지정하며, 인수의 값을 받아와 저장하는 변수
	*인수: 함수 호출시에 사용한 값

```jsx
// 익명 함수의 표현 
let hi = function() {
	console.log('hi');
}
```
- 익명 함수: 일반적으로 익명 함수는 변수에 할당해서 사용한다
	* 익명 함수를 변수에 할당 → 함수를 표현
	* 기명 함수를 선언 → 함수를 선언
	

#### 조건문
- 조건문: 조건의 결과에 따라 다른 코드 실행할수있도록 만들어주는 구문


#### DOM API
- DOM: Document Object Model
- API: Application Programming Interface
- DOM API를 사용해 자바스크립트에서 HTML을 제어할 수 있다

```jsx
// html요소 찾기 
const boxEl = document.querySelector('.box');

// *addEventListener()
// 첫번째 인수 = 이벤트(상황)= 'click'
// 두번째 인수 = 핸들러(실행할 함수) = 익명함수
boxEl.addEventListener('click', function(){
	console.log("CLICK");

// *classList.add(추가할 class명);
boxEl.classList.add('active');

// *classList.contains(확인할 class명);
boxEl.classList.contains('active'); //true

// *classList.remove(삭제할 class명);
boxEl.classList.remove('active');
boxEl.classList.contains('active'); //false
});

```
- [참고] 만약 스크립트가 제대로 DOM을 찾지 못한다면 
	- `<scrip>` 위치가 `<head>` 내부인 경우 제대로 작동하지 않는다
	- `<body>`의 내용을 읽기 전에 js파일이 실행되었기 때문
	- 이러한 상황을 해결하려면
		1. [권장] `defer` 키워드를 `<script>` 내부에 추가
		2. `<body>` 최하단에서 `<script>` 사용
			- 정보를 나타내는 부분(head)이 아닌 구조(body) 부분에 `<script>`를 사용하는 것은 권장하지 않는다


```jsx
// html요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');

// 반복해서 함수 실행
// *forEach(익명함수(반복요소, 반복idx) {...});
boxEls.forEach(function (boxEl, index) {
	boxEl.classList.add(`order-${index+1}`);
	console.log(index, boxEl);
});
```
- `querySelectorAll()`
- `forEach()`

```jsx
const boxEl = document.querySelector('.box');

// getter
console.log(boxEl.textContent); //before

// setter 
boxEl.textContent = 'After';
console.log(boxEl.textContent);	//After
```
- getter: 값을 얻는 용도
- setter: 값을 지정하는 용도


#### 메소드 체이닝(Method Chaining)
```jsx
const a = 'Hello';
const b = a.split('').reverse().join(''); // 메소드 체이닝 
```
- 메소드 체이닝: 메소드를 여러개를 붙여서 사용하는 형태를 의미한다
- `split()`: 문자를 인수 기준으로 쪼개서 배열로 반환 
- `reverse()`: 배열을 뒤집는다 
- `join()`: 배열을 인수 기준으로 문자로 병합해 반환한다 

#### Node.js
- Node.js: Chrome V8 JavaScript엔진으로 빌드된 JavaScript 런타임
	*Chrome V8 JavaScript엔진: JavaScript 문법을 해석하고 실제로 동작시켜주는 엔진 
	*런타임: 프로그래밍언어가 동작하는 환경
- JavaScript 동작 환경
	*Node.js가 설치된 컴퓨터 환경
	*웹 브라우저(Chrome,Edge..)
- Node.js를 통해 설치하고 사용한 모듈들은 실제 브라우저 환경에서 직접 동작할 수 없다
- 결국 모듈들을 환경에 맞게 변환을 해주어야하는데, 이러한 변환작업을 위해 Node.js가 필요하다
- 하나의 버전만 설처하기보단 언제든지 버전을 변경하며 사용할수 있도록 NVM(NodeVersionMAnager)을 설치하자

#### NVM 
- NVM 설치(MAC)
	- Google에 NVM검색해서 github로 이동 (https://github.com/nvm-sh/nvm)
	- Installing and Update (https://github.com/nvm-sh/nvm#installing-and-updating)
	- 설치에 필요한 스크립트 코드를 복사, 터미널을 열어 설치
		- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
	- 설치 후, 터미널에서 `nvm --version` 설치버전을 확인한다 
- NVM 설치(Windows)
	- Google에 nvm-windows검색해서 github로 이동 (https://github.com/coreybutler/nvm-windows)
	- DownloadNow(https://github.com/coreybutler/nvm-windows/releases)
	- NVM Setup 다운로드, 설치파일 실행
	- 설치 후, vsCode 터미널에서 `nvm --version` 설치버전을 확인한다 
- NVM 사용하기
	- `nvm ls`: 현재 nvm를 통해서 설치한 node.js 리스트 
	- `nvm install 12.14.1`: nvm을 통해서 node.js 설치
		*설치버전을 구체적으로 입력하는 것을 유의적 버전이라고 부른다
	- `nvm use 12.14.1`: 설치된 node.js 중 에서 사용할 버전 선택
		*현재 사용중인 버전에는 `(Currently using 64-bit executable)`라고 명시되어 있다
		*`node --version`을 입력해 현재 사용중인 node.js 버전을 확인하자
	- `nvm uninstall 삭제할버전`: 설치된 node.js 버전을 삭제한다
	- `nvm help`: nvm으로 사용할수있는 명령어 목록을 확인할 수 있다

#### NPM
- NPM(Node Package Manager): 전 세계 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리
	*패키지: 이미 만들어져있는 다양한 기능들 
- 직접 필요한 패키지를 link나 script태그로 원시적으로 연결해서 사용할 수 있다
- 최신의 웹 프론트엔드 개발에서는 프로젝트에 직접적으로 설치해서 별도의 가공처리를 통해 적용해 사용한다
- Node.js 환경에서 npm을 통해 패키지를 설치하고 관리하고 동작시킨다.
- 활용 방법 등을 공부해야하기때문에 학습 난이도가 높고 구성이 복잡하다.
- 하지만 이러한 방식으로 패키지를 사용하면 관리 효율 증가, 손쉬운 기능 고도화된다는 장점이 있다.
- 학습 난이도가 높아지는 반면 관리 효율이 증가하는 Trade-off(상충관계)가 발생 한다.

### NPM을 사용한 프로젝트 생성
- `npm init -y`: npm으로 프로젝트 관리를 하기위한 package.json 파일 생성
	* package.json 파일 
		- name: 폴더명(defualt)
		- version: 프로젝트 버전
		- main: "index.js"	
			*현재 프로젝트를 패키지로 만들어 npm 생태계에 업로드할 때 필요한 옵션
		- script: 현재 프로젝트 내부에서 사용할 수 있는 스크립트 명령들
			*프로젝트 관련 명령들 사용하기 편하다
		- devDependencies: 현재 프로젝트 내에서 사용중인 패키지 확인 가능
- `npm install parcel-bundler -D`: parcel-bundler 패키지 설치
	- 프로젝트 구조에 추가된 폴더/파일
		- `node_modules` > `parcel-bundler`: 설치된 패키지를 확인할 수 있다
			*node_modules 폴더가 삭제되어도 package.json파일에 명시되어있는 내용을 바탕으로 npm install을 통해 필요한 패키지를 한번에 설치할 수 있다
		- `package-lock.json` 
	- 설치한 parcel-bundler 외에도 추가 설치된 패키지는, parcel bundler 패키지에서 사용하는 패키지들이다
	- parcel bundler 패키지에서 사용하는 패키지는 아래 경로에서 확인할 수 있다
		- `node_modules` > `parcel-bundler` > `package.json`
- `npm install lodash`: -D 없이 lodash 패키지 설치
	* npm i: install의 약어인 i만 사용할수도 있다
- `-D` 의 의미: 개발용 의존성 패키지 or 일반 의존성 설치
	*개발용 의존성 패키지 설치
		- 설치한 패키지가 개발 시에만 필요하고, 웹 브라우저에서 동작할 때에는 필요하지 않다 
		- npm을 사용해 패키지를 설치할 때 `-D`사용
		- package.json의 devDependencies에 추가
	*일반 의존성 패키지 설치
		- 실제 웹 브라우저에서 동작할 수 있다
		- npm을 사용해 패키지를 설치할 때 `-D`사용X
		- package.json의 dependencies에 추가
	*--save-dev 의 약어 = -D
		
		
### package.json / pakcage-lock.json 차이
- `package.json`: 현재 프로젝트 관리 파일로, 개발자가 직접 관리한다 (사용되는 패키지 정보를 명시)
	*pakage.json 파일에 있는 패키지 버전 정보는 실제 설치된 버전과 다를 수 있다
	*node-modules폴더에서 해당 패키지의 package.json에서 실제 설치된 버전을 확인하자
- `package-lock.json`: package.json에 명시되어 있는 패키지에서 내부적으로 사용하는 패키지까지 자동 관리

### 개발 서버 실행과 빌드(parcel-bundler)
- 개발 서버 실행: 
	1.터미널 > `parcel index.html` (오류 발생)
		*parcel-bundler를 개발 의존성 패키지로 설치했기 때문에, 터미널에서 바로 사용할 수 없다
		*pacage.json에서 scripts에 명령어를 추가해야 한다
			** "scripts":{"dev": "parcel index.html"},
		*pacage.json에서 scripts에 명령어를 추가하는 것은 프로젝트 내부에서만 해당 명령어가 동작한다는 것을 인지시킬 수 있다
	2.터미널 > `npm run dev`
		*npm에서 dev라는 명령어를 실행한다(run)
		*dev는 pacakge.json에서 지정한 명령어인 `parcel index.html` 를 의미한다
	3.localhost:port
	*parcel-bundler는 프로젝트 변경사항을 인지하면 자동으로 개발서버를 다시 작동시킨다
	*Ctrl+C 를 눌러 서버를 실행을 종료할 수 있다
- 패키지의 import 과정
	- main.js 파일의 최상단에 `import _ from 'lodash'` 를 추가한다
	- `import _ from 'lodash'`
		* lodash 패키지를 가져와서(import) _ 라는 변수에 할당하여 사용한다
		* lodash는 node_modules에서 import된다
	- lodash 패키지의 package.json을 확인하면 `"main": "lodash.js"`
	- lodash를 import하면 main으로 지정된 lodash.js가 가져와진다
	- `console.log(_.camelCase("hello wordld");` 로 확인하자
- 빌드 
	- package.json에서 scripts에 명령어 추가 (`"build": "parcel build index.html"`)
	- `parcel index.html`은 로컬환경에서 개발용으로 서버를 열어 브라우저를 확인한다
	- 반면 `parcel build index.html`은 사용자들이 보는 용도의 결과물이 출력된다
	- `npm run build` 하게 되면, 프로젝트에 dist폴더가 만들어지고 내부에 난독화된 파일이 생긴것을 확인할 수 있다
		*dist: distribution의 약자로, 부가코드를 저장할 장소 혹은 디렉토리를 의미
			- 개발자가 확인하는 것이 아닌 웹 브라우저에서 동작되는 것을 목적으로한다
		*난독화: 작성된 코드를 읽기 어렵게 만드는 작업으로, 용량을 축소하고 읽기 어렵게 만든 최적화된 상태
			- 들여쓰기, 공백조차 용량이므로 난독화해서 build한다
- parcel-bundler는 개발환경에서 서버를 실행하고 빌드하기위한 dist폴더를 만드는 용도이므로 개발 의존성 패키지로 설치했다
- parcel-bundler는 프로젝트 개발에 사용한 여러 모듈(패키지)를 하나의 번들(Bundle)로 묶어내는 작업까지 진행한다


### 유의적 버전(SemVer)
- 숫자를 3개 입력하고 마침표로 구분하는 버전을 유의적 버전이라고 말한다
- 버전 정보에 대한 의미가 있으므로 유의적 버전이라 말한다
- (예) 12.14.1
	- `12` Major버전: 기존 버전과 호환되지 않는 새로운 버전
	- `14` Minor버전: 기존 버전과 호환되는 새로운 기능이 추가된 버전 
	- `1` Patch버전: 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전
- Major버전에 `^`이 붙어있다면, 동일한 Major버전 중 최신 버전을 유지하겠다는 의미 
	- 업데이트하면 Minor, Patch가 최신으로 변경될 수 있다
	- package.json에서 패키지 버전에 ^가 붙어있다면 최신 버전을 유지하겠다는 의미이다
	- package.json에서 패키지 버전에 ^를 붙이지 않았다면 업데이트 명령어를 사용해도 업데이트 되지 않는다
- `npm info 패키지` 명령어로 패키지의 최신 버전을 확인할 수 있다


### NPM 프로젝트의 버전관리(.gitignore)
- 버전 관리가 필요없는 폴더나 파일은 깃허브에 푸시할 필요가 없다 
- 프로젝트 구조를 확인하고 왜 버전관리가 필요없는지 알아보자
	ㄴ .cache				X build를 통해 해당 폴더를 동일 구조로 생성할 수 있다
	ㄴ .dist					X build를 통해 해당 폴더를 동일 구조로 생성할 수 있다
	ㄴ node_modules 			X package.json이 있다면 언제든지 npm install을 통해 생태계에 설치할 수 있다
	ㄴ index.html			O	
	ㄴ main.js				O
	ㄴ package-lock.json		O
	ㄴ package.json			O
```text
.cache/
dist/
node_modules/
```
- 버전관리가 필요없는 파일을 푸시하지 않기위해 `.gitignore`파일을 만들어주자
