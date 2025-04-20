# [KDC] React&Reducx로 시작하는 웹프로그래밍


<br>

## 🔥 7주차. React&Redux

### DOM API의 문제점과 해결 방법
*DOM API: 유일하게 JavaScript가 DOM을 다룰 수 있는 API
	- WebApplication 설계에 최적화되어 있지 않다
	
*SPA(Single-page Application)
	- 웹 이동 시 현재의 html페이지를 종료하고, 다른 html페이지를 로딩하는 것이 WorldWide, Web의 형식이다
	- 기존 문서를 없애고, 새로운 화면을 로딩해야하므로 깜빡이는 형태가 나올 수 있다. 이 경우 사용성이 떨어진다
	- Ajax를 사용하면 동적으로 html을 읽어와 화면 페이지 전환없이 UI를 갱신하게 되면, 깜빡거림없이 마치 앱과 같은 사용성을 제공할 수 있다
	- 이러한 웹 페이지를 Single-page Apllication이라고 말한다
	- SPA(Single-page Application) 특징
		1. 복잡도: 관리해야하는 상태와 화면이 많다. 어플리케이션의 규모에 따라 다루어하는 UI의 개수가 많다.
			*이러한 복잡한 UI를 DOM API로 UI를 만들게 되면 다양한 문제를 야기할 수 있는 구성을 DOM API가 제공하는 것이 커다란 문제

```jsx
const h1 = document.getElementsByTagName('h1');
console.log(h1.length);	//0

document.body.appendChild(document.createElement('h1'));
console.log(h1.length);	//1

document.body.appendChild(document.createElement('h1'));
console.log(h1.length);	//2

document.body.appendChild(document.createElement('h2'));
const h2 = document.getElementsByTagName('h2');
console.log(h2.length);	//1
```
- DOM을 추가할때마다 기존 DOM의 lenght가 변화하는 것은 DOM API의 라이브 오브젝트때문에 참조를 계속 유지하기 때문

```jsx
const H1 = document.querySElectorAll('h1');
console.log(H1.length);	//2
console.log(h1.length);	//2

document.body.appendChild(document.createElement('h1'));
console.log(H1.length);	//2
console.log(h1.length);	//3

// H1 => NodeList(2, [h1, h1]
// h1 => HTMLCollection(3) [h1, h1, h1]
```
- 어떤 DOM은 NodeList로, HTMLCollection으로 받아오는 등 일관성이 떨어진다
- 그래서 참조가 유지되기도, 유지되지 않기도 한다. 이렇게 일관성이 없는 동작은 Dom API의 커다란 문제이다.

<hr>

다양한 브라우저가 존재하고, 이러한 일관성 없는 Dom API의 동작들을 모두 크로스 브라우징을 해주는 것은 매우 어렵다.
크로스 브라우징 이슈뿐만 아니라 다양한 문제가 있는데, 특히 규모가 큰 SPA에서 커다란 문제로 이어질수도있다.
그래서 어플리케이션의 복잡도를 낮출 수 있는 프로그래밍 방식, 패턴을 찾기 시작했다.
그 중 하나가 **MVC패턴이다(Model-View-Controller)**
	성격이 다른 UI, 비즈니스로직, 데이터를 분리해 복잡도를 낮춰보자라는 점에서 착안한 패턴으로,
	Model과 View(UI)의 사이의 로직을 다루는 Controller로 분리되어있다.
	어플리케이션의 규모가 커지더라도 패턴을 유지해서 복잡도가 증가되지 않도록 했다.
	최근에는 클라이언트 어플리케이션의 로직과 view가 많아지다 보니 model이 서버의 모델과 종속성이 높아졌다.
	즉, 서버의 변화가 클라이언트에 커다란 영향을 준다는 단점이 생겼다. 
그래서 클라이언트에 더 맞는 패턴을 찾았고 바로 **MVVM패턴이다(Model-View-ViewModel)**
	클라이언트가 상태를 독립적으로 가지고 있고, 독립적인 상태를 잘 유지 관리할 수 있는 컨셉을 가지고 있다.
	2005년에 제안된 모델으로, React,Vue.js,Angular에 큰 영향을 끼친 패턴이다. 
	만약 접해본적 없다면 한번쯤 학습해보는 것을 추천한다.
