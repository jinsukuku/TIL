# 📌 FlexBox 연습문제(2)
- 2021.09.13(월) 
- Flexbox 에 대한 이해가 부족하다고 느껴서 문제풀면서 개념 재정리!
- http://flexboxfroggy.com/#ko 의 24개 연습 문제


![flexbox](./img/flexbox.png)

<br>

### 👉 13번 
```css
#pond {
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
    align-items:flex-end;
}
```
- `flex-direction:row-reverse` 일 때에는
- `justify-content` 는 가로 정렬, `align-items`는 세로 정렬!
<br>


### 👉 14번 
```css
#pond {
    display:flex;
}
.yellow{
    order:3;
}
```
- `order` 속성은 `container`가 아닌 `item`에 사용가능하다
- `container`에서 정해진 순서가 아닌, 다른 순서를 `item`에 부여할 때 사용한다

<br>


### 👉 15번 
```css
#pond {
    display:flex;
}
.yellow{
    order:-1;
}
```
- `order`는 `<number>` 자료형을 사용하며, 음수도 사용 가능하다
- 초기값은 `order:0;` 이므로 아무리 작은 숫자를 넣어도 가장 맨 앞으로 가지 않는다 **주의!**
- 가장 맨 앞으로 보내고 싶을 때에는 음수를 넣어주도록 하자


<br>


### 👉 16번 
```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
    align-self : flex-end;
}
```
- `container`에서 `algn-items`으로 정렬을 
- `align-self`을 사용해 `item` 하나 하나의 설정을 변경할 수 있다
<br>


### 👉 17번 
```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
    order:1;
    align-self:flex-end;
}
```
<br>


### 👉 18번 
```css
#pond {
    display:flex;
    flex-wrap : wrap;
}
```
- `flex-wrap` 은 `item`을 한 행으로 배치할 것인지, 여러 행으로 배치할 것인지에 대한 속성이다
- 초기값 : `flex-wrap:nowrap;`
- 키워드
    - `nowrap` : `container` 의 `width`, `height` 에 맞춰 `item`의 크기를 조절하며 강제로 한줄로 배치 (default)
    - `wrap` : `item`의 크기를 유지하며 여러 줄로 배치 
    - `wrap-reverse` : `wrap`과 동일하나 순서가 반전된다
- `warp` 이나 `wrap-reverse`를 설정했을 때의 행 간격은 `container`의 `height`값에 영향을 받는다 


<br>


### 👉 19번 
```css
#pond {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
}
```
<br>


### 👉 20번 
```css
#pond {
    display:flex;
    flex-flow:column wrap;
}
```
- `flex-flow`는 `flex-direction`와 `flex-wrap` 속성을 한번에 사용할 수 있는 단축속성이다
- 서로 사용하는 키워드가 다르므로 순서는 중요하지 않다
- `flex-direction`와 `flex-wrap`를 입력할 때에 공백을 구분자로 사용한다

<br>


### 👉 21번 
```css
#pond {
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
}
```
- `flex-wrap:wrap` 일 때, `align-content`을 사용하면, 행 사이의 간격을 조절할 수 있다
- FLEXBOX FROGGY 의 설명은 아래와 같다 
    - `flex-start`: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
    - `flex-end`: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
    - `center`: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
    - `space-between`: 여러 줄들 사이에 동일한 간격을 둡니다.
    - `space-around`: 여러 줄들 주위에 동일한 간격을 둡니다.
    - `stretch`: 여러 줄들을 컨테이너에 맞도록 늘립니다.

<br>


### 👉 22번 
```css
#pond {
    display:flex;
    flex-wrap:wrap;
    align-content:flex-end;
}
```
- `align-content`와 `align-items` 차이점을 잘 기억해두자
<br>



### 👉 23번 
```css
#pond {
    display:flex;
    flex-direction:column-reverse;
    align-content:center;
}
```
<br>




### 👉 24번 
```css
#pond {
    display:flex;
    flex-wrap:wrap-reverse;
    flex-direction:column-reverse;
    justify-content:center;
    align-content:space-between;
}
```

![flexbox_final](./img/flexbox_final)

- `align-content`와 `align-items` 의 차이가 좀 헷갈려서 헤맸다
- `flex-box` 관련 속성을 많이 다루고 공부해봐야겠다
- 그리고 여기서는 다루지 않았던 `flex-grow`, `flex-shrink` 등의 속성에 대한 공부도 필요하다


<br>

