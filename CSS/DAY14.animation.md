# 📌 14일차 
- 2021.09.10(금)
- 목차 : 애니메이션 

<br>

## ✅ 애니메이션 
### 👉 `animation`
```css
@keyframes test {
    from { margin-left : -20%; }
    to { margin-left : 100%; }
}
.test {
    animation : 4s linear 0s infinite alternate test;
}
```
- 요소의 현재 스타일에 변화를 줄 때 사용
- `transition` 은 사용자가 특정 action을 했을 때 실행되고
- `animation`은 사용자의 action이 없을 때에도 진행할 수 있다
- 그리고 `trnansition`과 달리 다수의 스타일 세트를 재생하도록 설정할 수 있다
- `animation` 역시 단축 속성(short hand)이고 관련 속성의 초기값은 아래와 같다
    - `animation-name : none`
    - `animation-duration : 0s`
    - `animation-timing-function : ease`
    - `animation-delay : 0s`
    - `animation-iteration-count : 1` 
    - `animation-direction : normal`
    - `animation-fill-mode : none`
    - `animation-play-state : running`

<br>




### 👉 `@keyframes`
```css
/* 키프레임 정의 */
@keyframes test1 {
    from { left : -20%; }       /* 0% */
    to { left : 100%; }         /* 100% */
}
@keyframes test2 {
    0%   { /*left:0;*/ } /* 요소에 정의된 스타일과 동일하면 생략 가능 */
    20%  { left:20px; }
    50%  { left:40px; } 
    50%  { left:50px; }  /* 나중에 지정한 스타일이 적용 */
    100% { left:70px; }
}

/* 애니메이션 적용 */
.test1 { animation : test1 10s infinite; }
.test2 { 
    left : 0; 
    animation : test2 10s infinite alternate; 
}
```
- `transition`과 다르게 여러 스타일을 묶어 하나의 세트로 `@keyframes`으로 정의해 사용한다
- 개발자가 애니메이션 중간에 특정 지점을 거칠 수 있는 키프레임을 설정해, 중간 절차를 제어할 수 있다 
- 애니메이션을 만약 10초동안 실행하면
    1. `.test1` 은 0초에 `from` 스타일로 시작해서 10초에 `to` 스타일로 애니메이션을 실행 및 종료한다
    2. `.test2` 는 0초에 `0%`스타일로 시작해서 2초에 `20%`,<br>
    5초에 `50%`에 지정된 스타일을 거쳐, 10초에 `100%` 스타일로 마무리한다 
- 동일한 시점에 여러 스타일을 지정하면, 나중에 설정된 스타일이 적용된다 
- `animation` 속성에 `alternate`를 적용하면, from → to → from .. 의 자연스러운 애니메이션 처리가 된다

<br>




### 👉 `animation-name`
- `transition` 의  `transition-property`에 해당하는 속성이다
- 개발자가 여러 스타일을 묶어 하나의 세트로 정의한 `@keyframes`의 이름을 의미한다
- `animation-name` 작성 규칙
    - 대소문자를 구분한다
    - 대소문자와 숫자 0~9, 특수문자는 `_` `-` 만을 사용한다 
    - 예약어를 사용하지 않는다 (예) `none`, `initial`, `inherit`, `revert`, `unset` ...
- 여러 요소가 같은 `@keyframe`을 공유할 수 있다

<br>




### 👉 `animation-duration`
- `transition` 의 `transition-duration`에 해당하는 속성이다
- 얼마만큼의 시간에 걸쳐서 `@keyframes`을 한 번 실행할 것인가에 대한 설정  
- 실행 시간을 정의하므로 `<time>`자료형을 사용한다 
- 사용할 수 있는 단위는 `ms`, `s`가 있다
- `integer`와 `float`를 사용할 수 있고, 음수 값은 사용할 수 없다 

<br>




### 👉 `animation-delay`
- `transition` 의 `transition-delay`에 해당하는 속성이다
- 애니메이션의 시작에 지연 시간을 주기위한 설정
- 지연 시간을 정의하므로 `<time>`자료형을 사용한다. 단위는 `ms`, `s`가 있다
- `integer`와 `float`를 사용할 수 있고, **음수 값도 허용한다**
- 음수를 지정하면 애니메이션은 즉시 시작하고, 애니메이션의 주기 중간에 delay가 등장한다

