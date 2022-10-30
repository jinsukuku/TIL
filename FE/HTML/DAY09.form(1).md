# 📌 9일차 
- 2021.09.05(일)
- 목차 : 폼 관련 요소

<br>

## ✅ `<form>` : 폼 요소 
### 👉 `<form>`
```html
<form action="test.html" method="GET">
    <input type="text" name="pw">
    <button type="submit">제출</button>
</form>
```
- 사용자에게 정보를 입력받기 위한 요소
- 사용자와 정보를 주고받는다는 부분에서 대화형 컨트롤으로 본다
- 단독 사용 시 output이 따로 없다
- `<form>` 태그는 내부의 콘텐츠를 하나로 묶어주는 요소
- `<form>` 요소의 속성
    - `action` : 입력받은 데이터를 전송할 서버나 웹 페이지의 주소
    - `method` : 입력받은 데이터를 전송할 방법
        - `POST` : 데이터를 요청 본문으로 전송 
        - `GET` : 데이터를 URL 뒤에 ?으로 구분한 다음 이어 붙여서 전송
            > (예) https:// test.html **?pw=1234** 
            - 예시와 같이 URL에 사용자 정보가 모두 노출이 된다
            - 전송 데이터가 검색 키워드와 같은 경우가 아니라면 POST방식을 사용하자

<br>

### 👉 `<label>`
```html
<form action="test.html" method="GET">
    <div>
        <!-- label의 for 속성을 사용, 연결 input을 명시 -->
        <label for="color">색상</label>
        <input type="text" name="color" id="color">
    </div>
    <div>
        <!-- label로 input을 감싸주면, for 속성 생략 가능 -->
        <label for="size">사이즈
            <input type="text" name="size">
        </label>
    </div>
</form>
```

- `<label>` : `<input>`에 대한 설명을 나타내는 영역
- 속성 
    - `for` 속성 : `<input>`의 `id`를 명시해, 연결된 `<input>`을 알려준다
    - `<label>` 태그로 `<input>`을 감싸주면 `for` 속성을 사용하지 않아도 된다
    - `<label>` 의 콘텐츠는 웹 접근성 측면에 의해 텍스트로 작성하는 것을 권장한다


<br>

### 👉 `<input>` : 사용자에게 정보를 받는 영역
 
1. `<input>`의 속성
    ```html
    <input type="text">
    ```
    - `type` 속성 : `<input>`에 입력받을 데이터의 종류를 설정. 다양한 종류를 갖는다
    ```html
    <input type="text" name="food">
    ```
    - `name` 속성 : 서로 다른 `<form>` 에서는 중복 가능 (동일 `<form>` 내부에서는 중복 불가능)
    - `name` 속성은 최종 submit 시에 구분자로 사용된다
    ```html
    <!-- 입력 불가능 / submit 불가능 -->
    <input type="text" name="food" disable>
    ```
    - `disabled` 속성 : 속성이 사용된 `<input>` 의 입력을 막는다
    - 입력 불가능 / submit 불가능
    ```html
    <!-- 입력 불가능 / submit 가능 -->
    <input type="text" name="food" readonly>
    ```
    - `readonly` 속성 : 미리 정해진 값을 읽기만 하는 읽기 전용으로 만든다
    - `disabled` 와 다르게 submit 시 값을 전송한다
    - 입력 불가능 / submit **가능**
    ```html
    <input type="text" name="food" minlength="3" maxlength="5">
    ```
    - `minlength`속성 : 최소 입력 가능한 길이
    - `maxlength`속성 : 최대 입력 가능한 길이
    ```html
    <input type="text" name="food" placeholder="저녁메뉴를 입력해주세요">
    ```
    - `placeholder`속성 : 어떠한 형태의 값을 입력해야하는 지에 대한 힌트를 띄워준다
    ```html
    <input type="text" name="food" autocomplete="on">
    ```
    - `autocomplete`속성 : 이전 입력값으로 자동 완성 기능을 사용할지에 대한 값 (on/off)
    ```html
    <input type="text" name="food" required>
    ```
    - `required` 속성 : 필수로 입력받아야하는 정보에 사용. 입력하지 않으면 submit할 수 없다
    ```html
    <input type="text" name="food" required>
    ```
    - `required` 속성 : 필수로 입력받아야하는 정보에 사용. 입력하지 않으면 submit할 수 없다
    ```html
    <input type="number" name="age" min="0" max="10" step="2">
    <input type="range" name="score" min="-10" max="10" step="4">
    ```
    - `step` 속성 : 값이 변경되는 단계를 설정 (예) step이 2인 경우 : 0 → 2 → 4 ...
    - `min` 속성 : input type이 `number`, `range`인 경우, 최소값을 설정
    - `max` 속성 : input type이 `number`, `range`인 경우, 최대값을 설정


