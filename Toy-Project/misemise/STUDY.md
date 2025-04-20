### 🚀Meterial UI 사용하기
- [참고] https://mui.com/material-ui/getting-started/installation/
- npm으로 설치  
    - `npm install @mui/material @emotion/react @emotion/styled`
- Component - material Icons 에서 필요한 아이콘 확인 후 import

<br>

### 🚀json객체 사용하기 
- https://devbirdfeet.tistory.com/113

<br>

### 🚀styled-component 사용법 간단 정리
- https://charles098.tistory.com/188

<br>

### 🚀styled-components에 구글 폰트적용하기
-  https://velog.io/@minju1009/styled-components-%ED%8F%B0%ED%8A%B8%EC%A0%81%EC%9A%A9

<br>

### 🚀미세먼지 API
- https://www.data.go.kr/iim/api/selectAPIAcountView.do
- 포털에서 제공되는 Encoding/Decoding 된 인증키를 적용하면서 구동되는 키를 사용한다
- fetch로 데이터 뿌려주기 
    - https://www.daleseo.com/js-window-fetch/
    - referenceError 발생하면 https://velog.io/@ahn0min/Node.js-fetch-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
        - `package.json`에 type 추가 후 정상 작동
        - 만약 추가 module 설치 후 App.js를 찾지 못한다면 아래 내용 확인

<br>

### 🚀App.js 를 찾지 못하는 오류 
- errorMsg: `Module not found: Error: Can't resolve 'App'`
- https://byul91oh.tistory.com/387
- 나같은 경우는 fetch를 사용하기 위해 package.json에 작성해둔 `type: "modules"`가 원인.......... 지우니까 해결됨
- 근데 fetch가 안됨 ㅎㅎ
    - 원인 추정
    - https://velog.io/@ahn0min/CommonJS-vs-ES-modules
- axis를 써볼까?
    - https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9

<br>

### 🚀이모지
- emoji 유니코드 html에서 사용하려면
    -  https://23log.tistory.com/81
- emoji 유니코드
    - http://www.unicode.org/emoji/- charts/full-emoji-list.html
- emoji Open API
    - https://emoji-api.com/#documentation

<br>

### 비교
- https://yceffort.kr/2020/08/commonjs-esmodules