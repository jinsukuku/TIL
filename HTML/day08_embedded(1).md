# 📌 8일차 
- 2021.09.04(토)
- 목차 : 임베디드 요소(1)

<br>

## ✅ 임베디드 요소 
- 코드를 직접 작성하는 것이 아닌, 외부의 소스를 불러와서 웹 페이지 내에 삽입하는 요소 
- 이미지, 비디오와 같은 멀티미디어 요소가 여기에 속한다

<br>

### 👉 `<img>`
```html
<img src="zerobace/img/sky.jpg" title="sky-img" height="200">     <!-- 상대 경로 -->
<img src="https://bit.ly/3DPNzie" alt="sky" width="300">          <!-- 절대 경로 -->
```

<img src="zerobace/img/sky.jpg" title="sky-img" height="200"> 
<br>
<img src="https://bit.ly/3DPNzie" width="400"> 

- html 문서에 **이미지를 넣는 요소**로 닫는 태그가 따로 없다
    
<br>

1. **속성**
- `src` : 불러오려는 이미지의 경로를 지정한다 (필수)
- `alt` : 
    - 이미지의 텍스트 설명 / 대체 텍스트
    - 스크린 리더가 사용자에게 이미지를 설명할 때 사용한다
    - 필수는 아니지만 웹 접근성 차원에서 매우 중요하다
    - 네트워크 오류, 죽은 링크 등 접근할 수 없는 이미지를 표시할 때에도 사용된다
- `title` : 이미지에 대한 설명이 tooltip 처럼 보이도록 할 때 사용한다
- `width` : 이미지의 너비 값을 설정한다 (픽셀 단위/단위 생략)
- `height` : 이미지의 높이 값을 설정한다 (픽셀 단위/단위 생략) 
- `width`와 `height`, 둘 중 하나만 설정하면 다른 하나는 원본 이미지의 비율에 따라 자동 조절 
    
<br>

2. **경로의 방식**
- 절대 경로 : 현재 위치와 상관없이 사용할 수 있는 경로
- 상대 경로 : 현재 위치를 기준으로 이미지가 있는 경로를 표시하는 방법
    
<br>
      
3. **지원하는 이미지 형식**
  <table>
    <tr style="background-color:lightblue; color:#333">
        <th>Abbreviation</th>
        <th>MIME type</th>
        <th>File extension</th>
        <th>Summary</th>
    </tr>
    <tr>
        <th style="background-color:lightblue; color:#333">JPEG</th>
        <td>image/jpeg</td>
        <td>.jpg, .jpeg, .jfif, .pjpeg, .pjp</td>
        <td>    
            <ul>
                <li>정지 이미지의 손실 압축에 적합</li>
                <li>가장 많이 사용되는 이미지 포맷</li>
                <li>래스터(Rester) 이미지</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="background-color:lightblue; color:#333">PNG</th>
        <td>image/png</td>
        <td>.png</td>
        <td>    
            <ul>
                <li>이미지를 보다 정확하게 보여준다</li>
                <li>투명도 표현이 가능하다</li>
                <li>래스터(Rester) 이미지</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="background-color:lightblue; color:#333">GIF</th>
        <td>image/gif</td>
        <td>.gif</td>
        <td>
            <ul>
                <li>여러장의 이미지를 사용</li>
                <li>애니메이션 표현 가능</li>
                <li>컬러 표현 범위가 좁아, 비교적 이미지 품질이 떨어진다</li>
                <li>래스터(Rester) 이미지</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="background-color:lightblue; color:#333">WEBP</th>
        <td>image/webp</td>
        <td>.webp</td>
        <td>
            <ul>
                <li>JPEG, PNG, GIF 대체를 위해 구글이 만든 이미지 포맷</li>
                <li>우수한 품질,압축률을 자랑하지만 지원 브라우저가 제한적</li>
                <li>래스터(Rester) 이미지</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="background-color:lightblue; color:#333">SVG</th>
        <td>image/svg+xml</td>
        <td>.svg</td>
        <td>
            <ul>
                <li>다양한 크기로 정확하게 표현</li>
                <li>아이콘, 다이어그램 등에 사용</li>
                <li>벡터(Vector) 이미지</li>
            </ul>
        </td>
    </tr>
  </table>
  
- 이미지 화질보다 이미지의 크기가 로딩 속도에 중요하기때문에 압축률이 중요하다
- 웹 표준은 지원하는 이미지 형식을 따로 명시하고 있지 않다 
- 웹 브라우저마다 지원하는 이미지 형식에 대한 설명을 참고해 사용하자
- **[참고]** https://caniuse.com/?search=webp
- **[참고]** https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
- **[추천 사이트]** 지원 여부 확인하는 사이트 → https://caniuse.com/
    
<br>
      
4. **반응형(responsive) 이미지**
- `srcset`
    - 사용자 접속 환경/디바이스에 맞는 이미지를 제공할 때 사용 
    - 하나의 이미지에 여러 경로를 연결한다 
    ```html
    <img src="img/400img.png" <!-- 기본 이미지 -->
         srcset = "img/100img.png 100w,
                   img/250img.png 250w,
                   img/400img.png 400w"
         alt = "responsive_img">
    ```
  
    <img src="https://via.placeholder.com/400x400">
    <img src="https://via.placeholder.com/250x250">
    <img src="https://via.placeholder.com/100x100">
  
    > 연결한 이미지 중, 웹 브라우저의 너비에 맞는 이미지가 사용된다
    
    <br>
    - 너비서술자와 높이서술자 
    - 익스플로러에서는 지원하지 않는다
    - **[참고]** 테스트를 위한 이미지를 만들어주는 사이트 : https://placeholder.com/ 

<br>

- `sizes`
    ```html
    <img src="img/400img.png" <!-- 기본 이미지 -->
         srcset = "img/100img.png 100w,
                   img/250img.png 250w,
                   img/400img.png 400w"
         alt = "responsive_img"
         <!-- sizes -->
         sizes="(min-width:400px) 300px,
                (min-width:250px) 200px,
                (min-width:120px) 100px">
    ```
    - `viewport`에 따라서 아예 다른 이미지를 로딩하는 `srcset`
    - 반면, `sizes`는 특정 조건에 따라 사이즈를 조절한다 
    - `sizes="(min-width:400px) 300px"`<br> → 화면의 너비가 400px보다 넓은 경우 이미지 크기를 300px로 고정
    
































