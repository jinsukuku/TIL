# 📌 10일차 
- 2021.09.06(월)
- 목차 : CSS 개요

<br>

## ✅ CSS 개요
### 👉 CSS
- CSS(Cascading Style Sheets) : html문서의 스타일을 다루기 위한 문서
- CSS도 html처럼 W3C로 부터 권고안의 버전이 있다
- CSS1,CSS2와 달리, CSS3는 모듈별로 버전이 나뉜다 
- `font`, `table`, `animation` 등 의 모듈들이 각자의 버전을 갖는다 
- 웹 브라우저마다 지원 가능한 모듈의 버전이 다를 수 있으니 주의하자
- `Cascading` : 말하자면 위에서 아래로 흐르는 형태
- 스타일을 부모요소에게 적용하면, 하위 요소도 상속받아 동일한 스타일이 적용된다


<br>

### 👉 CSS의 구조
<img src="https://mdn.mozillademos.org/files/9461/css-declaration-small.png" width="480">


- CSS는 룰 기반의 언어 (rule-based)
- CSS를 사용해 특정 요소, 혹은 요소들의 집합에 스타일을 정의할 수 있다 
- Selector : 요소를 선택할 때에는 **선택자(Selecter)** 를 사용한다
- Declaration : 요소에 적용할 스타일에 대한 블록은 **선언(Declaration) 블록**이라고 부른다 
- Property/value : 하나의 스타일 선언이 끝난 후에는 **세미콜론(;)** 으로 반드시 구분해준다



<br>

### 👉 CSS의 주석
```CSS
h1 {
    background-color:red; /* h1 배경 색상 */
}
```
```CSS
/*
여러 줄 
주석도 가능
*/
```
- **/* 내용 */** 의 형식으로 지정 
- 멀티 라인 주석도 지원한다 

<br>

### 👉 CSS 적용 방식

1. 내부 스타일(embeded)
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                h1 { color:red; }
                p { color:blue; }
            </style>
        </head>
        ...
    ```
    - html문서에서 `<style>`태그를 사용해 스타일 지정
    
<br>


2. 인라인 스타일(inline)
    ```html
    ...
    <body>
        <h1 style="color:red">Welcome!</h1>
    </body>
    ...
    ```
    - html문서에서 요소에 직접 스타일 지정
    - 특별한 경우가 아니면 사용하지 않는 것을 권장    

<br>

3. 외부 스타일(external)
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>CSS</title>
            <link res="stylesheets" href="css/test.css">
        </head>
        ...
    ```
    - 외부 파일을 html문서와 연결해 스타일 지정 **(권장)**
    - `rel` : html문서와 연결한 외부 파일간의 관계를 표시
    - `href` : 현재 html문서의 위치를 기준으로 작성한 외부 파일의 경로
    

<br>



### 👉 캐스캐이딩(Cascading) 원칙
- 같은 선택자를 공유하는 요소들에게 여러 스타일이 지정되어 있을 때, 어떤 우선순위를 가질 지에 대한 원칙

<br>

1. 스타일 우선 순위
    - 동일한 스타일이라도 선언된 곳에 따라 우선순위가 다르다
        > 웹 브라우저에 의해 정의된 스타일 **<** 개발자가 선언한 스타일 **<** 사용자가 구성한 스타일 
    - 적용 범위가 적을수록 우선시 된다
        > tag 스타일 **<** class 스타일 **<** id 스타일 **<** 인라인 스타일
    - 소스코드의 순서가 뒤쪽에 있으면 기존의 스타일을 덮어쓰게 된다

<br>

2. 스타일 상속
    - 부모 요소의 스타일 속성이 하위 요소에도 적용된다
    - 자식 요소에서 해당 스타일을 재정의할 경우, 기존의 스타일(부모 스타일)을 덮어쓴다
    - 상속이 되지않는 스타일 속성도 있다 (예) background-image, background-color



<br>
<br>
<br>
<br>











