# 01-1. VirtualKeyboard
## 📚  npm 
- `npm init`: package.json 초기 설정
- `npm i` 는 `npm install`의 alias
- `-d` : devDependency 버전을 설치
    - `--save-dev`의 Alias
    - `devDependency`: 로컬 개발이나 테스트에만 필요한 패키지
    - `dependency`: 프로덕션 환경에서 필요한 패키지 (-d를 사용하지 않고 설치)
        - 프로덕션 환경: 운영 시에 필요한 의사소통 및 모니터링 도구 모음
- `--save-exact`: 캐럿(^) 없이 설치
    - 캐럿(^) 있는 경우 마이너 버전에 한해서 업데이트 허용
- `npx webpack-dev-server`: webpack devServer 가동
    - package.json에 script 추가: `dev: webpack-dev-server`
    - `npm run dev`
- `npx run webpack`: 빌드
    - package.json에 script 추가: `build: webpack --mode==모드명`
    - `npm run dev`
- `npx eslint --init`: eslint의 설정 파일 초기화(`.eslintc.json`)
    - 설정 파일 초기화 시 필요한 내용은 현재 프로젝트 내용에 따라서 선택
    - `To check syntax and find problems`
    - `JavaScript modules (import/export)`
    - `None of these`
    - `No`
    - `Browser`
    - `JSON`

<br>

## 📚  module
```json
"devDependencies": {
    "css-loader": "^6.5.1",
    "css-minimizer-webpack-plugin": "^3.1.1",
    "eslint": "^8.6.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.6",
    "prettier": "2.5.1",
    "terser-webpack-plugin": "^5.3.0",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.2"
  }
```
- `css-loader`: css파일을 불러오는데 필요한 loader
- `css-minimizer-webpack-plugin`: css파일을 최적화(압축) 
- `eslint`: javascript lint 중 하나로, 코드를 실행하지 않아도 정적 분석을 통해 문법적 오류를 찾는다.
    - 간단한 포매팅 기능도 제공
- `eslint-config-prettier`: eslint와 prettier의 포매팅이 겹쳐서 충돌나는 부분을 제어해준다
    - `eslint`는 문법 오류를 찾는 것이 주 목적이며, 간단한 포매팅 기능을 제공한다
    - `prettier`는 포매팅을 목적으로 한다
    - 두 가지 모듈을 모두 사용한다면, 포매팅이 충돌나는 경우가 생길 수 있다
    - 포매팅 충돌 시, eslint의 기능을 비활성화하는 역할을 한다
- `eslint-plugin-prettier`: eslint에 prettier의 포매팅 기능을 추가하는 패키지
- `html-webpack-plugin`: html파일 설정을 위한 모듈
    - webpack 번들을 제공하는 html파일 생성을 단순화(lodash사용 가능)
    - [참고] https://webpack.kr/plugins/html-webpack-plugin/
- `mini-css-extract-plugin`: css파일 설정을 위한 모듈
- `prettier`: 코드 포맷터 중 하나
    - 코드포맷터: 코드 포매터란 정한 코딩 컨벤션(코드 작성 스타일 규칙)에 따라 코드 스타일을 알아서 정리해주는 도구
    - [참고] https://prettier.io/docs/en/install.html
- `terser-webpack-plugin`: js파일을 최적화(압축) 
- `webpack`: 실제 기능을 담당하는 기본 패키지
    - [참고] https://bit.ly/3ZbGhzB
- `webpack-cli`: cmd에서 webpack을 사용할 수 있도록 돕는 패키지
- `webpack-dev-server`: 라이브 리로드 기능을 제공하는 개발용 서버
    - [참고] https://poiemaweb.com/devServer)

<br>

## 📚  webpack.config.js
- webpack.config.js 파일 설정 후 터미널에서 `npx webpack` 명령어를 통해 실행
- 설정한 경로대로 dist 폴더가 생성되고, 해당 폴더 내에 `bundle.js`파일이 생성된 것을 확인할 수 있다.
- `bundle.js.map`은 devtool에서 설정한 `source-map`을 나타내는 파일
- [참고] https://webpack.kr/configuration/

<br>

### 💡 `require()`
```js
const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
```
- `require()`를 사용한 외부 모듈 가져오기

<br>

### 💡 [module.exports] `entry`, `output`
```js
module.exports = {
    entry: "./src/js/index.js",                        
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    ...
}
```
- `entry`: 자바스크립트 파일의 진입점 설정 
- `output`: 빌드 시, 번들 파일 관련 속성 설정
    - `filename`: 번들 파일명
    - `path`: 번들 파일이 생성될 경로 지정(절대 경로 사용)
        - `path.resolve`: https://velog.io/@thyoondev/Path.join와-Path.resolve-차이
    - `clean`: 번들 파일 생성 경로에 다른 파일이 있는 경우, clean할 지 여부 설정