이러한 패턴들은 어플리케이션의 규모가 커지더라도 복잡도는 적정 수준을 유지하도록 하기위한 시도였다(JQuery도 이에 해당)
하지만 이러한 패턴들도 Dom API의 고질적인 문제를 개선하는 방법은 아니었다. 그래서 지금까지 이러한 시도는 지속되어 왔고
현재로서는 React가 제시한 모델이 가장 성공적인 모델이다.
**React는 Dom자체를 쓰지 않는 것으로 DomAPI가 가진 문제를 해결하는 모델이다**

그렇다면 React는 어떻게 DomAPI를 사용하지 않고 Dom을 다룰 수 있을까?

<br>

### 최소 기능 제품(Minimum Viable Product, MVP)
어떠한 제품을 만들 때 제품의 가치를 증명받아야한다. 제품의 컨셉에 해당하는 가치를 인정받기 위해서는 
그 부분에 대한 선명도를 높여야하는데, 부가적인 부분이 많으면 선명도가 떨어지기 때문에 가치를 인정받기 어렵다.
그래서 핵심적인 부분만 초기 제품에 담는 것이 중요하고 이는 소프트웨어도 마찬가지다.

이러한 점을 리액트가 어떻게 접근했는지 살펴보려면 리액트의 초장기 버전, 즉 MVP만 담긴 버전을 살펴보는것을 추천한다


[참고 - 최소기능제품] https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%86%8C_%EA%B8%B0%EB%8A%A5_%EC%A0%9C%ED%92%88
[리액트 최초버전] https://github.com/facebook/react/releases/tag/v0.3.0

<br>

### 변경하지 않고 확대하기 

추가와 변경을 어떻게 잘 핸들링할 수 있을까? 리액트가 돔을 사용하지 않았다고하니, 우리도 코드를 변경되어야하지만.. 안전하게 변경하려면 코드 자체를 변경하지 않는건 어떤가.

다시 말하자면, 소프트웨어의 어떤 부분(코어)은 바뀌지 않게, 어떤 부분은 변경이 되도록 분리하자는 것이다. 이를 통해 소프트웨어의 안정성은 상대적으로 높아질 수 있다.

이러한 구조를 사용하는 방식에는 플러그인, 미들웨어가 존재한다.

*플러그인: 어플리케이션의 기능은 건들이지않고, 어플리케이션에서 사용할 수 있는 추가 기능을 제공 (예)크롬 확장프로그램
	- 이 때의 어플리케이션을 호스트 프로그램(호스트 어플리케이션)이라고 부른다.
	- 이를 위해서는 호스트 프로그램에서 플러그인을 사용할 수 있는 구조를 제공해야한다.
	- 안정성을 추구하며 다양한 기능을 제공할 수 있다.
	- [참고] https://ko.wikipedia.org/wiki/%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8
*미들웨어 - [참고] https://www.redhat.com/ko/topics/middleware
*컴포넌트 - [참고] http://wiki.hash.kr/index.php/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8
*플러그인과 미들웨어: 호스트 프로그램의 코드는 변경하지않고 새로운 기능을 제공하는 점은 동일하지만, 사용 형태나 구조에서는 차이가 있다

### 웹프론트엔드 개발환경
번들러가 웹팩일 필요는 없는데, 웹팩이 가지고 있는 아키텍처에 대해 알아두기위해 선택했다.
웹팩의 코어단은 실제 기능을 제공하기보다, 개별 기능을 제공하는데 필요한 코어의 구조만을 가지고 있다.
실제 사용자가 필요한 부분은 미들웨어, 플러그인, 로더라는 컨셉으로 제공한다.
어떤 기능을 어떻게 조합해서 사용할지에 대해 웹팩이 모두 제공하기는 부담스럽기 때문.

웹팩은 플러그인과 유사한 컨셉의 Loaders를 제공한다.
로더도 일종의 플러그인이라고 할 수 있지만, 작동의 메커니즘이 조금 다르다.
우리가 필수적으로 사용하는 Loaders는 Babel이 있다.

*Babel
바벨의 핵심 코어는 거의 변경이 없고, 대부분의 기능은 플러그인을 사용해 조합해 사용한다.
바벨은 다양한 언어를 변환하는 기능을 제공한다.

키