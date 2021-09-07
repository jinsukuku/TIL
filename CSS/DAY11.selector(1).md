# 📌 11일차 
- 2021.09.07(화)
- 목차 : 선택자

<br>

## ✅ 선택자 (selector)
- html 요소를 선택할 때 사용
- JavaScript에서도 선택자를 사용해 html요소를 선택한다

<br>



### 👉 주요 선택자 
```CSS
h1 { color : red; }
```
- **타입 선택자(type selector)** : 태그 이름을 통해 요소를 선택하는 선택자 
- 하나의 html문서 내부의 특정 요소 모두에 스타일을 적용된다
- 특정 요소에 일관적으로 적용해야하는 공통 스타일을 위해 많이 사용하고, CSS파일 상단에 작성하는 편이다

<br>

```html
<ul>
    <li id="title">아이디는 하나의 웹 문서에 중복될 수 없다</li>
    <li class="blue green">GREEN</li>
    <li class="blue">BLUE</li>
</ul>
```
```CSS
/* ID selector */
li#title { color:orange; }

/* class selector */
li.blue { color:blue; }
li.green { color:green; }
```

> <ul>
>     <li id="title" style="color:orange">아이디는 하나의 웹 문서에 중복될 수 없다</li>
>     <li class="blue green"  style="color:green">GREEN</li>
>     <li class="blue"  style="color:blue">BLUE</li>
> </ul>


- 태그의 id와 class를 사용해 특정 요소를 선택한다
- id는 `#` 을 사용해 선택하고, clss는 `.`를 사용한다
- class는 하나의 요소에 여러개를 지정할 수 있고, 캐스캐이딩 원칙에 의해 나중에 작성된 스타일이 적용된다

<br>


### 👉 속성 선택자 (Attribute Selector)
- html태그가 갖는 속성값을 사용해 요소를 선택할 때 사용한다

```html
<p><a href="sample1" target="_blank">SAMPLE01</a></p>
<p><a href="sample2.html" target="_blank">SAMPLE02</a></p>
<p><a href="test_sample3.html">SAMPLE03</a></p>
<p><a href="sample1">SAMPLE01</a></p>
```
```CSS
/* 속성 선택자 (Attribute Selector) */
a[target] { color:hotpink; }
a[target="sample1"] { color:green; }
a[target^="test"] { color:orange; }
a[target$=".html"] { background-color:#eee; }
a[target*="html"] { font-style:italic; }
```
> <p><a href="sample1" target="_blank" style="color:green">SAMPLE01</a></p>
> <p><a href="sample2.html" target="_blank "style="color:hotpink; font-style:italic; background-color:#eee; ">SAMPLE02</a></p>
> <p><a href="test_sample3.html" style="color:orange; font-style:italic; background-color:#eee;">SAMPLE03</a></p>
> <p><a href="sample1" style="color:green">SAMPLE04</a></p>

- `[attr]` : html태그에 해당 속성이 있으면 선택
- `[attr=""]` : html태그의 속성값까지 동일하면 선택
- `[attr^="⭐"]` : 속성의 값이 ⭐으로 시작하는 속성값을 찾아서 선택 
- `[attr$="⭐"]` : 속성의 값이 ⭐으로 끝나는 속성값을 찾아서 선택 
- `[attr*="⭐"]` : 속성의 값이 ⭐을 포한하는 경우를 찾아서 선택

<br>


### 👉 가상클래스 선택자 (Pseudo-Class Selector)
- 기존의 선택자들에 가상 클래스 선택자를 추가해서 선택하기 원하는 요소의 범위를 좁힐 수 있다
- 가상 클래스 선택자는 class 선택자와 함께 사용할 수 있다
    - class 선택자와 함께 사용할 때, 동일한 class를 가진 요소 중 n번째 요소를 선택하는 것이 아니라
    - class 선택자로 선택한 요소의 **형제 요소 중 n번째 요소를 의미하는 것이므로 주의하자**

<br>

```html
<ul>
    <li class="fruit apple">사과</li>
    <li class="fruit banana">바나나</li>
</ul>
<ol>
    <li class="moive insideout">인사이드아웃</li>
    <li class="moive toystory">토이스토리</li>
</ol>
```
```css
li:first-child { color:hotpink; }
li.movie:first-child { font-size:20px; }
```

><ul>
>    <li style="color:hotpink;">사과</li>
>    <li style="">바나나</li>
></ul>
><ol>
>    <li style="color:hotpink; font-size:20px;">인사이드아웃</li>
>    <li style="">토이스토리</li>
></ol>


1. `:first-child` : 선택한 태그의 형제 요소 중 첫번째 요소를 선택한다
2. `:last-child` : 선택한 태그의 형제 요소 중 마지막 요소를 선택한다
3. `:nth-child(n)` : 선택한 태그의 형제 요소 중 n번째 요소를 선택한다
3. `:nth-child(2n+1)` : 선택한 태그의 형제 요소 중 2n+1번째 요소를 선택한다.
   - 이 때, 2n+1이라는 수식 외에도 다양한 수식을 사용할 수 있다 (예) n+3
4. `:nth-child(even)` : 선택한 태그의 형제 요소 중 짝수번째 요소를 선택한다
5. `:nth-child(odd)` : 선택한 태그의 형제 요소 중 홀수번째 요소를 선택한다

<br>

-------------

```html
<section>
    <div class="movie">토이스토리</div>
    <p class="movie">주토피아</p>
    <p class="movie">인사이드아웃</p>
    <p class="movie">겨울왕국</p>
    <div class="movie">코코</div>
</section>
```
```css
p:first-of-type { color : orange; }
div:last-of-type { color : hotpink; }
.movie:first-of-type { background-color : gray; }
```
><section>
>    <div class="movie" style="background-color : gray;">토이스토리</div>
>    <p class="movie" style="color:orange; background-color : gray;">주토피아</p>
>    <p class="movie">인사이드아웃</p>
>    <p class="movie">겨울왕국</p>
>    <div class="movie" style="color:hotpink;">코코</div>
></section>



6. `:first-of-type` : 선택한 태그 요소 중 첫번째 요소를 선택한다  
    - `.movie:first-of-type` : class선택자와 함께 사용하면 위의 예제에서는 토이스토리와 주토피아에 스타일이 적용된다
    - 어떠한 태그인지 명시하지 않고 class선택자를 사용해 요소를 선택했기 때문
7. `:last-of-type` : 선택한 태그 요소 중 마지막 요소를 선택한다
8. `:nth-of-type(n)` : 선택한 태그 요소 중 n번째 요소를 선택한다
8. `:nth-of-type(even)` : 선택한 태그 요소 중 짝수번째 요소를 선택한다
8. `:nth-of-type(odd)` : 선택한 태그 요소 중 홀수번째 요소를 선택한다





<br>









### 👉 가상요소 선택자 
- 

<br>


### 👉 선택자 결합 : 하위/자식 
- 

<br>


### 👉 형제 선택자 / 그룹화 
- 

<br>


### 👉 범용 선택자 
- 

<br>


### 👉 상속 제어하기
- 

<br>


### 👉 우선순위
- 



<br>
