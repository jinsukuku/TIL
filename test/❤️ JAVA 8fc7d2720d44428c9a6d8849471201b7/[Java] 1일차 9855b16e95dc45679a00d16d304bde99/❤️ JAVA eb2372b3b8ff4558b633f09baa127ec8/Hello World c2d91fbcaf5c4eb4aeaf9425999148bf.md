# Hello World

최종 편집 일시: 2021년 10월 26일 오전 12:11
키워드: Java

## ✏️  시작 단계

```java
public class HelloTest{
	public static void main(String[] args){
		System.out.println("Hello World");
	} 
}
```

- Java는 camelCase를 사용한다
- 우측 상단의 바둑판(Open Perspective)를 누르면 Java EE(J2EE)가 default로 되어 있으므로, Java로 변경해준다
- 모든 것은 프로젝트 단위로 진행할 예정이므로, Java Project를 새롭게 생성한다
- Java Project 를 생성할 때에도 JRE의 버전을 선택할 수 있는데, 1.8버전을 사용한다
- Java Project 에서 새로운 Class를 만들 때, public static void main(String[] args) 선택할 것
- 글자 크기 변경 : Preferences - General - Appearance - Colors and Fonts ( Basic - TextFont - Edit )

## ✏️  System.out.println()

```java
// package 선언은 소스 코드의 가장 윗부분에 한다
package com.edu.pro;

// Class 이름은 반드시 대문자로 시작한다
public class Greeting {

	// main method가 있는 클래스는 실행 대상이 된다
	public static void main(String[] args) {
		**System.out.println("hello");**
	}
}
```

- `System.out.println()` 을 사용해 console 창에 원하는 문자열을 출력할 수 있다
- 단축어인 `sysout` 을 사용하면 빠르게 입력할 수 있다
    - window에서는 ctrl + space 단축키를 사용