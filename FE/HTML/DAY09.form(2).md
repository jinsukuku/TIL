# 📌 9일차 
- 2021.09.05(일)
- 목차 : 폼 관련 요소

<br>

## ✅ `<form>` : 폼 요소 
### 👉 `<form>`
- 사용자에게 정보를 입력받기 위한 요소
- 사용자와 정보를 주고받는다는 부분에서 대화형 컨트롤으로 본다
- 단독 사용 시 output이 따로 없다
- `<form>` 태그는 내부의 콘텐츠를 하나로 묶어준다


<br>

### 👉 `<button>`
- `<form>` 내부에서 사용되는 클릭 가능한 버튼
- JavaScript를 사용해서 원하는 기능을 설정할 수 있다
- JavaScript를 사용하기 전에는 별다른 기능이 없는 `<button>` 대신 `<div>`를 사용하면 안될까?
- 웹 접근성측면에서 버튼의 역할을 하는 요소인 경우 `<button>`을 사용하는 것을 권장한다
- 속성
    - `name` 속성 : 서로 다른 `<form>` 에서는 중복 가능 (동일 `<form>` 내부에서는 중복 불가능)
    - `value` 속성 : 버튼의 텍스트를 설정할 수 있다
    - `<button type="">...</button>` : 버튼의 행동방식을 설정
        - `submit` : 버튼이 서버로 데이터를 제출
        - `reset` : 모든 컨트롤을 초기값으로 되돌린다. `<input type="reset">`과 같은 역할
        - `button` : 기본 값 (default)
- `<input type=button>` VS `<button type="button">`

    <table>
        <tr style="text-align:center">
            <th>/</th>
            <th>input</th>
            <th>button</th>
        </tr>
        <tr>
            <th style="text-align:center">type</th>
            <td style="text-align:center" colspan="2">reset / submit / button</td>
        </tr>
        <tr>
            <th style="text-align:center">value</th>
            <td>- 기본 값을 갖는다<br>- reset : 초기화<br>- submit : 제출</td>
            <td>- 기본 값 없음</td>
        </tr>
        <tr>
            <th style="text-align:center">형태</th>
            <td>- 빈 요소<br>- 요소의 속성으로 값을 설정<br>- 텍스트만 가능하다</td>
            <td>
                - 여는 태그와 닫는 태그를 갖는다<br>
                - 자식 요소를 가질 수 있다<br>
                - 다른 태그로 컨텐츠를 감쌀 수 있다<br>
                - 텍스트 외의 컨텐츠를 가질 수 있다 (예) 이모지<br>
                - but 웹 접근성을 위해 텍스트를 함께 사용하자
            </td>
        </tr>
    </table>




<br>

### 👉 `<select>`
```html
<label for="food">좋아하는 음식</label>
<select name="food" id="food" required>
    <option value="">-- 선택해주세요 --</option>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
    <option value="peach">복숭아</option>
</select>
```
- 선택 옵션 메뉴를 드롭다운 형태로 제공하는 컨트롤
- 선택지는 `<select>` 의 자식 요소인 `<option>`을 사용한다
- `<select>` 의 `name`값과 선택한 `<option>`의 `value`를 사용해 서버에 제출한다

- `value` 속성
    ```html
    <option>-- 선택해주세요 --</option>
    ```
    - `value` 속성에 값이 없다면, `<option>`의 콘텐츠를 서버에 제출한다
    ```html
    <option value="">-- 선택해주세요 --</option>
    ```
    - `value` 속성을 위와 같이 명시하면 서버에 콘텐츠를 전송하지 않는다
    <br>
      
```html
<label for="food">좋아하는 음식</label>
<select name="food" id="food" required>
    <option value="apple" selected>사과</option>
    ...
```

- `required` 속성 : `<option>` 을 필수 선택으로 설정하기위한 속성
- `selected` 속성 : 최초 선택 값으로 설정

      
```html
<label for="food">좋아하는 음식</label>
<select name="food" id="food" required>
    <optgroup label="fruit">
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="peach">복숭아</option>
    </optgroup>
    <optgroup label="vegetable">
      <option value="potato">감자</option>
      <option value="carrot">당근</option>
    </optgroup>
</select>
```

- `<optgroup>` : `<option>` 값을 그룹화 하기위한 요소 




<br>

### 👉 `<datalist>`
```html
<label for="movie">좋아하는 영화</label>
<input type="text" id="movie" name="movie" list="movieList">

<datalist id="movieList">
  <option>주토피아</option>
  <option>토이스토리</option>
  <option>겨울왕국</option>
  <option>인사이드아웃</option>
</datalist>
```
- `<input>` 의 `list` 속성과 함께 사용한다 
- 선택 가능한, 혹은 추천하는 선택치를 나타내는 `<option>`를 자식 요소로 갖는다 
- `<datalist>` 의 `id`와 `<input>`의 `list`속성를 사용해 서로 연결한다 



<br>

### 👉 `<textarea>`
```html
<label for="review">후기 작성 :</label>
<textarea id="review" name="review" rows="5" cols="33">
  항상 주문해서 먹는데 진짜 양도 많고 맛도 최고에요 !
  오늘도 맛있게 먹었습니다~
</textarea>
```

- 멀티라인 텍스트를 입력받을 수 있는 요소
- 개행이나 공백을 입력해도 그대로 output으로 보여진다
- `rows`와 `cols`속성을 사용해 기본 크기를 설정할 수 있다
- 글씨체에 따라서 `rows`와 `cols`속성을 사용해 설정한 크기가 다를 수 있다
- 속성 : `readonly` `disable` `placeholder` `required` 등 


















