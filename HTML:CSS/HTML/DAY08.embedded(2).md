# 📌 8일차 
- 2021.09.04(토)
- 목차 : 임베디드 요소(2)

<br>

## ✅ 임베디드 요소 
- 코드를 직접 작성하는 것이 아닌, 외부의 소스를 불러와서 웹 페이지 내에 삽입하는 요소 
- 이미지, 비디오와 같은 멀티미디어 요소가 여기에 속한다
<br>

### 👉 `<video>`
```html
<video src="sample.mp4" autoplay poster="sample.jpg">
  접속하신 브라우저는 비디오를 지원하지 않습니다
</video>
```
- 이미지태그와 다르게 콘텐츠를 갖는다 (닫힘 태그 사용)
```html
<video autoplay poster="sample.jpg">
  <source src=""sample.mp4>
  접속하신 브라우저는 비디오를 지원하지 않습니다
</video>
```

- `src` : 외부 파일의 경로를 입력하는 속성으로 필수가 아닌 선택적으로 사용한다
-  콘텐츠를 갖기 때문에 자식 요소를 통해 비디오를 연결할수도 있어서 필수가 아니다
- `<video>`의 콘텐츠는 브라우저가 비디오를 지원하지 않는 경우에 노출된다 
- `<video>`태그의 속성
  - `controls` : 비디오를 컨트롤 할 수 있는 컨트롤러를 제공한다
  - `muted` : 비디오의 사운드를 음소거한다
  - `autoplay` : 재생 가능한 시점에 비디오가 자동 재생된다
    - 소리를 가진 비디오의 경우에는 `autoplay`를 사용해도 자동 재생 되지 않는다
    - 웹 페이지에 접속하자마자 소리가 나게 되면 사용자 경험에 좋지 않기 때문
    - 이 때, `muted` 속성을 사용해 이런 경우를 대비하면 `autoplay`가 적용된다
  - `loop` : 비디오 반복 재생. 비디오가 끝나면 다시 처음으로 돌아가 재생한다
  - `poster` : 비디오의 재생이 어려운 경우 `poster`에 연결된 이미지가 노출된다
    - 따로 설정하지 않으면 비디오의 첫번째 프레임이 포스터 프레임으로 사용된다

<br>

### 👉 `<audio>`
```html
<audio controls>
  <source src="sample1.opus" type="audio/ogg; codecs=opus">
  <source src="sample2.ogg" type="audio/ogg; codecs=vorbis">
  <source src="sample3.mp3" type="audio/mpeg">
</audio>
```
- `<video>`태그와 거의 유사한 속성을 갖는다
- `src` 속성을 사용하거나 내부에 `<source>`태그를 사용해 외부 파일과 연결한다
- 여러 파일을 연결하면, 브라우저의 지원 여부를 확인한다
- 지원 가능한 형식을 만나면 해당 파일을 재생한다
- `<audio>`태그의 속성
  - `controls` : 오디오를 컨트롤 할 수 있는 컨트롤러를 제공한다
  - `muted` : 오디오 사운드를 음소거한다
  - `autoplay` : 재생 가능한 시점에 오디오가 자동 재생된다
    - `autoplay`를 사용해도 사용자 경험에 좋지 않기 때문에 자동 재생 되지 않는다
    - `muted`와 함께 사용하면 자동 재생된다
```html
<figure>
    <figcaption>Sample Audio</figcaption>
    <audio
        controls
        src="sample.mp3">
        접속하신 브라우저는 오디오를 지원하지 않습니다
    </audio>
</figure>
```
<figure>
    <figcaption>Sample Audio</figcaption>
    <audio
        controls
        src="sample.mp3">
        접속하신 브라우저는 오디오를 지원하지 않습니다
    </audio>
</figure>

- `<figure>`으로 감싸주어 위와 같은 형태로 사용할수도 있다

<br>

### 👉 `<canvas>`
- html문서에 캔버스를 추가한다
- 캔버스 내부에 그림을 그릴 때에는 JavaScript를 사용한다
<br>

### 👉 `<iframe>`
- 현재 html문서 내부에 외부 html파일을 가져와 프레임 내부에 띄워준다
- 현재 html문서 내부에 인라인으로 가져오는 것이 허용되지 않은 경우도 있다
- 일반적으로 지도를 현재 문서에 띄우기위해 사용한다

<br>
