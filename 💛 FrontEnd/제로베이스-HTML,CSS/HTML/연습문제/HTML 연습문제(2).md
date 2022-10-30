# 📌 HTML연습문제(2)
- 2021.09.15(수) 

<br>

## 👉 1번
```css
.content{
    margin:10px 15px 20px;
    width:100px;
    height:100px;
    padding:10px;
    border:1ps solid #000;
}
```
<br>


## 👉 2번
```html
<nav>
    <span class="title">네카라쿠베</span>
    <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>마이페이지</li>
    </ul>
</nav>
```
```css
nav {
    height: 64px;
    border-bottom: 1px solid rgb(231, 231, 231);
    padding: 0px 16px;
}
.title {
    font-size: 24px;
    font-weight: bold;
    line-height: 64px;
}
.menu {
    margin: 0;
    float: right;
}
.menu > li {
    float: left;
    line-height: 64px;
    margin: 0px 10px;
    list-style: none;
}
```
### ✅ output
![html22](./img/html22.png)

<br>


## 👉 3번
```html
<div class="container">
  <div class="sns">
    <img src="sns1" alt="facebook">
  </div>
  <div class="sns">
    <img src="sns2" alt="instagram">
  </div>
  <div class="sns">
    <img src="sns3" alt="github">
  </div>
  <div class="sns">
    <img src="sns4" alt="youtube">
  </div>
  <div class="sns">
    <img src="sns5" alt="spotify">
  </div>
  <div class="sns">
    <img src="sns6" alt="tiktok">
  </div>
</div>
```
```css
.container {
    width: 400px;
    height: 400px;
    background-color: lightblue;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    justify-items: center;
    align-items: center;
}
.sns {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #000;
}
.sns img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
```
### ✅ output
![html23](./img/html23.png)

<br>


## 👉 4번
```html
<div class="wrap">
  <div class="content">
    <header>
      <h1>삼성전자</h1>
      <p>종목코드 : 005930</p>
    </header>
    <main>
      <h2>회사소개</h2>
      <p>
        한국 및 CE, IM부문 해외 9개 지역총괄과 DS부문 해외 5개 지역총괄,
        Harman 등 241개의 종속기업으로 구성된 글로벌 전자기업임.
        세트사업에는 TV, 냉장고 등을 생산하는 CE부문과 스마트폰,
        네트워크시스템, 컴퓨터 등을 생산하는 IM부문이 있음.
        부품사업(DS부문)에서는 D램, 낸드 플래쉬, 모바일AP 등의 제품을
        생산하는 반도체 사업과 TFT-LCD 및 OLED 디스플레이 패널을 생산하는
        DP사업으로 구성됨.
      </p>
    </main>
  </div>
  <article>
    <h2>시가총액 순위</h2>
    <ol>
      <li>삼성전자</li>
      <li>SK하이닉스</li>
      <li>NAVER</li>
      <li>카카오</li>
      <li>삼성바이오로직스</li>
      <li>삼성전자우</li>
      <li>삼성SDI</li>
      <li>LG화학</li>
      <li>현대차</li>
      <li>셀트리온</li>
    </ol>
  </article>
</div>
```
```css
/* common */
* { margin: 0; }
h1, h2 { margin-bottom: 20px; }
p { line-height: 24px; }
header, main, article {
    padding: 0 30px;
    margin-bottom: 40px;
    box-sizing: border-box;
}

/* wrap */
.wrap {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

/* header */
header {
    height: 180px;
    color: #fff;
    background-color: blue;
}
h1 { line-height: 100px;}

/* main */
main { padding: 0 40px; }

/* article */
article { 
    padding: 30px 20px; 
    min-width: 300px;
}
li {
    line-height: 40px;
    border-bottom: 1px solid #333;
}

/* mediaQuery */
@media screen and (max-width: 720px) {
    .wrap {display: block;}
}
```
### ✅ output
![html24](./img/html24.gif)

<br>


## 👉 5번
```html
<div class="wrap">
  <header>
    <h2>댓글 <b>923</b></h2>
  </header>
  <div class="comment">
    <p class="userName">정*석</p>
    <p class="date">2021.03.16</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">한*현</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">이*자</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">이*윤</p>
    <p class="date">2021.03.16</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">박*호</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">김*성</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
</div>
```
```css
* { margin: 0; font-family: sans-serif; }
body { background-color: #eee; }
.wrap {
    width: 360px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
}
header {
    line-height: 48px;
    padding: 0 20px;
    border-bottom: 3px solid #000;
}
b { color: #06a27d; }
.comment {
    padding: 18px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #cecece;
}
.userName { font-weight: bold; }
.date {
    color: #939393;
    margin-bottom: 14px;
}
.txt {
    word-break: keep-all;
    line-height: 1.5;
}
```
### ✅ output
![html25](./img/html25.gif)

<br>

