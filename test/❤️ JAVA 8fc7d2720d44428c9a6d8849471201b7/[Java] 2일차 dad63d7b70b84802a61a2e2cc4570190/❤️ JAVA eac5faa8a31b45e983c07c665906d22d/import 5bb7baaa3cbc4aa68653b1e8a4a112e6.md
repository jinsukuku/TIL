# import

강사님: 하승현 강사님
최종 편집 일시: 2021년 10월 21일 오후 2:16
키워드: import, 메서드(worker method)

## ✏️  import

```java
~~import com.edu.oop2.*;~~    // 사용자 정의 패키지의 경우는 *을 사용하지 않는다 
import java.util.*;       // 압축되어있는 rt.jar의 경우는 *을 사용해 한번에 불러올 수 있다
```

- 외부의 클래스를 불러올 때에는 반드시 import 를 사용한다
- 불려올 클래스의 접근제어자는 외부에서 접근할 수 있도록 public을 사용한다
- asterisk(*)는 압축되어있는 jar의 형태인 경우만 사용해야한다
- java.lang 패키지에 포함된 클래스를 제외한 경우 내장 라이브러리여도 반드시 import해주어야한다
- java.lang 패키지는 import없이 사용할 수 있는 default이기 때문