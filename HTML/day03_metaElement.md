# 📌 3일차 
- 2021.08.30(월)
- 목차 : 메타데이터 요소

#

## ✅ 메타데이터 요소
### 👉 메타데이터 : 데이터를 설명하기 위한 데이터 
- html 문서 자체도 하나의 데이터이기때문에 이를 설명하는 데이터가 바로 메타데이터
- head 태그 안에 명시한다 (예) `<meta name=“description”>`
- 검색 엔진이 검색 결과를 노출시킬때 웹 페이지에 대한 정보를 토대로 분류하여 결과를 노출한다 
- 이 때, 가장 먼저 html 문서를 설명하는 메타데이터를 사용한다
- [참고] https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta
<br>
  

### 👉 `<title>` 태그 : 웹 페이지의 제목
- `<title>` 태그 : 페이지의 제목 요소
- 웹 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의하기 위한 요소
- 텍스트만 포함할 수 있으며, 태그가 포함되더라도 무시한다
- `<head>` 태그에는 하나의 `<title>` 태그만 허용된다
- [참고] html문서에는 하나의 `<head>` 태그만 허용된다
```html
<!DOCTYPE html>
<html>
    <head>
        <!— title —>
        <title> 웹 페이지의 제목 </title>
    </head>
    <body>
        <h1>Hello, World</h1>
    </body>
</html>
```
- 페이지 제목(title)과 SEO 
    - **페이지 제목(title)은 SEO에 큰 영향을 준다**
    - 검색 엔진이 결과 페이지의 노출 순서를 결정하는 구성요소 중 하나가 페이지 제목의 내용 <br>→ 비슷한 웹페이지 중, 더 좋은 페이지 제목이의 웹 페이지가 상위노출
    - 그리고 검색 결과에서 사용자의 주목을 끌 수 있는 최초의 훅이 바로 페이지 제목
- 더 좋은 제목을 작성하기 위한 방법
    1. 단어로 구성된 제목을 피하라 <br>→ 콘텐츠를 **설명하는 문장 혹은 용어와 정의**를 묶어 사용한다
    2. 검색 결과는 제목의 첫 55~60글자만 노출 <br>→ 긴 제목을 사용하는 경우 **중요한 내용을 앞쪽에 배치하라**
    3. 여러 키워드를 사용하는 스타일의 제목은 피해라 <br>→ 제목이 단순한 단어의 나열에 불과하면 좋은 제목이 아니므로 검색 알고리즘의 결과에서 순서가 뒤로 밀린다
    4. 웹 사이트 내의 html 문서들의 제목이 유사하거나 중복되는 것을 지양하라  <br>→ 검색 결과의 정확도를 떨어트리는 요인이 된다
- [참고] https://developer.mozilla.org/ko/docs/Web/HTML/Element/title
<br>

### 👉 meta 문서 정보 
- 하나의 meta 태그에는 하나의 정보만을 담는다
- 여러 정보를 작성해야한다면 여러개의 meta 태그를 사용하도록 한다
- meta 태그는 빈 요소이므로 콘텐츠(contents)를 가질 수 없다
- meat 태그는 속성을 통해 html 문서의 정보를 작성한다
- 이 때, name 속성은 content 속성과 함께 사용한다

```html
<!DOCTYPE html>
<html>
    <head>
        <!— meta 태그 사용하기 —>
        <meta name=“이름” content=“내용”>
        <title> 웹 페이지의 제목 </title>
    </head>
    <body>
        <h1>Hello, World</h1>
    </body>
</html>
```

- meta 태그의 name 속성의 종류
    - **application-name** : 웹 페이지에서 구동중인 애플리케이션의 이름
    - **author** : 문서 저자의(작성)
    - **description** : 페이지에 대한 짧고 정확한 요약 (일부 브라우저는 즐겨찾기 페이지의 기본 설명 값으로 description을 사용)
    - **generator** : html 문서 작성을 돕는 소프트웨어를 통해 페이지를 생성한 경우, 소프트웨어의 식별자
    - **keywords** : 페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록
    - **referrer** : 웹 페이지를 이동하는 경우, 다른 웹페이지에게 어떤 방식을 통해 접속했는지에 대해 설명하기위한 헤더
