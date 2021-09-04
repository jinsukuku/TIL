# 📌 8일차 
- 2021.09.04(토)
- 목차 : 목록과 표

<br>

## ✅ `<table>`  
```html
<table>
    <!-- 제목 행 -->
    <tr>
        <th scope="col">소속</th> <!-- 열제목1 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">이름</th> <!-- 열제목2 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">나이</th> <!-- 열제목3 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">성별</th> <!-- 열제목4 : 하나의 열을 대표하는 명칭 -->
    </tr>
    <!-- 1번째 행 -->
    <tr>
        <td rowspan="4">떡잎유치원</td>
        <th scope="row">짱구</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>5</td>
        <td scope="col">해바라기반</td>
    </tr>
    <!-- 2번째 행 -->
    <tr>
        <th scope="row">훈이</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>5</td>
        <td>해바라기반</td>
    </tr>
    <!-- 3번째 행 -->
    <tr>
        <th scope="row">치타</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>6</td>
        <td>장미반</td>
    </tr>
    <!-- 4번째 행 -->
    <tr>
        <td colspan="2">인원수</td>
        <td>3명</td>
    </tr>
</table>
```
<table>
    <!-- header -->
    <tr>
        <th scope="col">소속</th> <!-- 열제목1 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">이름</th> <!-- 열제목2 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">나이</th> <!-- 열제목3 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">성별</th> <!-- 열제목4 : 하나의 열을 대표하는 명칭 -->
    </tr>
    <!-- 1번째 행 -->
    <tr>
        <td rowspan="3">떡잎유치원</td>
        <th scope="row">짱구</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>5</td>
        <td scope="col">해바라기반</td>
    </tr>
    <!-- 2번째 행 -->
    <tr>
        <th scope="row">훈이</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>5</td>
        <td>해바라기반</td>
    </tr>
    <!-- 3번째 행 -->
    <tr>
        <th scope="row">치타</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>6</td>
        <td>장미반</td>
    </tr>
    <!-- 4번째 행 -->
    <tr>
        <td colspan="3">인원수</td>
        <td>3명</td>
    </tr>
</table>

### 👉 `<table>`
- 과거에는 `<table>`태그를 사용해 레이아웃을 잡았다 
- 기본 스타일 : border가 없음
### 👉 `<th>` : table head 
- 어떠한 행이나 열을 대표하는 명칭을 contents로 갖는다
- scope 속성 : 행이나 열을 대표하는데, 어떤 것을 대표하는 지 명시하기 위한 속성
- scope 속성은 보여지는 화면에는 변화가 없지만, 스크린 리더와 같은 웹 접근성에 있어 필요한 속성이다
- 기본 스타일 : bold체
### 👉 `<tr>` : table row
- 테이블(table)의 행 하나에 해당하는 데이터(td)를 묶는다
### 👉 `<td>` : table data
- 테이블(table)의 데이터를 포함하는 셀을 의미 
- 셀을 병합할 때에는 `<colspan>`, `<rowspan>` 속성을 사용할 수 있다 (예제 코드 참고)

<br>

## ✅ `<table>` 의 시맨틱 태그
<table>
    <!-- head 행 -->
    <tr style="background-color:lightblue; color:#333">
        <th scope="col">소속</th> <!-- 열제목1 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">이름</th> <!-- 열제목2 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">나이</th> <!-- 열제목3 : 하나의 열을 대표하는 명칭 -->
        <th scope="col">성별</th> <!-- 열제목4 : 하나의 열을 대표하는 명칭 -->
    </tr>
    <!-- 1번째 행 -->
    <tr>
        <td rowspan="3">떡잎유치원</td>
        <th scope="row">짱구</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>5</td>
        <td scope="col">해바라기반</td>
    </tr>
    <!-- 2번째 행 -->
    <tr>
        <th scope="row">훈이</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>5</td>
        <td>해바라기반</td>
    </tr>
    <!-- 3번째 행 -->
    <tr>
        <th scope="row">치타</th> <!-- 현재 행을 대표하는 명칭 -->
        <td>6</td>
        <td>장미반</td>
    </tr>
    <!-- 4번째 행 -->
    <tr style="background-color:lightpink; color:#333">
        <td colspan="3">인원수</td>
        <td>3명</td>
    </tr>
</table>

- 하나의 html문서를 `<header>`, `<body>`, `<footer>`로 구획을 나누듯, 테이블에도 시맨틱 태그가 존재한다
- 테이블 하위 요소를 묶어주어 스타일을 줄 때 편리하다는 장점이 있다


<br>

### 👉 `<thead>`
```html
<table>
    <!-- table의 header 영역 -->
    <thead> 
        <tr>
            <th scope="col">소속</th>
            <th scope="col">이름</th>
            <th scope="col">나이</th>
            <th scope="col">성별</th>
        </tr>
    </thead>
    ...
```

- `<thead>` : table의 header영역 (소속/이름/나이/성별)
- `<thead>` 의 형제 요소로는 반드시 `<tbody>`나 `<tfoot>`가 와야한다 (웹 표준)
  

<br>

### 👉 `<tbody>`
```html
    <!--  table의 body영역  -->
    <tbody>
        <tr> <td rowspan="3">떡잎유치원</td> ... </tr>  <!-- 1번째 행 -->
        <tr> <td>훈이</td> ... </tr>                  <!-- 2번째 행 -->
        <tr> <td>치타</td> ... </tr>                  <!-- 3번째 행 -->
    </tbody>
    ...
```
- `<tbody>` : table의 body영역 (실제 데이터)
- 하나의 테이블은 여러개의 `<tbody>` 를 가질 수도 있다 
  

<br>

  
### 👉 `<tfoot>`
```html
    ...
    <!-- table의 footer영역 -->
    <tfoot>
        <tr>
            <td colspan="2">인원수</td>
            <td>3명</td>
        </tr>
    </tfoot>
</table>
```
- `<tfoot>` : table의 footer영역 (인원수)
  

<br>


## ✅ `<caption>` 
```html
<table>
    <caption>구매 목록</caption>
    <thead>
        <tr>
            <th scope="col">이름</th>
            <th scope="col">가격</th>    
            <th scope="col">개수</th>    
        </tr>
    ...
</table>
```

<table>
    <caption>구매 목록</caption>
    <thead>
        <tr>
            <th scope="col">항목</th>
            <th scope="col">가격</th>    
            <th scope="col">개수</th>    
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="3">식재료</th>
        </tr>
        <tr>
            <td>양파</td>
            <td>5,000</td>
            <td>2개</td>
        </tr>
            <td>숙주나물</td>
            <td>3,000</td>
            <td>1개</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <th colspan="3">생활 용품</th>
        </tr>
        <tr>
            <td>휴지</td>
            <td>13,000</td>
            <td>1개</td>
    </tbody>
</table>

- 테이블(table)을 전체를 아우르는 설명을 위한 요소로, 표의 설명 또는 제목을 나타낸다
- `<figure>` 태그의 `<figcaption>`과 유사한 역할을 한다
- 기본 스타일 : 테이블 요소의 위, 가운데 정렬
- `<caption>` 이 테이블 위에 위치하려면 반드시 `<table>` 요소의 첫번째 자식이어야한다 
- `<caption>` 의 위치를 변경하고자 한다면 CSS를 사용하자 
- `<caption>` 을 갖는 `<table>`이 `<figure>`의 자식인 경우에는 **`<figcaption>`을 사용해 `<table>`을 설명한다**

