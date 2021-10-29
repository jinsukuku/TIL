# [상속] super()

최종 편집 일시: 2021년 10월 26일 오후 1:08
키워드: OverRiding, super()

## ✏️  상속 키워드 super()

- 상위 클래스를 가리키는 `super` 키워드를 통해 부모 클래스의 생성자나 메서드에 접근할 수 있다
- 상속 관계를 맺은 부모 클래스는 반드시 기본 생성자를 가져야한다 ( [부모 클래스에 기본 생성자가 필수인 이유](%5B%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A9%E1%86%A8%5D%20%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A1%20OverRiding%20%E1%84%87%E1%85%AE%E1%84%86%E1%85%A9%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%84%89%E1%85%B3%E1%84%8B%E1%85%A6%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%20a3110a4dfdcb40409fba69a7dedfc3c5.md) )

```java
// 부모 클래스 생성자
// public Employee() {}
// public Employee(String name, MyDate birthDate, double salary) {}

public Manager(String name, MyDate birthDate, double salary, String dept) {
		// 상위 클래스의 기본 생성자를 호출
		super();  **// new Employee() 를 의미한다** 
		this.dept = dept;
}
```

- 부모 클래스의 기본 생성자를 OverRiding 할 때에는 인자를 작성하지 않는다
- 먼저 부모 클래스의 **기본 생성자를 호출**했으므로 부모 클래스의 멤버가 먼저 메모리에 올라가고 묵시적 초기화가 진행된다
- 부모 클래스의 기본 생성자를 호출했으므로 ****부모 클래스의 **필드의 명시적 초기화는 진행되지 않았다**
- [참고] **기본 생성자를 사용하는 경우는 `super()` 를 생략할 수 있다**

```java
// 부모 클래스 생성자
// public Employee() {}
// public Employee(String name, MyDate birthDate, double salary) {}

public Manager(String name, MyDate birthDate, double salary, String dept) {
		// 상위 클래스의 기본 생성자를 호출
		super(name, birthDate, salary);  **// new Employee(name, birthDate, salary) 를 의미한다** 
		this.dept = dept;
}
```

- 부모 클래스의 명시적 생성자를 OverRiding한 경우에는, 명시적 생성자에 넣을 인자 값을 함께 작성한다
- 먼저 부모 클래스의 **명시적 생성자를 호출**했으므로 부모 클래스의 멤버가 먼저 메모리에 올라간다
- 부모 클래스의 명시적 생성자를 호출했으므로 부모 클래스의 **필드 초기화가 진행된다**