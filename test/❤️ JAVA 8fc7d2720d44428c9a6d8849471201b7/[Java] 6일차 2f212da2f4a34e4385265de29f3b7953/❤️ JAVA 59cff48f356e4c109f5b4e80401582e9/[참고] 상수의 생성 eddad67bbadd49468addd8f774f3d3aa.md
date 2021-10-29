# [참고] 상수의 생성

최종 편집 일시: 2021년 10월 26일 오후 3:38
키워드: OverRiding, Overloading

## ✏️  기본값에 해당하는 상수값을 지정

```java
public **static final** double **BASIC_SALALY** = 100.0;
```

- `static` , `final` 키워드를 사용한다
- 상수명을 대문자로 작성한다
- 상수명에 카멜케이스가 아닌 `_` 를 사용한다

## ✏️  생성자 앞의 this()

```java
public Employee(String name, MyDate birthDate) {
		**this(name, birthDate, BASIC_SALARY);**
}

// this(name, birthDate, BASIC_SALARY)호출로 인해 아래의 생성자가 working한다
public Employee(String name, MyDate birthDate, double salary) {
	this.name = name;
	this.birthDate = birthDate;
	this.salary = salary;
}
```

- 한 클래스 내에서 또 다른 생성자를 호출할 때 사용한다