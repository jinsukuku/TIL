# 📌 15일차 
- 2021.09.11(토)
- 목차 : flexbox 

<br>

## ✅ Flexbox
### 👉 Flexbox 개요 
```css
.container { display : flex; }
.container>.item { width:50px; height:50px; }
```
- 요소의 레이아웃 설계를 위한 방법 
- `display:inlin-block`과 `float`는 원하는 레이아웃을 설정하기 힘들다 
- `display:flex`를 부모 요소에 사용하면 원하는 레이아웃으로 설정할 수 있다 
    - 자식 요소들이 가로 정렬된다
    - 부모 요소의 크기에 맞춰 자식 요소의 `width`값이 자동으로 변경된다  


<br>

### 👉 Flexbox 용어
- `flex container` : `item`을 감싸주는 부모 요소
- `flex item` : `container`의 자식 요소를 의미
- `flex container`와 `flex item`이 사용할 수 있는 속성이 다르므로 잘 구분해두자
- `flexbox` 는 1차원의 직선 형태의 정렬을 의미한다 
- `main axis` : 주축의 기본 값(default)은 가로축 
- `cross axis` : 교차축의 기본 값(default)은 세로축
- `axis` 의 기준은 변경될 수 있다

<br>

### 👉 Container : `display`
- `display-outside` : **형제 요소**와의 배치 방법을 설정
    - 키워드 : `inline` `block` `inline-block` 
- `display-inside` : **자식 요소**를 어떻게 배치할지를 설정
    - 키워드 : `flex` `grid` 
- `display-outside` 와 `display-inline`을 함께 지정하려면 
    - CSS2의 작성 방식(`display-legacy`) : `display : inline flex;`
    - CSS3의 작성 방식 : `display : inline-flex;` 

<br>

### 👉 Container : `flex-direction`
```css
.container  {
    width:240px; height:240px; margin:10px;
    background-color:lightblue; 
    display:flex;  
}
.container1 {flex-direction:row;}
.container2 {flex-direction:row-reverse;}
.container3 {flex-direction:column;}
.container4 {flex-direction:column-reverse;}
```

![example1501](./img/1501.png)

- `main-axis` : 원점 기준 왼쪽에서 오른쪽으로 향하는 가로축(default)
- `cross-axis` : 원점 기준 위에서 아래로 향하는 세로축(default)
- `main-axis`와 `cros-axis` 의 위치와 방향을 설정한다
    - 위치 : `main-axis`가 세로축, `cross-axis`를 가로축으로 지정
    - 방향
        - `main-aixs`의 방향을 원점 기준 오른쪽 → 왼쪽으로 변경
        - `cross-aixs`의 방향을 원점 기준 아래쪽 → 위쪽으로 변경
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

### 👉 Container : `flex-wrap`, `flex-flow` 단축 속성(short hand)
```css
.container  {
    width:120px; height:240px; margin:10px;
    background-color:lightpink; 
    display:flex;  
}
.container1 {flex-wrap:nowrap;}
.container2 {flex-wrap:wrap;}
.container3 {flex-wrap:wrap-reverse;}
```

![example1502](./img/1502.png)

- `flex-wrap` : `item`을 강제로 한 줄로 배치시킬 것인지 개행을 줄 것인지에 대해 결정하는 속성
    - `nowrap` : `container` 의 `width`, `height` 에 맞춰 `item`의 크기를 조절하며 강제로 한줄로 배치 (default)
    - `wrap` : `item`의 크기를 유지하며 여러 줄로 배치 
    - `wrap-reverse` : `wrap`과 동일하나 순서가 반전된다
    - `warp` 이나 `wrap-reverse`를 설정했을 때의 행 간격은 `container`의 `height`값에 영향을 받는다 

----
```css
.container {
  display:flex;
  flex-flow:column wrap;
}
```
- `flex-flow` : `flex-wrap`과 `flex-direction`을 함께 설정할 수 있는 단축 속성(short hand)
- 공백을 구분자로 사용해 `flex-wrap`과 `flex-direction`을 작성한다  

<br>

### 👉 Container : `justify-content`
- `main-axis`를 기준으로 `item`의 정렬방법을 설정하는 속성
- 웹 브라우저별로 지원 속성이 다르므로 확인하자
- 키워드
  - `flex-start` : `main-axis` 가 시작하는 위치에 맞게 정렬  
  - `flex-end` : `main-axis` 가 끝나는 위치에 맞게 정렬 
  - `center` : `main-axis` 의 가운데 위치에 맞게 정렬 
  - `space-between` : `main-axis` 의 시작과 끝 위치를 유지하며 `item`사이의 간격을 동일하게 유지 
  - `space-around` : `main-axis` 의 시작과 끝 위치를 유지하지 않고, `item`의 앞 뒤 간격을 동일하게
----
- `flex-direction` 에 따라서 같은 키워드를 사용해도 결과가 다르다
```css
.container:nth-child(1){justify-content:flex-start;}
.container:nth-child(2){justify-content:flex-end;}
.container:nth-child(3){justify-content:center;}
.container:nth-child(4){justify-content:space-between;}
.container:nth-child(5){justify-content:space-around;}
.container:nth-child(6){justify-content:space-evenly;}
```
1. `flex-direction:row`
![example1601](./img/1601.png)
   
<br>

2. `flex-direction:row-reverse`
![example1602](./img/1602.png)

<br>




### 👉 Container : `align-items`
- 기본적으로 `flex box`는 하나의 행을 다루고 `main-axis`와 관련이 있다
- `flex box`가 다루는 행이 `cross-axis`내에서 어디에 위치할 것인가를 결정하는 것이 `align-items`
- `item`의 행이 여러 행이 되면, 하나의 행마다 `container`로 인지한다
- 초기값 : `align-items:stretch`
- 키워드
  - `stretch` : `container`의 `cross-axis`를 기준으로 `flex-start`부터 `flex-end`까지 늘어난다
    - `item`에 높이가 설정되어 있지 않다면, `container`의 높이만큼 늘어난다
  - `flex-start` : `cross-axis` 가 시작하는 위치에 맞게 정렬  
  - `flex-end` : `cross-axis` 가 끝나는 위치에 맞게 정렬 
  - `center` : `cross-axis` 의 가운데 위치에 맞게 정렬 


<br>

### 👉 Container : `align-content`
- 여러 개의 `item`을 `cross-axis`에 어떻게 정렬할 것인가에 대한 속성 
- 키워드
  - `flex-start` : `cross-axis` 가 시작하는 위치에 맞게 정렬  
  - `flex-end` : `cross-axis` 가 끝나는 위치에 맞게 정렬 
  - `center` : `cross-axis` 의 가운데 위치에 맞게 정렬 
  - `space-between` : `cross-axis` 의 시작과 끝 위치를 유지하며 `item`사이의 간격을 동일하게 유지 
  - `space-around` : `cross-axis` 의 시작과 끝 위치를 유지하지 않고, `item`의 앞 뒤 간격을 동일하게


<br>


### 👉 Container : `align-self`
- 초기값 : `algn-items`의 값이 그대로 적용
- 현재 선택한 `item`만 `algn-items` 을 변경하기 위해 사용한다 

<br>















