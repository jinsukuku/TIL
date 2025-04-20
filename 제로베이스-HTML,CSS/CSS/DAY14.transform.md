# 📌 14일차 
- 2021.09.10(금)
- 목차 : transform 

<br>

## ✅ 트렌스폼
### 👉 `transform`
- 요소의 회전, 크기 조절, 기울이기 이동 등의 효과를 줄 수 있는 속성
- 요소의 원래 자리나 크기, 레이아웃은 유지를 하면서, 효과를 준다
- 초기값 : `transform : none;`
- 단축 속성(short hand)이며, 공백을 구분자로 사용한다 <br>
  (예)`transform : scale(0.5) translate(-100%, -100%);`
- `transform`에 사용되는 속성은 함수의 형태를 가지며, 단축 속성을 사용했을 때 오른쪽부터 하나씩 순서대로 적용한다
- 이를 `transform-function` 이라고 한다
    - 요소에 적용할 하나 이상의 CSS 변형 함수
    - 변형을 오른쪽부터 왼쪽으로 하나씩 순서대로 적용한다 
    - 2d 뿐만 아니라 3d까지 다룰 수 있다 


<br>

### 👉 `transform : scale()` : 크기
```css
.test1, .test2 { width : 300px; height:600px;}

/* width:150px, height:300px */
.test1 { transform : scale(0.5); }    

/* width:600px, height:600px */
.test2 { transform : scale(2 1); }   
```
- x축과 y축을 기준으로 요소의 크기를 변경
- 현재 크기를 기준으로 입력한 값만큼 배수를 하여 적용한다 
- 값을 하나만 입력하면, 너비값과 높이 값이 동일한 비율로 조절된다 
- 요소의 시각적인 크기는 조절되나, 실제로 요소가 차지하는 레이아웃 공간의 크기는 동일하다
- 값의 형태는 `<integer>` `<float>`를 사용할 수 있다 
- [참고] < > 로 표현된 경우는 자료형을 의미한다

<br>

```css
.test1, .test2 { width : 300px; height:600px;}

/* width:600px, height:600px */
.test1 { transform : scaleX(2); }    

/* width:300px, height:300px */
.test2 { transform : scaleY(0.5); }   
```
- `scaleX()` : x축만 크기를 변경하고 싶을 때 사용
- `scaleY()` : y축만 크기를 변경하고 싶을 때 사용

<br>



### 👉 `transform : rotate()` : 회전
- `<angle>` : 각을 표현하는 자료형 
- `<angle>`의 단위 : `deg`, `grad`, `rad`, `turn`
    - `deg` : 우리가 일반적으로 사용하는 °(도)를 의미한다 (예) 0deg, 80deg ...
    - `turn` : `1turn`(1 바퀴/360°), `0.25turn`(0.25바퀴/90°)
- 값이 양수인 경우는 시계 방향으로 회전하고, 음수인 경우는 시계 반대 방향으로 회전한다
- 값의 형태는 `<integer>` `<float>`를 사용할 수 있다 
- 요소의 시각적인 각도는 조절되나, 실제로 요소가 차지하는 레이아웃 공간의 크기와 각도는 동일하다
- **[참고]**  https://developer.mozilla.org/ko/docs/Web/CSS/angle



<br>



### 👉 `transform : translate()` : 이동 
```css
.default { left:0; top:0; width:100px; height:100px; }

/* left:100px, top:100px; */
.test1 { transform : translate(100px, 100px); }

/* left:100px, top:50px; */
.test2 { transform : translate(100px, 50%); }
 
/* left:200px, top:0px */
.test3 { transform : translate(200px); }
```

- 요소의 위치를 이동시키는 함수로, x축 이동 거리와 y축 이동 거리를 값으로 받는다
- 값을 하나만 입력받으면 y축은 0을 입력한 것과 같으므로, x축으로만 이동한다
- 일반적인 좌표계와 다르게 x축은 오른쪽으로, y축은 아래로 이동한다 
- 음수를 입력하면 x축은 왼쪽으로, y축은 위로 이동한다 
- `%`단위를 사용하면, 자기 자신의 `width`와 `height`를 기준으로 값이 결정된다 

<br>

```css
.default { left:0; top:0; width:100px; height:100px; }

/* left:100px, top:0px; */
.test1 { transform : translateX(100px); }

/* left:0px, top:200px; */
.test2 { transform : translateY(200px); }
```
- `translateX()` : x축으로만 이동
- `translateY()` : y축으로만 이동


<br>



### 👉 `transform : skew()` : 기울이기 

```css
.test1 { transform : skew(0deg); }
.test2 { transform : skew(20deg, 40deg); }
.test3 { transform : skew(40deg, 40deg); }
.test4 { transform : skew(45deg, 45deg); }
```

![example1401](./img/1401.png)


- `rotate()`와 비슷한 결과를 가져오고, 자료형은 `<angle>`을 사용한다
- x축을 기준으로 적용될 기울기와 y축을 기준으로 적용될 기울기를 값으로 받는다
- 값을 하나만 입력받으면 y축은 0을 입력한 것과 같으므로, x축으로만 기울기를 추가한다
- x축과 y축 모두 45deg를 적용하면 요소를 시각적으로 확인할 수 없다

<br>

```css
.test1 { transform : skewX(20deg); }
.test2 { transform : skewX(50deg); }
.test3 { transform : skewX(70deg); }
.test4 { transform : skewX(90deg); }
```

![example1402](./img/1402.png)


- `skewX()` : x축만 기준으로 기울기 적용
- `skewX(90deg)`를 적용하면 시각적으로 확인할 수 없다 
  

<br>

```css
.test1 { transform : skewY(20deg); }
.test2 { transform : skewY(50deg); }
.test3 { transform : skewY(80deg); }
.test4 { transform : skewY(90deg); }
```

![example1403](./img/1403.png)


- `skewY()` : y축만 기준으로 기울기 적용
- `skewY(90deg)`를 적용하면 시각적으로 확인할 수 없다 



<br>



### 👉 `transform-origin` : 기준점

```css
.test1 { transform-origin : center; }
.test2 { transform-origin : top left; }
.test3 { transform-origin : 50px 100px; }
```

- `transform`이 적용되는 기준인 요소의 기준점을 설정
- 기존의 `transform`의 단축 속성(short hand)에 포함되지 않는 별도의 속성이다
- 초기값 : `transform-origin : center;`
- 키워드 : `center`, `top`, `bottom`, `left`, `right`


<br>











