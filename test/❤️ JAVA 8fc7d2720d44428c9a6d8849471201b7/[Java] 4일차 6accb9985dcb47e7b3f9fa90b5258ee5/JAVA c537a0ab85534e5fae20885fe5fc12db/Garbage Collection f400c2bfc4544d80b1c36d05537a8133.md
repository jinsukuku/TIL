# Garbage Collection

최종 편집 일시: 2021년 10월 25일 오전 9:18

## ✏️  Garbage Collection

- 명시적으로 사용하지 않는 객체를 정리할 수 있는 C언어와 달리 Java는 Garbege Collection에 의해 자동 정리된다

[NAVER D2](https://d2.naver.com/helloworld/1329)

## ✏️  Garbage Collection 알아보기

```java
int[] arr = { 11, 22, 33 };
int[] arr2 = { 10, 20, 30 };

arr = arr2;

for(int i = 0; i < arr.length; i++){
	System.out.println(arr[i]);    // 10 20 30
	System.out.println(arr2[i]);   // 10 20 30
}
```

- `arr = arr2` : 대입 연산자를 사용하여 참조 대상을 변경할 수 있다
- 이 경우, `{11, 22, 33}` 은 참조가 끊어져 접근할 수 없으므로 **쓰레기 객체**라고 말한다
- 이러한 **쓰레기 객체**는 사용할 수 없으므로 정리해주어야 한다
- Java에는 이를 명시적으로 제거하지 않아도, 자동 메모리 관리 시스템인 `Garbage Collection` 을 통해 자동 정리된다
- `Garbage Collection` 가 언제 쓰레기 객체를 정리하는지 우리는 알 수 없고, 속도는 느리다
- `Garbage Collection` 의 `thread` 상에서의 우선 순위는 가장 낮으나, 쓰레기 객체가 쌓임에 있어 우선순위가 올라간다
- 그러므로 쓰레기객체의 정리 시점과 느린 속도는 큰 문제가 되지 않는다