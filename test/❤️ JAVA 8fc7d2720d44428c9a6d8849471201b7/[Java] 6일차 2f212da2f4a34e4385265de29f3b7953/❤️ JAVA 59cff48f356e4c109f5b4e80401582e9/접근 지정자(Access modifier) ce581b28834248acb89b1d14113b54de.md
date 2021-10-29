# 접근 지정자(Access modifier)

최종 편집 일시: 2021년 10월 26일 오전 10:30
키워드: private < default < protected < public, 접근 지정자

## ✏️  접근 지정자

- `private`
    - 같은 클래스 내부에서만 접근 가능하다
- `default`
    - 접근 지정자 키워드는 아니며,  그저 접근 지정자를 사용하지 않은 경우를 의미한다
    - 같은 패키지 안에서만 접근을 허용한다
- `protected`
    - 같은 패키지 안에서만 접근을 허용한다
    - 상속 관계의 클래스와는 `public` 과 동일한 접근 범위를 갖는다 (default와의 차이점)
- `public`
    - 어디서든 접근을 허용한다
    

## ✏️  접근 지정자 허용 범위 비교

- `private` < `default` < `protected` < `public`

## ✏️  접근 지정자 사용해보기

```java
// 부모 클래스
package access.parent;

public class Parent {
	public String publictest = "publicTest";
	protected String protectedTest = "protectedTest";
	String defaultTest = "defaulttest";
	private String privateTest = "privateTest";
	
	public void access() {
		System.out.println("Access Modifier Test");
	}
}
```

```java
// 자식 클래스
package access.child;

import access.parent.Parent;

public class Child extends Parent{
	@Override
	public void access() {
		System.out.println(publicTest);
		System.out.println(protectedTest);
		~~System.out.println(defaultTest);~~      // Error! : The field OOOO is not visible
		~~System.out.println(privateTest);~~      // Error! : The field OOOO is not visible
	}
}
```

- `public` 은 언제 어디서든 접근 가능하므로 **접근 가능하다**
- **상속 관계**이므로, `protected` 접근 지정자를 사용한 필드에는 **접근 가능하다**
- 동일한 패키지의 클래스가 아니므로, `default` 에는 **접근할 수 없다**
- `private` 는 동일 클래스 내에서만 접근 가능하므로, **접근할 수 없다**