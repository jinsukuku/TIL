# 제어문(if문 / switch문)

강사님: 하승현 강사님
최종 편집 일시: 2021년 10월 21일 오후 4:04
키워드: if, switch, 제어문, 조건문

## ✏️  제어문(조건문)

- 특정 상황에서만 코드가 실행되도록 제어하기위해 사용하는 문장
- 조건이 참일 때만 해당 코드 블록이 작동하도록 한다

## ✏️  제어문 : if문

```java
package com.edu.condition.test;
import java.util.Scanner;

public class GradeIfTest1 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
	
		// int grade = 88;
		System.out.println("점수를 입력하세요");
		int grade = sc.nextInt();
		
		if(grade>=90 && grade<=100) {
			System.out.println("A");
		}else if(grade>=80 && grade<90) {
			System.out.println("B");
		}else if(grade>=70 && grade<80) {
			System.out.println("C");
		}else {
			System.out.println("Try Again");
		}
	}
}
```

- `if` `else if` `else` 예약어를 사용해 구성하며, 조건식에 맞는 경우 block 내부의 명령문을 실행한다

## ✏️  제어문 : switch문

- `switch()` 의 변수는 정수형, 문자형, String 은 가능하나 실수형은 사용할 수 없다
- 조건의 결과가 `Boolean`이었던 if문과 달리, 값이 일치하는 `case문`을 수행한다
- `case` : 변수의 값과 정확히 일치하는 지를 확인한다
- `switch`, `case`, `break`, `default` 예약어를 사용해 구성한다
- 일반적으로 하나의 `case`만이 실행되도록 `case문`은 항상 `break`로 마무리한다
- `default문`은 if문의 else와 같은 역할을 수행한다

```java
switch(day) {
	case "mon" :
		System.out.println("MonDay");
	case "tue" :
		System.out.println("TuesDay");
		break;
	default :
		System.out.println("Bye");
}
```

- `day = "mon"` 인 경우, `case "mon"` 의 실행문에 break가 없으므로 MonDay와 TuesDay를 모두 출력한다
- 즉, break문을 별도로 작성하지 않으면 해당하는 case문을 찾아도 switch문이 종료될 때까지 case문을 변수와 비교한다
- 모든 case문에 해당하지 않는 값을 갖는 변수의 경우 default문의 명령문이 실행된다
- default문은 switch문의 가장 마지막 명령문이므로 break문을 작성할 필요가 없다

```java
switch(day) {
	case "sat" :
	case "sun" :
		System.out.println("HoliDay");
		break;
	default :
		System.out.println("Bye");
}
```

- `case문` 의 명령문이 별도로 없는 경우 그 다음 `case문` 의 명령문을 함께 사용한다
- 즉, `day = "sat"` 이거나 `day = "sun"` 이라면 HoliDay가 출력된다

```java
package com.edu.condition.test;

public class SwitchNoBreakTest3 {

	public static void main(String[] args) {
		// random() : 0~1 사이의 실수를 임의로 골라 반환한다 
		double time = Math.random();		
		System.out.println(time);			
		
		// random() 의 반환값에 추가 연산을 하여 난수의 범위를 조절할 수 있다
		int now_time = (int)(Math.random()*4) + 8;
		System.out.println(now_time);
		
		//switch
		switch(now_time) {
			case 8 : 
				System.out.println("출근 준비");
			case 9 : 
				System.out.println("아침 회의");
			case 10 : 
				System.out.println("오전 업무");
			case 11 : 
				System.out.println("외근");
		}
	}
}
```

- `case문` 의 실행문이 연속적인 성질을 갖는 경우 `break문` 을 사용하지 않는다
- 즉,  `break문` 은 필수가 아니며 상황에 따라 유동적으로 사용한다