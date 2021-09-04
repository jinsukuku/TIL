# 📌 HTML연습문제
- 2021.09.05(일) 

<br>

## 👉 1번
```html
<h1>다람쥐 헌 쳇바퀴에 타고파</h1>
<h2>다람쥐 헌 쳇바퀴에 타고파</h2>
<h3>다람쥐 헌 쳇바퀴에 타고파</h3>
<h4>다람쥐 헌 쳇바퀴에 타고파</h4>
<h5>다람쥐 헌 쳇바퀴에 타고파</h5>
<h6>다람쥐 헌 쳇바퀴에 타고파</h6>
```
### ✅ output

> <h1>다람쥐 헌 쳇바퀴에 타고파</h1>
> <h2>다람쥐 헌 쳇바퀴에 타고파</h2>
> <h3>다람쥐 헌 쳇바퀴에 타고파</h3>
> <h4>다람쥐 헌 쳇바퀴에 타고파</h4>
> <h5>다람쥐 헌 쳇바퀴에 타고파</h5>
> <h6>다람쥐 헌 쳇바퀴에 타고파</h6>

## 👉 2번
```html
<ul>
    <li>사과</li>
    <li>오렌지</li>
    <li>포도</li>
    <li>체리</li>
</ul>
<ol>
    <li>가지</li>
    <li>감자</li>
    <li>당근</li>
    <li>대파</li>
</ol>
```
### ✅ output
> <ul>
>     <li>사과</li>
>     <li>오렌지</li>
>     <li>포도</li>
>     <li>체리</li>
> </ul>
> <ol>
>     <li>가지</li>
>     <li>감자</li>
>     <li>당근</li>
>     <li>대파</li>
> </ol>


## 👉 3번
```html
<form>
    <input type="password" minlenght="6" maxlength="20" placeholder="비밀번호를 입력해주세요">
</form>
```

## 👉 4번
```html
<table>
    <caption>주식회사 HTML매출</caption>
    <thead>
        <tr>
            <th rowspan="2">/</th>
            <th colspan="2">반기</th>
            <th rowspan="2">합계</th>
            <th rowspan="2">비고</th>
        </tr>
        <tr>
            <th>전반기</th>
            <th>후반기</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>2019</th>
            <td>10억</td>
            <td>20억</td>
            <td>30억</td>
            <td></td>
        </tr>
        <tr>
            <th>2020</th>
            <td>22억</td>
            <td>33억</td>
            <td>55억</td>
            <td rowspan="2">1)</td>
        </tr>
        <tr>
            <th>2021</th>
            <td colspan="2">집계중</td>
            <td>집계중</td>
            <td>30억</td>
        </tr>
    </tbody>
</table>
```
### ✅ output
> <table>
>     <caption>주식회사 HTML매출</caption>
>     <thead>
>         <tr>
>            <th rowspan="2">/</th>
>            <th colspan="2">반기</th>
>            <th rowspan="2">합계</th>
>            <th rowspan="2">비고</th>
>        </tr>
>        <tr>
>            <th>전반기</th>
>            <th>후반기</th>
>        </tr>
>    </thead>
>    <tbody>
>        <tr>
>            <th>2019</th>
>            <td>10억</td>
>            <td>20억</td>
>            <td>30억</td>
>            <td></td>
>        </tr>
>        <tr>
>            <th>2020</th>
>            <td>22억</td>
>            <td>33억</td>
>            <td>55억</td>
>            <td rowspan="2">1)</td>
>        </tr>
>        <tr>
>            <th>2021</th>
>            <td colspan="2">집계중</td>
>            <td>집계중</td>
>        </tr>
>    </tbody>
> </table>

## 👉 5번
```html
<p>&#x222b;<sub>o</sub><sup>t</sup>2<sup>5</sup> x <i>log</i><sub>2</sub>x</p>
```
### ✅ output
> <p>&#x222b;<sub>o</sub><sup>t</sup>2<sup>5</sup> x <i>log</i><sub>2</sub>x</p>