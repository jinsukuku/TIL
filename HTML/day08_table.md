# 📌 8일차 
- 2021.09.04(토)
- 목차 : 목록과 표

<br>

## ✅ `<table>` : 테이블(table) 
```html
<table>
    <!-- head 행 -->
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
    <!-- head 행 -->
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























