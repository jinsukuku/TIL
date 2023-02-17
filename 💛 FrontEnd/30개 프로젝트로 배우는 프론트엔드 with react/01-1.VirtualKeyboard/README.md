# 01-1. VirtualKeyboard
<img src="">

<br>

## 🚀 개발 목표
- 가상 키보드 구현
- WebPack을 사용해 개발 환경 구축
- eslint 와 prettier 사용
- html, css 를 사용해 UI 제작
- 다크모드 추가
- KeyBoard Event 적용(특수 키 제외)
- 한글 입력 지원 X

<br>

## ⚙ 개발 환경
```bash
> npm init
> npm i -D webpack webpack-cli webpack-dev-server
> npm i -D terser-webpack-plugin 
> npm i -D html-webpack-plugin
> npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin
> npm i -D eslint
> npm i -D --save-exact prettier
> npm i -D eslint-config-prettier eslint-plugin-prettier
```

<br>

## 🛠 버전 맞추기
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
- 동일한 버전을 사용하는 것을 권장하며, 메이저 버전만 맞추는 것도 상관없다
- `package.json`에서 버전을 수정하고 터미널에서 `npm install` 하면 `package.json`의 버전과 동일하게 맞춰진다

<br>

## 📁 폴더 구조
```text
Project
ㄴnode_modules
ㄴsrc
    ㄴcss
        style.css
    ㄴjs
        index.js
favicon.png
index.html
package.json
package-lock.json
webpack.config.js
```

<br>

## 📝 스터디
- npm
- module
- webpack.config.js
    - require()
    - entry, output
    - devtool, mode
    - plugins
    - module, rules
    - optimization