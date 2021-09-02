# 📌 6일차 
- 2021.09.02(수)
- 목차 : 구조를 나타내는 요소


<br>


## ✅ 구조를 나타내는 요소
### 👉 컨테이너 태그 `<div>` `<span>`
1. `<div>` 
    - division을 의미하며, 특정 구역이나 구획을 분할하거나 묶는 용도로 사용된다.
    - 내부의 내용이 없는 경우, css로 스타일을 적용하지 않는 이상 보여지지 않는다.
    - 컨테이너로, 아무것도 표현하지 않는다. 아무런 의미를 갖지 않는다.
    - 다른 요소를 묶어주어 css 스타일을 적용하기 쉽도록 돕거나, 레이아웃을 짜는데에 많이 된다
    - 의미가 있는 다른 요소를 사용해야하는 경우(`<article>`, `<nav>`)에 div태그를 사용하면 안된다
    - 블록 요소에 해당한다

2. `<span>`
    - 문장 컨텐츠를 위한 순수 컨테이너로 인라인 요소에 해당한다
    - `<div>`태그 와 같이 별도의 의미를 갖지 않는다
  
<br>

### 👉 시멘틱 태그
- 시멘틱 태그는 컨테이너 태그인 `<div>`와 마찬가지로 블록 컨테이너로 동작한다
- 하지만 의미가 없는 `<div>` 와 달리(non-semantic), **시멘틱 태그는 의미를 가진다**
- 요소의 의미를 고려해서 구조를 설계하고 코드를 작성하도록 하자 
- 의미론적인 시멘틱 마크업을 사용해야하는 이유 
    - SEO 
        - 시멘틱적인 부분을 고려해서 작성해야, 검색 상위 노출에 용이하다 
        - 검색 엔진이 마크업을 분석해 중요한 키워드로 사용하기 때문
    - 웹 접근성 
        - 스크린 리더로 페이지를 탐색할 때에, 마크업을 통해 의미를 파악한다
    - 개발자적 시선
        - 시멘틱 태그를 사용하면 의미 있는 코드블록을 한눈에 찾을 수 있다
        - 코드를 작성하고 유지보수하는데에 있어 생산성, 가독성 측면에서도 유리하다
        - 원하는 의미의 시멘틱 태그가 없다면 의미있는 이름짓기를 하도록하자
- 가능하면 의미가 없는 컨테이너 태그보다 시멘틱 태그를 사용하자
- **non-semantic 한 컨테이너 태그의 남발은 지양하자**

### 👉 시멘틱 태그의 종류
1. `<header>`
```html
<header>
    <h1>Main Title</h1>
</header>
```
- 소개 및 탐색에 도움을 주는 컨텐츠를 담는다. (예) 제목, 로고, 작성자 이름 등
- 하나의 웹 페이지에 하나의 `<header>`를 사용한다.
- `<header>`와 `<footer>`는 웹 페이지에 동일한 형태를 갖는 경우가 일반적이다
```html
<article>
    <header>
        <h2>오늘의 기사 제목</h2>
        <p>오늘의 기사 소제목 <time daetime="2021-09-02"></time> by kuku</p>
    </header>
    <p>기사 내용을 이러쿵 저러쿵 오오오오오</p>
</article>
```
- 본문에 넣을 때는, 본문마다 사용할 수 도 있다. (예) 기사 제목
<br>

2. `<nav>`
```html
<nav>
    <ul>
        <li><a href="#">개발자를 위한 웹 기술</a></li>
        <li><a href="#">HTML:Hypertext Markup Language</a></li>
        <li><a href="#">HTML 요소 참고서</a></li>
        <li><a href="#">&lt;nav&gt;:탐색 구획 요소</a></li>
    </ul>
</nav>
```
- 현재 페이지가 어디인지, 다른 곳으로 이동하려면 어떻게 해야하는지를 보여주는 영역을 의미
- 하나의 페이지 안에서 탐색을 용이하게 하도록 도움을 준다

