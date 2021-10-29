# Has a Relation

강사님: 하승현 강사님
최종 편집 일시: 2021년 10월 25일 오전 9:10

## ✏️  Has a Relation

- Object간의 관계는 수직 관계(is a relation, 상속)와 수평 관계(has a relation) 두가지만이 존재한다
- 하나의 프로젝트에는 다양한 Object가 존재하며, Object를 추출하는 방법이 굉장히 중요하다
- hasing 관계가 되기 위해서는 규칙이 존재한다
    1. Field에 hasing할 클래스를 추가해야한다
    2. hasing할 클래스의 필드를 주입한다 = 명시적생성자, setter를 사용
    3. 라이프 사이클을 함께 하는 여부에 따라서 필드 초기화의 방법을 다르게 한다
- hasing 관계를 표현하는 방법은 상황에 따라 다른데, 수업 중에는 → 를 사용할 예정이다. 아래 예시를 참고하자
    - Programmer가 NoteBook을 갖는 관계의 경우 (Has a relation)
    - Programmer ← NoteBook
    - 특정 DB에서는 Programmer ◇→ NoteBook 으로 표현하기도 한다

## ✏️  Has a Relation : 예제

- 자바 프로젝트 java05_HasArelation 을 참고해 정리한다

```java
// 1. 필드 레벨에 추가하고자 하는 클래스 선언
public NoteBook noteBook;

...

// 2. setter(), getter() 추가 
public void setNoteBook(NoteBook noteBook) {
	this.noteBook = noteBook;
}
public NoteBook getNoteBook() {
	return noteBook;
}
```

- Programmer가 NoteBook을 가지는 관계를 설정하기위한 단계는 아래와 같다
    1. 필드 레벨에 추가하고자 하는 클래스를 선언
    2. 추가한 필드를 주입하는 통로를 하나 생성 / 생성자 혹은 setter()
- 일반적으로 생각했을 때, Programmer와 NoteBook은 라이프사이클을 함께하지 않는다
- 그렇기때문에 setter를 사용해 필드 값을 초기화해주었다

```java
// 실행 클래스 

package com.edu.cons.test;

import com.edu.cons.NoteBook;
import com.edu.cons.Programmer;

public class ProgrammerTest {

	public static void main(String[] args) {
		// 1. Programmer 객체 생성, name = james
		Programmer james = new Programmer("james", "seoul", "Java", 300);
		
		// 2. james가 삼성 노트북 하나를 구매  has a relation의 완성 
		**james.setNoteBook(new NoteBook("Samsung", 200, 1234));**
		
		// 3. james가 구매한 노트북의 정보를 출력
		**james.getNoteBook().printInfo();**
		
		// 4. james의 skill도 함께 출력
		System.out.println(james.getSkill());
		
	}
}
```

- 메인 메서드를 가지는 실행클래스에서 사용할 때에는 위와 같다

**james.setNoteBook(new NoteBook("Samsung", 200, 1234));**

- 객체를 생성해 변수에 저장할 필요 없이, setter의 인자로 바로 넣어 사용할 수 있다

**james.getNoteBook().printInfo();
~~james.noteBook.printInfo();~~**

- 객체에 포함된 필드객체에 직접 접근해서 메서드를 사용할 수 도 있다
- 이렇게 직접 접근하게 되면, 필드를 보호할 수 없으므로  getter메서드를 정의하여 사용하도록 한다 (캡슐화)