<br>
   
### 👉 meta 문자 인코딩, 뷰 포트
1. 문자 인코딩
    - `<meta charset=“UTF-8”>`
    - charset : 페이지의 문자 인코딩을 선언 <br>→ head 태그의 첫번째 요소로 넣거나 title 태그의 바로 위에 사용하는 것을 권장
2. 뷰 포트
    - `<meta name=“viewport” content=“width=device-width, … “>`
    - viewport : 전체 브라우저 중에 웹 페이지를 볼 수 있는 영역을 의미 
    - viewport를 정의하므로, 하나의 html문서를 통해 pc환경과 모바일 환경 등 다양한 환경에 대응할 수 있다
    - viewport의 값
        - **width(device-width)** : 웹 사이트를 랜더링하고자하는 뷰포트의 너비를 정의
        - **height(device-height)** : 웹 사이트를 랜더링하고자하는 뷰포트의 높이를 정의
        - **initial-scale** : 0.0과 10.0 사이의 수로, 가능한 최대 확대 비율을 정의한다
        - **user-scalable** : 웹 사이트의 화면을 확대/축소 하는 것을 막을지 여부
        - **maximum-scale, minimum-scale** : 확대의 최대,최소 비율을 설정
<br>

### 👉 MIME 타입
- 외부의 경로를 통해 파일을 불러올 때, 우리는 경로를 문자열로 입력한다
- 단순히 해당 위치의 파일을 가지고 올 뿐, 어떤 확장자를 가진 어떤 파일인지에 대해서는 해석하지 못한다
- 그렇기 때문에 type을 명시해주어야한다
- <link href=“style/index.css” rel=“stylesheet” **type=“text/css”**>
- 위와 같이 입력해주면 text로 작성된 css확장자를 가진 파일임을 인식한다
- 이렇듯 파일의 type을 명시해주는 것을 MIME 타입이라고 말한다
- MIME 타입의 구조
    - type/subtype : 타입(대분류)과 서브타입(확장자)을 ‘/‘로 구분지어 작성한다 
    - 대소문자를 구분하지는 않으나, 가독성을 위해 소문자 작성을 권장한다
    - 개별 타입 : text/plain , text/html , image/png, audio/*, video/mp4 …
    - text/plain : text로 작성된 text파일을 의미
- [참고] https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types


### 👉 style 
```html
<!DOCTYPE html>
<html>
    <head>
        <title> style태그 </title>
        <style> h1 {color:red} </style>
    </head>
    <body>
        <h1>Hello, World</h1>
    </body>
</html>
```

- 외부 css파일이 아니라 style 태그 내에 인라인 형태로도 css를 사용할 수 있다
- 하지만 외부 css파일을 연결해 사용하는 것을 권장한다
<br>
 
### 👉 script
```html
<script src=“javascript.js”></script>
```
- 외부 script파일을 연결할 때에 사용한다

```html
<script src=“javascript.js”>
    alert(“Hello World!”)
</script>
```
- 그리고 `<script>` 태그 내에 인라인 형태로 사용할 수도 있다
- css와 달리 외부 파일을 불러올 때와 인라인 형태로 작성할 때 모두 `<script>` 태그를 사용한다
- `<script>` 태그는 `<head>`, `<body>` 어느쪽에 위치해도 상관없다
- 다만 html 파일 중간에 넣게 되면, 브라우저가 랜더링 되던 중 `<script>` 태그를 만나면 script를 해석하는 동안 랜더링이 중단된다
- 위와 같은 이유로 `<script>`태그를 `<body>`의 가장 하단부에 작성하는 것을 권장한다
- [참고] https://developer.mozilla.org/ko/docs/Web/HTML/Element/script