# 📌 12일차 
- 2021.09.08(수)
- 목차 : 레이아웃

<br>

## ✅ 레이아웃 (layout)
### 👉 `display`
1. `inline`
    - (예) `span` `a` ... 
    - 영역의 기본 크기가 내부 콘텐츠 크기로 지정
    - 영역의 크기를 `width`, `height`로 설정할 수 없다  
    - 내부 여백(padding)과 외부 여백(margin)의 top과 bottom을 지정할 수 없다
    - `inline` 요소는 가로 배치가 된다 
2. `block` 
    - (예) `div` `section` ... 
    - 영역의 기본 너비가 부모 요소의 너비로 지정. 높이는 컨텐츠 크기로 지정
    - 영역의 크기를 `width`, `height`로 설정할 수 있다 
    - `width`를 지정하지 않으면 가로 전체를 차지한다
    - `block` 요소는 세로 배치가 된다
3. `inline-block`
    - (예) `input` ... 
    - 영역의 크기를 `width`, `height`로 설정할 수 있다 
    - `inline-block` 요소는 가로 배치가 된다 
    - 내부 여백(padding)과 외부 여백(margin)의 top과 bottom을 지정할 수 있다
4. `none` 
    - output에서 해당 요소가 보이지 않도록 설정한다 

<br>

### 👉 요소를 없애는 방법 
- 방법1. `display : none` : 요소가 차리하던 자리도 없애고, 요소를 눈에 보이지 않도록 숨긴다
- 방법2. `visibility : hidden` : 요소가 차리하던 자리는 비워두고, 요소만 눈에 보이지않도록 숨긴다 
- 차이점 : 문서의 레이아웃을 변경 여부

<br>

### 👉 `normal flow` : 요소의 레이아웃을 강제로 변화하지 않았을 때의 배치를 의미
<br>

### 👉 `float`
- `float`는 `normal flow`를 벗어나 요소의 레이아웃을 강제로 변화시킬 때 사용한다
- 다음 요소의 레이아웃은 그대로 박스 형태이고, `float`가 적용된 요소는 다음 요소의 위에 둥둥 떠있는 형태로 자리한다
- 현재는 `float`보다 `flex box`를 사용해 레이아웃을 잡는 것을 권장한다 
---
1. `left` : 부모 요소 내부에서 왼쪽에 자리하게 되고, 남은 자리에 다음 요소의 컨텐츠가 채워진다
2. `right` : 부모 요소 내부에서 오른쪽에 자리하게 되고, 남은 자리에 다음 요소의 컨텐츠가 채워진다
3. `none` : `normal flow` 를 강제로 변화시키지 않는 키워드 / default

<br>

### 👉 `position`
- `position`은 요소의 위치를 어떠한 요소의 위치를 기준으로 삼아 변경할 때 사용한다
- 속성 `top`, `bottom`, `left`, `right` 을 사용해 위치를 변경한다
- 속성의 값에는 음수를 사용 수 있다 (예) top : -20px
- `top` 과 `bottom`의 값을 모두 지정하게 되면 `top`이 우선 적용된다
- `left` 과 `right`의 값을 모두 지정하게 되면 `top`이 우선 적용된다
- 즉, 서로 반대가 되는 값을 동시에 지정하면 `top`과 `left`가 우선 적용되고, 다른 값은 무시한다
- **[참고]** https://developer.mozilla.org/ko/docs/Web/CSS/position_value
---
1. `static` : `normal flow` 를 강제로 변화시키지 않는 키워드 / `default`
    - `static` 일 때에는 `top`, `bottom`, `left`, `right` 속성을 사용할 수 없다
2. `relative` : 자기 자신을 기준으로 삼는다. 그렇기 때문에 `static`일 때와 같은 레이아웃을 가진다 
    - `relative` 일 때에는 `top`, `bottom`, `left`, `right` 속성을 사용할 수 있다
3. `absolute` : 가장 가까운 부모 요소 중 `position`이 `static`이 아닌 요소를 기준으로 위치를 지정한다 
    - 위치와 관련된 속성을 사용하지 않으면 `float` 를 주었을 때처럼, 다음 요소의 위에 둥둥 떠있는 형태로 자리한다
    - 위치와 관련된 속성을 사용하면 가장 가까운 조상 요소 중 `position`이 `static`이 아닌 요소를 찾아 기준으로 삼는다 
    - 만약 상위 요소가 모두 `static`인 경우, `<body>` 를 기준으로 삼는다 
4. `fixed` : `viewport` 를 기준으로 위치를 지정한다 
    - `viewport` 를 기준으로 위치를 지정하기때문에, 스크롤을 이동해도 항상 같은 위치에 존재한다 
5. `sticky`
    - 가장 가까운, 스크롤의 대상이되는 조상을 기준으로 삼는다. (일반적으로 `<body>`)
    - 세로와 관련된 위치 속성은 `nomarl flow`와 동일하게 유지하다, 스크롤에 걸리는 순간 지정된 위치를 유지하게 된다
    


<br>

### 👉 `overflow`
- 컨텐츠가 너무 많아서, 넘쳐 흐를 때 어떻게 대응할 것인가에 대한 방법을 지정한다
- 단축 속성(short hand)으로, `overflow-x`, `overflow-y`를 한번에 설정한다 
---
1. `visible` : 넘쳐 흐르는 컨텐츠를 그대로 보여준다. 만약 아래에 다른 요소가 있다면 컨텐츠가 겹치게 된다 / default
2. `hidden` : 넘쳐 흐르는 컨텐츠를 숨긴다
3. `scroll` : 스크롤을 사용해 해당 블럭 내부에서 모든 컨텐츠가 보이도록 한다  
4. `auto` : 브라우저가 자동으로 값을 선택한다. 컨텐츠가 넘쳐흐르지 않을 때에는 `visible`, 넘쳐흐를 때에는 `scroll`을 사용한다

<br>

### 👉 `z-index`
- `position`을 사용한 요소의 z축의 순서를 지정한다
- 속성 값으로는 `auto`(default) 와 정수를 사용한다. 이 때 양의 정수와 음의 정수를 모두 사용할 수 있다
- 따로 지정하지 않으면, 기본 순서대로 쌓이게 되는데 이 순서는 코드를 작성한 순서와 `position` 값에 따라 다르다
- `position`이 `static`인 요소가 `static`이 아닌 요소보다 앞선 순서를 가진다
- `position`이 `static`이 아닌 요소는 `z-index` 값을 사용해 z축의 순서를 변경할 수 있다 
- [참고] https://developer.mozilla.org/ko/docs/Web/CSS/z-index


