<br>




### 👉 `animation-timing-function`
- `transition` 의 `transition-timing-function`에 해당하는 속성이다
- 애니메이션이 실행되는 중간 과정의 시간을 조절하기 위한 속성
- 키워드 : `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `cubic-bezier`, `steps` ...
- 초기값 : `animation-timing-function : ease; `

<br>




### 👉 `animation-iteration-count`
- `@keyframes`를 반복하는 횟수르 지정하기 위한 속성
- 초기값 : `animation-iteration-count : 1;`
- 0.5 를 넣어주면 `@keyframe`의 50% 까지만 실행된다 

<br>




### 👉 `animation-direction`
- `@keyframes`를 진행 방향을 지정하기 위한 속성
- 초기값 : `animation-direction : normal`
- 키워드 : `normal`, `reverse`, `alternate`, `alternate-reverse`
    - `normal` : from → to / `@keyframe`의 정방향 순서로 매 사이클이 진행 
    - `reverse` : to  → from / `@keyframe`의 역방향 순서로 매 사이클이 진행
    - `alternate` : 첫번째 실행은 `normal`, 다음 실행은 `reverse`로 매 사이클마다 방향을 뒤집는다 
    - `alternate-reverse` : 첫번째 실행은 `reverse`, 다음 실행은 `normal`로 매 사이클마다 방향을 뒤집는다 

<br>


### 👉 `animation-play-state`
```css
.test { animation : 4s linear 0s infinite alternate test; }
.test:hover{
    /* 요소에 hover하면 애니메이션이 일시 정지 */
    animation-play-state : paused;
}

```
- 애니메이션 재생 여부를 결정하기 위한 속성 
- 초기값 : `animation-play-state : running`
- 키워드 : `running`, `paused`
- `paused`를 사용하면 애니메이션이 일시 정지한다


<br>




### 👉 `animation-fill-mode`
- 애니메이션 실행 전과 실행 후에 요소에 스타일을 지정하는 방법을 설정
- 초기값 : `animation-fill-mode : none`
- 키워드 : `none` `forwards` `backwards` `both`
    - `none` : 애니메이션 실행 전과 후 모두 요소가 원래 스타일을 유지한다
        - 애니메이션이 재생될 때에만 `@keyframes` 스타일을 가져와 사용한다 
    - `forwards` : 애니메이션 실행 후 `@keyframes`의 마지막 스타일(100%/to)을 유지한다 
    - `backwards` : 애니메이션 실행 전 `@keyframes`의 시작 스타일(0%/from)을 유지한다 
    - `both` : `forwards`와 `backwards`가 모두 적용된다 
----
<table>
<tr>
    <th>animation-fill-mode</th>
    <th>기존 스타일</th>
    <th rowspan="5">→</th>
    <th>@keyframes<br>첫번째 스타일 (from)</th>
    <th rowspan="5">→</th>
    <th>@keyframes<br>중간 스타일</th>
    <th rowspan="5">→</th>
    <th>@keyframes<br>마지막 스타일 (to)</th>
    <th rowspan="5">→</th>
    <th>기존 스타일</th>
</tr>
<tr>
    <th>none</th>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
</tr>
<tr>
    <th>forwards</th>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">X</td>
</tr>
<tr>
    <th>backwards</th>
    <td style="text-align:center;">X</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
</tr>
<tr>
    <th>both</th>
    <td style="text-align:center;">X</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">X</td>
</tr>
</table>


<br>

### 👉 `animation` 단축 속성 (short hand)
- `animation`은 단축 속성(short hand)이고 관련 속성의 초기값은 아래와 같다
    - `animation-name : none`
    - `animation-duration : 0s`
    - `animation-timing-function : ease`
    - `animation-delay : 0s`
    - `animation-iteration-count : 1` 
    - `animation-direction : normal`
    - `animation-fill-mode : none`
    - `animation-play-state : running`
- 작성 순서는 중요하지 않지만 `animation-name`을 마지막으로 작성하는 것을 권장한다
- 권장 작성 순서<br>
  `duration`, `timing-function`, `delay`, `iteration-count`,  <br>
  `direction`, `fill-mode`, `play-state`, `name`

<br>



