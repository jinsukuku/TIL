# 📌 12일차 
- 2021.09.08(수)
- 목차 : 단위와 값 

<br>

## ✅ 단위와 값
- mdn에서 < > 와 함께 작성된 값은 단위를 의미하고, 그렇지 않은 경우는 키워드를 의미한다


<br>

### 👉 절대 길이 `px`
- 절대 단위는 모니터에 보여지는 물리적인 거리(고정값)를 의미한다
- 절대 단위의 단위는 다양하지만, 일반적으로 `px`을 사용한다
- 절대 단위를 사용해 크기를 지정하게 되면, 확대 및 축소하거나 사용자가 편의를 위해 크기를 조절할 때 반영되지 않는다
- 웹 접근성적인 측면에서는 절대 단위를 사용하지 않는 것을 권장한다

---

- 절대 단위 : `px`, `pt` ...
- 상대 단위
    - 글꼴 상대 길이 : `em`, `rem` ...
    - viewport 백분율 길이 : `vw`, `vh` ...
    - 상대적으로 값이 적용되나, 실제로는 `px` 단위로 계산되어 보여진다

<br>


### 👉 상대 길이 `em`, `rem`
```html
<div class="parent">
    안녕
    <div class="child child1">안녕하세요</div>
    <div class="child child2">안녕하세요</div>
    <div class="child child3">안녕하세요</div>
</div>
<div class="test">테스트</div>
```
```css
.parent { font-size:24px; }
.child1 { font-size:1em; }
.child2 { font-size:1.5em; }
.child3 { font-size:2em; }
.test { font-size:2em; }
```
><div class="parent" style="font-size:24px;">
>    안녕
>    <div class="child child1" style="font-size:1em">안녕하세요</div>
>    <div class="child child2" style="font-size:1.5em">안녕하세요</div>
>    <div class="child child3" style="font-size:2em">안녕하세요</div>
></div>
><div class="test" style="font-size:2em">테스트</div>

<br>

1. `em`
    - `em` : 부모의 글자 크기를 기준으로, 상대적으로 크기가 조절된다
    - `1em` : 부모의 글자 크기
    - `1.5em` : 부모의 글자 크기 x 1.5
    - 별도로 부모의 글자 크기가 정해져 있지 않은 경우, 웹 브라우저에 정해진 기본 글자 크기를 기준으로 삼는다

<br>

2. `rem`
    - `em`은 현재 요소의 부모 요소를 기준으로 하기 때문에 기준을 찾을 때 번거롭다
    - 반면 `rem`은 root(최상위 부모 요소)의 크기를 기준으로 하기때문에 좀 더 직관적이고 편리하다 
    - root(최상위 부모 요소)의 크기는 웹 브라우저의 기본 설정 크기를 의미한다
    - `rem` : root(최상위 부모 요소)의 글자 크기를 기준으로, 상대적으로 크기가 조절된다
    - `1rem` : root의 폰트 사이즈 = 웹 브라우저의 기본 글자 크기






<br>


### 👉 상대 길이 `vw`, `vh`

```html
<div class="contaniner"></div>
```
```css
body { margin:0; }
.container {
    background-color:tomato;
    width:50vw; height:60vh;
}
```

- `viewport` : 현재 보이는 브라우저의 크기(화면의 크기)로, 디바이스마다 `viewport` 의 크기가 다르다
- 모든 `viewport` 의 `width` 는 `100vw`, `height`는 `100vh`
- 이를 기준으로 상대적인 수치를 사용해 반응형을 만들 수 있다


<br>




### 👉 상대 길이 `vmin`, `vmax`

```html
<div class="contaniner"></div>
```
```css
body { margin:0; }
.container {
    background-color:tomato;
    width:100vwmin; height:100vwmin;
}
```

- `vmin` : `vw`와 `vh` 중, 더 작은 값
- `vmax` : `vw`와 `vh` 중, 더 큰 값
- 가로 모드와 세로모드를 대응하기 위해 주로 사용된다

<br>



### 👉 percentage `%`
```html
<div class="parent">
    <div class="child"></div>
</div>
```
```css
.parent{ width:100px; height:100px; background-color:tomato; }
.child { width:100%; height:50%; background-color:coral; }
```

- 부모 요소의 크기를 기준으로 상대적인 크기를 조절할 수 있다

<br>



### 👉 함수 표기법 `calac()`, `min()`, `max()`
```html
<div class="container">...</div>
```
```css
.container{
    width:calc(100% - 50px); 
    height:min(100%, 500px;
    background-color:wheat;
}
```
- `calac()` : 서로 다른 단위의 계산 결과를 적용하고 싶을 때 사용하는 함수 (사칙연산 모두 가능)
    - 연산자 좌우에는 반드시 공백을 넣어주어야한다 (예) 100% - 50px(O), 100%-50px(X)
- `min()` : 나열한 여러 값 중, 가장 작은 값을 적용한다 
- `max()` : 나열한 여러 값 중, 가장 큰 값을 적용한다
- `min()`, `max()`는 IE에서는 지원되지 않는다


<br>




