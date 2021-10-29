# Constructor / 명시적생성자 VS setter

강사님: 하승현 강사님
최종 편집 일시: 2021년 10월 25일 오전 9:00
키워드: Constructor, 명시적생성자, 명시적생성자 VS setter, 필드초기화

## ✏️  생성자

```java
public class PersonTest {

	public static void main(String[] args) {
		// 객체가 3번 생성됨 = 생성자가 3번 사용됨
		Person p1 = new Person();
		Person p2 = new Person();
		Person p3 = new Person();
	}
}
```

- 생성자는 객체가 생성될 **때마다** 호출된다
- 생성자가 calling 된다는 건 어딘가에 worker가 존재한다는 의미이다

```java
**public** class Person {
	String name;
	int age;

	// Default constructor
	**public** Person() {}

	// 명시적 constructor
	**public** Person(String name, int age) {
		this.name = name;
		this.age = age;
	}
}
```

- 생성자의 종류
    1. 기본 생성자
    2. 명시적 생성자 : 인자 값이 하나 이상이며, 객체 생성과 동시에 필드 초기화를 한다
- 모든 클래스는 1개 이상의 생성자를 가진다
- 기본 생성자는 개발자가 생성자를 작성하지 않은 경우 클래스에 기본적으로 만들어진다
- 기본 생성자(Default Constructor)는 인자를 가지지 않고, {구현부} 에서 아무런 일도 하지 않는 생성자를 말한다
    - 명시적 생성자를 작성한 경우, 컴파일러가 기본 생성자를 만드는 작업을 하지 않는다
    - 기본 생성자도 함께 사용하고 싶다면 기본 생성자의 형태로 추가 작성해야한다
- **명시적 생성자를 추가하는 경우 기본 생성자를 같이 사용하는 것을 권장한다**
- 생성자를 작성할 때, 접근 제어자는 클래스의 접근 제어자를 따른다

## ✏️  명시적 생성자 VS setter

- 필드 초기화를 위해 사용된다는 점은 동일하다
- **생성과 소멸을 함께 하는 멤버의 경우 명시적 생성자를 사용해 초기화한다. 이 경우 라이프사이클을 함께 한다고 본다**
- 예를 들어 자동차에 있어 엔진은 필수적인 요소이므로 명시적 생성자를 사용하고, 네비게이션의 경우 setter 를 사용한다