<br>
  
3. `<main>`
- `<body>` 태그의 하위 태그로 사용되며, 주요 콘텐츠를 묶을 때 사용된다 
- `<main>` 태그는 다른 시맨틱 태그를 감싸는, 가장 바깥쪽의 시맨틱 태그이다 
- html 문서 내에 단 하나만 사용해야 하며, 만약 여러개를 사용해야한다면 hidden을 사용해 숨겨주어야한다
```html
<main role="main">
    ...
</main>
```
- 다른 시멘틱 태그와 다르게, Internet Explorer 에서는 지원하지 않는다
- Internet Explorer 에서 사용하려면 `<main>` 태그의 **role 속성에 태그의 목적을 명시해 접근성을 확보해야한다**
- 

<br>

4. `<article>`
```html
<article class="forecast">
    <!--header-->
    <header>
        <h1>오늘의 날씨</h1>
    </header>
    <!--article-->
    <article class="day-forecast">
        <h2>2021년 9월 2일(목)</h2>
        <p>하루종일 흐립니다. 작은 우산을 챙기세요.</p>
    </article>
    <!--footer-->
    <footer>
       © 기상청 
    </footer>
</article>
```
- 하나의 웹 페이지 안에 여러개 사용할 수 있다
- 독립적인 구분이 가능해, 베포하거나 재사용이 가능한 구획을 의미한다
- 블로그의 글, 매거진의 뉴스 기사처럼 단독으로 콘텐츠가 될 수 있는 경우에 사용한다
- `<article>` 안에 여러 `<section>` 이 있을 수 있고, 반대의 경우도 가능하다
- `<article>` 자체가 단독 콘텐츠로 사용가능하기 때문에, `<header>` 와 `<footer>`를 사용할 수 있다
- `<article>`를 식별하는 수단으로 heading 태그(h1~h6)를 사용한다 
- **[예제 확인하자]** https://developer.mozilla.org/ko/docs/Web/HTML/Element/article

<br>

5. `<section>`
- 일반 구획 요소를 의미한다.
- `<article>`이 될 수 있는지 확인하고, 아니라면 `<section>`을 사용하자
- `<div>` 와 비슷한 역할이라고 생각할 수 있는데, `<div>`는 레이아웃이나 스타일을 위해 사용되고,
- `<section>`은 문맥적으로 호흡이 끊어지는 부분을 구분해주기 위한 시멘틱 태그이다
- 즉, 문서 요약에 해당 구획이 논리적으로 구분되어야하고, 단독 콘텐츠로 사용할 수 없을 때 `<section>`을 사용한다 
- `<section>`를 식별하는 수단으로 heading 태그(h1~h6)를 사용한다. (필수는 X, 웹 접근성을 높이기 위함)

<br>

6. `<aside>`
- side bar를 만들 때 주로 사용된다. 별도 구획 요소라고도 말한다
- `<aside>` 내의 콘텐츠는 부가적인 정보로, 생략해도 문제가 되지않는 정보를 넣는다
- `<aside>` 태그는 일반적으로 사이드바, 혹은 콜아웃 박스로 표현한다

<br>

7. `<footer>`
```html
<footer>
    <p><a href="https://dev-ku.tistory.com">BLOG</a></p>
    <p>© 2021 devku</p>
</footer>
```
- 웹 페이지의 정보나, 연관 사이트를 연결하는 아이콘 그리고 저작권 정보 및 운영진 연락처 등을 보여준다
- 다른 컨텐츠를 넣을 수 있으나, footer 내에 또 다른 footer나 header를 넣어서는 안된다



<br>

### 👉 시멘틱 태그를 사용해보자 
```html
<!-- other content -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>These bright red apples are the most common found in many
    supermarkets.</p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for
    apple pies.</p>
    <p>... </p>
    <p>... </p>
  </article>

</main>

<!-- other content -->
```