<br>

2. `<input type="">` : `<input>`에 입력받을 데이터의 종류를 설정
    - `type="text"` : 텍스트를 입력받는다 (개행 불가능)
    - `type="password"` : 비밀번호를 입력받는다. 입력한 내용은 마스킹처리가 되어 보이지 않는다
    - `type="email"` : 이메일을 입력받는다. 이메일 형식에 맞게 입력해야한다
    - `type="tel"` : 전화번호를 입력받는다. 모바일 환경에서 접근하면 숫자 키보드가 자동 사용된다
    - `type="number"` : 숫자를 입력받는다. 숫자 외의 입력값은 제출할 수 없다
    - `type="range"` : 숫자의 범위를 입력받는다. 값이 가려진 숫자를 입력하는 컨트롤러
    - `type="date"` : 날짜를 입력받는다. 입력 형태는 OS에 따라서 다르다
    - `type="month"` : 월에 대한 정보를 입력받는다.
    - `type="time"` : 시간을 입력받는다. 입력 형태는 OS에 따라서 다르다
    - `type="button"` : 버튼의 형태를 가지며, 기능은 JavaScript를 사용해 설정할 수 있다   
        - `value` 속성을 추가로 사용해서 버튼의 텍스트를 설정할 수 있다
    - `type="submit"` : `<form>` 내부에서 입력받은 데이터를 제출한다
    - `type="reset"` : `<form>` 내부의 데이터를 초기화한다
    - `type="checkbox"` : 체크 박스. 최초 선택되길 원하는 `<input>`에는 `chekced` 속성을 추가하자
        - `checked` : 현재 선택된 체크 박스를 명시
        - GET 방식 결과
        > 하나 선택 : https:// test.html **?check1=on** <br>
        두개 선택 : https:// test.html **?check1=on&check2=on** <br> 
        선택 안함 : https:// test.html **?** 
    - `type="radio"` : radio 박스
        ```html
        <input type="radio" name="radio" value="radio1" checked>
        <input type="radio" name="radio" value="radio2">
        <input type="radio" name="radio" value="radio3>
        ```
        - 중복 선택을 막기 위해선 `<input type="radio">`의 `name` 속성 값을 동일하게 설정하자 
        - `checked` : 현재 선택된 radio 박스를 명시
        - GET 방식 결과 : 어떤 항목을 선택했는 지 알 수 없다
        > 하나 선택 : https:// test.html **?radio=on** 
        - 어떤 radio를 선택했는 지 알고싶을 때에는 `value` 속성을 사용하자
        > 하나 선택 : https:// test.html **?radio=radio2**
    - [참고] : https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input 

<br>
<br>

### 👉 `<fieldset>`
```html
<form>
  <fieldset>
    <legend>언어 선택</legend>

    <input type="radio" id="korean" name="language">
    <label for="korean">Korean</label><br/>

    <input type="radio" id="english" name="language">
    <label for="english">English</label>
  </fieldset>
</form>
```
<form>
  <fieldset>
    <legend>언어 선택</legend>
    <input type="radio" id="korean" name="language">
    <label for="korean">Korean</label><br/>
    <input type="radio" id="english" name="language">
    <label for="english">English</label>
  </fieldset>
</form>

- 여러개의 `<input>`과 `<label>`을 묶을 때 사용 
- 단순히 스타일을 위한 경우가 아닌, 시매틱적인 이유로 묶어주어야할 때 사용한다
- `<legend>` : `<fieldset>` 에 대한 설명을 해준다 (범례)
    - 반드시 `<fieldset>` 첫번째 자식 요소로 사용한다
- `disable` : `<fieldset>` 전체 `<input>`에 대한 입력을 막는다






