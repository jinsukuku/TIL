# API key 관리 방법
## React 환경에서 KakaoMap API Key 관리
1. `dotenv` 설치
    - `npm install dotenv`
2. `index.html`에 스크립트 추가
    - `<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%REACT_APP_KAKAOMAP_API_KEY%"></script>`
3. 프로젝트 최상단에 `.env`파일 생성
4. gitignore에 추가
5. `.env`파일에 api key 작성
    - `REACT_APP_KAKAOMAP_API_KEY=실제apiKey`