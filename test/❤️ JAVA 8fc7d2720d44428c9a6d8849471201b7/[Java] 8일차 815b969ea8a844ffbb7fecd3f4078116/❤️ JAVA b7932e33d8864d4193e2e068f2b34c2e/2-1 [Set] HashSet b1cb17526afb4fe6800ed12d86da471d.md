# 2-1. [Set] HashSet

최종 편집 일시: 2021년 10월 29일 오후 12:43

## ✏️  [Set] HashSet

![스크린샷 2021-10-29 오전 11.57.00.png](2-1%20%5BSet%5D%20HashSet%20b1cb17526afb4fe6800ed12d86da471d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-29_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.57.00.png)

- 순서가 없으므로, 내부적으로 index 관리가 되지 않는다
- 만약 중복값을 추가하더라도, 내부적으로 저장되지 않으므로 주의해야한다
- **[API문서 → java.util → Interface → Set](https://docs.oracle.com/javase/8/docs/api/)** 에서 자세한 내용을 확인할 수 있다
- List의 메서드와 동일한 메서드를 발견할 수 있는데, Collection 인터페이스의 계보를 잇는 구현 클래스이기때문이다
- 주요 메서드
    - 객체 추가 : `add()`
    - 모든 객체 삭제 : `clear()`
    - 특정 객체 삭제 : `remove()`
    - 특정 객체 포함 여부 확인 : `contains()` → return boolean
    - 비어있는지 확인 : `isEmpty()`
    - 저장된 객체 개수 확인 : `size()` → return int
    - 저장된 객체 출력 : `toString()` → Collection 인터페이스에 이미 오버라이딩 되어있기 때문

## ✏️  [Set] HashSet : `add()` `size()` `toString()`

```java
package com.edu.collection.test;

import java.util.HashSet;

public class HashSetTest2 {
	public static void main(String[] args) {	
		// <E> : Set안에 들어있는 객체 타입을 미리 지정할 수 있다
		// Set<String> set = new HashSet<String>(); 
		HashSet<String> set = new HashSet<String>();

		set.add("짱구");
		set.add("유리");
		set.add("유리");
		set.add("철수");
		set.add("맹구");

		System.out.println(set.size()); 		  // 4
		System.out.println(set.toString()); 	// [철수, 짱구, 유리, 맹구]
		System.out.println(set);              // [철수, 짱구, 유리, 맹구]
	}
}
```

- HashSet 객체를 생성할 때, **부모 인터페이스인 Set타입으로 선언할 수 있다**
- Set은 중복값을 허용하지 않으므로 같은 값을 여러번 추가하는 경우 주의해야한다
- 입력된 순서로 출력되지 않으므로, 순서가 없는 Collection 구현 클래스임을 확인할수 있었다
- Collection API 에서는 toString()이 데이터를 리턴하도록 자체적으로 오버라이딩 되어있다

## ✏️  [Set] HashSet : `contains()` , `remove()`

```java
System.out.println(set.contains("맹구"));  // true
set.remove("맹구");
System.out.println(set.contains("맹구"));  // fakse
```

## ✏️  [Set] HashSet : `clear()` , `isEmpty()`

```java
System.out.println(set.isEmpty());  // false
set.clear();
System.out.println(set.isEmpty());  // true
System.out.println(set);            // []
```