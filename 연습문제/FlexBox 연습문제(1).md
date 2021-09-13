# 📌 FlexBox 연습문제(1)
- 2021.09.13(월) 
- Flexbox 에 대한 이해가 부족하다고 느껴서 문제풀면서 개념 재정리!
- http://flexboxfroggy.com/#ko 의 24개 연습 문제


![flexbox](./img/flexbox.png)

<br>

### 👉 1번 
```css
#pond {
    display:flex;
    justify-content:flex-end;
}
```
- `justify-content` : main-axis를 기준으로 item의 정렬방법을 설정하는 속성
- `flex-direction` 에 따라서 같은 키워드를 사용해도 결과가 다르다
- 지금은 `flex-direction`이 기본값인 `row`이므로, 
- `justify-content:flex-end;`를 사용해 오른쪽 끝으로 개구리를 이동
<br>

### 👉 2번 
```css
#pond {
    display:flex;
    justify-content:center;
}
```
- `justify-content` 에 사용할 수 있는 키워드는 아래와 같다
    - `flex-start` : main-axis 가 시작하는 위치에 맞게 정렬
    - `flex-end` : main-axis 가 끝나는 위치에 맞게 정렬
    - `center` : main-axis 의 가운데 위치에 맞게 정렬
    - `space-between` : main-axis 의 시작과 끝 위치를 유지하며 item사이의 간격을 동일하게 유지
    - `space-around` : main-axis 의 시작과 끝 위치를 유지하지 않고, item의 앞 뒤 간격을 동일하게

<br>


### 👉 3-4번
```css
/* 3번 */
#pond {
    display:flex;
    justify-content:space-around;
}

/* 4번 */
#pond {
    display:flex;
    justify-content:space-between;
}
```
- `space-between` 과 `space-around` 모두 `item`사이 간격은 동일하게 맞춰준다
- `space-between` 과 `space-around`의 차이점에 주의하자
    - `space-between` : main-axis 의 시작과 끝 위치를 유지 O
    - `space-around` : main-axis 의 시작과 끝 위치를 유지 X

<br>


### 👉 5번 
```css
#pond {
    display:flex;
    align-items:flex-end;
}
```
- 기본적으로 `flex box`는 하나의 행을 다루고 `main-axis`와 관련이 있다
- `flex box`가 다루는 행이 `cross-axis` 내에서 어디에 위치할 것인가를 결정하는 것이 `align-items`
- `flex-direction`는 `main-axis`와 `cross-axis`의 축, 방향을 다루므로
- `align-items`는 `flex-direction`에 영향을 받는다
- 5번 문제에서의 `cross-axis` 는 세로축, 위에서 아래로 향하기때문에
- `align-items:flex-end`를 사용해 문제에서 원하는 대로 세로 정렬할 수 있다

<br>


### 👉 6번 
```css
#pond {
    display:flex;
    justify-content:center;
    align-items:center;
}
```
- `flex-direction`이 `row`, `row-reverse` 일 때에
    - 가로 정렬은 `justify-content`
    - 세로 정렬은 `align-items`
- `flex-direction`이 `column`, `column-reverse` 일 때에
    - 가로 정렬은 `align-items`
    - 세로 정렬은 `justify-content`


<br>


### 👉 7번 
```css
#pond {
    display:flex;
    justify-content:space-around;
    align-items:flex-end;
}
```
<br>


### 👉 8번 
```css
#pond {
    display:flex;
    flex-direction:row-reverse;
}
```
- `main-axis`와 `cross-axis` 의 위치와 방향을 설정한다
- 키워드별 기준축과 방향
<table>
    <tr>
        <th rowspan="2">/</th>
        <th colspan="2">main-axis</th>
    </tr>
    <tr>
        <th>기준축</th>
        <th>방향</th>
    </tr>
    <tr>
        <th>row</th>
        <td>가로축</td>
        <td>왼 → 오</td>
    </tr>
    <tr>
        <th>row-reverse</th>
        <td>가로축</td>
        <td>오 → 왼</td>
    </tr>
    <tr>
        <th>column</th>
        <td>세로축</td>
        <td>위 → 아래</td>
    </tr>
    <tr>
        <th>column-reverse</th>
        <td>세로축</td>
        <td>아래 → 위</td>
    </tr>
</table> 


<br>


### 👉 9번 
```css
#pond {
    display:flex;
    flex-direction:column;
}
```
- `flex-direction:column;` 를 사용해 `main-axis`의 기준 축은 세로축으로, 
- 방향은 위에서 아래로 향하게 `flex-direction`을 변경했다

<br>


### 👉 10번 
```css
#pond {
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-end;
}
```
<br>


### 👉 11번 
```css
#pond {
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
}
```
- `flex-direction`이 설정한 방향의 시작 지점에 맞추려면 `justify-content:flex-start`,
- 끝 지점에 맞추려면 `justify-content:flex-end` 을 사용해 정렬할 수 있다

<br>



### 👉 12번 
```css
#pond {
    display:flex;
    flex-direction:column-reverse;  
    justify-content:space-between;
}
```

- `flex-direction`의 값으로 `reverse`가 붙은 키워드를 사용하면 `item`의 순서가 뒤집힌다
- `row` 일 때에는 `1` `2` `3` `4` `5` 의 순서가
- `row-reverse` 일 때에는 `5` `4` `3` `2` `1` 로 변경된다
- `column` 일 때에는<br>
    `1`<br>
    `2`<br>
    `3`<br>
    `4`<br>
    `5`<br>
- `column-reverse` 일 때에는 아래의 순서와 같다 <br>
    `5`<br>
    `4`<br>
    `3`<br>
    `2`<br>
    `1`<br>


<br>

