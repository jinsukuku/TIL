# 3. 이기종 집합 (Heterogeneous Collection)

최종 편집 일시: 2021년 10월 29일 오전 1:42
키워드: Heterogeneous Collection, Homogeneous Collection, 이기종, 이기종집합

## ✏️  Heterogeouse Collection

- 서로 다른 타입을 가지는 한 단계 상위 클래스로 묶인 이기종 간의 집합체를 의미한다
- 반대의 개념으로는 Homogeneous Collection이 있다
- 예제가 될 상속 관계 구조
    
    ![스크린샷 2021-10-26 오후 12.09.49.png](../../%5BJava%5D%206%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%202f212da2f4a34e4385265de29f3b7953/%E2%9D%A4%EF%B8%8F%20JAVA%2059cff48f356e4c109f5b4e80401582e9/%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC(Polymorphism)%208edd467f80bd46f79d9794587efdde97/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-26_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.09.49.png)
    

![스크린샷 2021-10-29 오전 1.20.03.png](2%20%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC(Polymorphism)%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2%209d8240eb67784ccd996a8cdd853009b7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-29_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.20.03.png)

```java
Employee[] emps = {
	new Secretary("s1", new MyDate(1980, 1, 2),  100, "Tom"),
	new Secretary("s2", new MyDate(1982, 11, 4),  100, "Tom"),
	new Engineer("e1", new MyDate(1990, 2, 3), 400, "AI", 100),
	new Manager("m1", new MyDate(1992, 3, 2), 500, "IT"),
	new Manager("m2", new MyDate(1992, 3, 2), 500, "IT"),
};
```

- 하나의 부모 클래스 타입으로 이기종 간의 자식 클래스를 단일하게 관리할 수 있다
- 결국 부모 클래스 타입을 상속하여 부모 클래스로 묶었다는 점에서 배열의 same data type 전제가 무너졌다고 볼 수 있다
- 혹은 하나의 부모 클래스를 상속하였다는 점에 집중하여 모두 결국 같은 클래스 타입이라고 생각하는 관점도 틀리지 않다
- 관점에 따라 다르다. 이 점에 대해서는 집중할 필요는 없고 넘어가도 좋다

```java
for(Employee e : emps) { System.out.println(e); }
```

- 자식은 부모 클래스 타입으로 묶여 있으므로, 위와 같은 반복문 사용도 가능하다