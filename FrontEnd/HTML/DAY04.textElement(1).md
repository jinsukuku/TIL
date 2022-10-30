# 📌 4일차 
- 2021.08.31(화)
- 목차 : 텍스트 요소 

<br>

## ✅ 텍스트 요소 
### 👉 제목
```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

- 웹 브라우저가 제목의 정보를 사용해 자동으로 목차를 만드는 작업을 수행할  수 있다
- 제목 태그의 단계를 건너뛰는 것을 피하도록 하자
- 웹 접근성을 위해 `<h1>` 태그는 웹 페이지 당 하나만 사용한다

<br>
  

### 👉 본문
1.`<p>` 태그
```html
<p>첫번째 문단입니다

       하나의     문단입니다</p>
<p>두번째 문단입니다</p>
```
```text
첫번째 문단입니다 하나의 문단입니다
두번째 문단입니다
```
- 공백이 연속해서 여러개 입력되면 하나로 인식하고, 개행은 무시한다
- 기본적으로 문단끼리 한 줄의 간격으로 분리된다 (하나의 문단을 의미)
- 내부의 태그가 블록요소인경우 자동으로 요소를 닫는다. 주의하자

2. `<br>` 태그
    - 텍스트 내의 줄바꿈(캐리지 리턴)을 생성한다
    - 줄의 구분이 중요한 내용을 작성하는 경우 유용하다
    - 빈 요소로, `<br>`, `<br/>`의 형태 모두 허용된다
  <br>
      
      
3. 인용을 의미하는 `<blockqueote>`, `<q> ` 태그 
    - `<blockqueote>` : 인용 블록 요소 / 들여쓰기가 있다 
    - `<q>`  : 인라인 인용문 요소 / 들여쓰기가 없다 / 자동으로 앞 뒤에 ‘자동으로 쌍따옴표를 붙여준다
    - cite 속성 : 인용문의 출처 정보를 가리키는 용도
<br>
      

4. `<pre>` 태그 
```html
 <pre>
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
 </pre>
```
```text
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
```
- 미리 서식을 지정한 텍스트. HTML에 작성한 내용 그대로 표현한다
- 고정폭 글꼴을 사용해 요소 내의 공백 문자를 그대로 유지한다
- 고정폭 글꼴 : 글자마다 다른 글자의 폭이 고정된 글꼴. 코드를 작성할때도 유용하게 사용된다
<br>

5. `<figure>` 태그 
```html
<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```
- 독립적인 콘텐츠를 표현할 때 사용한다
- `<figcaption>` 요소를 사용해 설명을 붙인다 
- 피규어 설명, 콘텐츠는 하나의 단위로 참조된다
<br>
  
  
6. `<hr>` 태그 : 수평선 형태로, 구획 내 주제 변경, 문단의 주제 분리 시에 사용한다
7. `<abbr>` 태그 : 약어(abbreviation) 표시
```html
<abbr title=“World Wide Web>www</abbr>
```
- mouse hover시, tool-tip으로 원래 의미롤 보여준다
8. `<address>` 태그 : 주소(address) 표시
9. `<cite>` 태그 : 인용의 출처를 표시
```html
<figure>
    <blockquote cite=“Nineteen Eighty-Four”>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in 
        <cite>
            <a href="http://www.george-orwell.org/1984/0.html">
                Nineteen Eighty-Four
            </a>
        </cite> 
        by George Orwell (Part 1, Chapter 1).
    </figcaption>
</figure>
```
- 인용 태그인 `<blockquote>`와 `<q>`태그의 속성으로도 사용할 수 있다
10. `<bdo>` 태그 : bidirectional overide
```html
<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
```
- 텍스트를 역방향으로(오른쪽에서 왼쪽) 작성할 때 사용한다
<br>
  
[출처] https://developer.mozilla.org/ko/docs/Web/HTML/Element
<br>
   