<br>

### 💡 [module.exports] `devtool`, `mode`
```js
module.exports = {
    ...
    devtool: "source-map",
    mode: "development",
    ...
}
```
- `devtool`: 소스맵 생성 여부와 방법을 제어
    - 빌드 파일과 원본 파일을 연결
    - [참고] https://webpack.kr/configuration/devtool/
- `mode`: webpack에 내장된 최적화 기능을 사용
    - 모드는 production과 development가 있으며 난독화 기능을 제공하는지 등에 대한 차이가 있다
    - [참고] https://webpack.kr/configuration/mode/


<br>

### 💡 [module.exports] `devServer`
```js
module.exports = {
    ...
    devServer:{
        host: "localhost",
        port: 3030,
        open: true,
        watchFiles: "index.html" 
    },
    ...
}
```
- webpack devServer에 대한 설정
- `open: true`: webpack devServer를 실행할 때마다 새 창을 띄운다
- `watchFiles`: reload의 기준이 되는 파일 설정 
    - `watchFiles: index.html`: index.html에 변화가 있을때마다 reload

<br>

### 💡 [module.exports] `plugins`
```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    ...
    plugins: [
        new HtmlWebpackPlugin({
            title: "keyboard",
            template: "./index.html", 
            inject: "body", 
            favicon: "./favicon.ico",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    ...
}
```
- `plugins`: 사용할 webpack 플러그인 객체의 배열
    - 플러그인 마다 객체 생성시 필요한 내용은 상이하다
    - [참고] https://webpack.kr/configuration/plugins/
- `html-webpack-plugin`
    - `title`: html파일의 <title>에 해당하는 값
    - `tempalte`: teamplate으로 지정된 html파일에서 lodash 문법을 사용할 수 있도록 지원
    - `inject`: 파일을 번들했을 때, 자바스크립트 파일을 html 파일의 어디에서 읽어올 지 지정
    - `favicon`: 파비콘 지정
- `mini-css-extract-plugin`
    - `filename`: 사용할 css파일의 파일명 지정


<br>

### 💡 [module.exports] `module`, `rules`
```js
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.css$/,   // css파일을 
                use: [MiniCssExtractPlugin.loader, "css-loader"], // MiniCssExtractPlugin의 loader를 사용해 읽어들이겠다는 의미 
            }
        ]
    },
    ...
}
```
- `module`: 프로젝트 내에서 다른 유형의 모듈을 처리하는 방법을 결정
- `rules`: 모듈이 생성 될 때 요청과 일치하는 Rule의 배열
    - 이러한 규칙은 모듈 생성 방법을 수정할 수 있다. 
    - 로더를 모듈에 적용시키거나 파서를 수정할 수 있다.
    - `test`: rules를 적용할 파일 기준 지정
        - [주의] 윈도우에서 역슬래시를 자음-한자로 입력했더니 오류 발생함 그대로 써줘야한다
            - /＼.css$/ (X)
            - /\.css$/ (O)
        - [참고] https://webpack.kr/configuration/module/#ruletest
    - `use`: test에 통과한 모듈에 어떤 로더를 적용할지 지정
        - [참고] https://webpack.kr/configuration/module/#ruleuse


<br>

### 💡 [module.exports] `optimization`
```js
module.exports = {
    ...
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()            
        ]
    }
    ...
}
```
- `optimization`: 최적화 방식 설정
    - [참고] https://webpack.kr/configuration/optimization/

<br>

## 📚  package.json
```json
  "scripts": {
    // "build": "webpack",
    "build": "webpack --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- script를 등록해서 `npm run webpack` 대신 `npm run build`로 빌드할 수 있다
- mode설정 없이 build하면 development 모드로 자동 빌드된다
    - 줄바꿈, 공백, 들여쓰기 등을 유지하며 빌드된다
- 코드의 난독화를 위해 production 모드로 빌드되도록 설정하자
    - 줄바꿈, 공백, 들여쓰기 등을 삭제하고 컴팩트하게 빌드된다
    - map파일에 원본 파일의 정보를 확인할 수 있다 (devtool설정 때문)

<br>

## 📚  Lodash
```html
<title>
    <% htmlWebpackPlugin.options.title %>
</title>
```
- template로 지정된 `index.html`에서 lodash문법을 사용할 수 있다
- htmlWebpackPlugin에 설정된 title값을 불러온다.

<br>

## 📚  기타
- js파일 상위 경로에서 css 파일 import할 수 있다 (예) `import "../css/style.css"`
