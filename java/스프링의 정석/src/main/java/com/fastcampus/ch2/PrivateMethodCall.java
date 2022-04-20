package com.fastcampus.ch2;

import java.lang.reflect.Method;

public class PrivateMethodCall {

	public static void main(String[] args) throws Exception {
		// Hello 클래스의 Class객체의 정보를 얻어온다
		Class helloClass = Class.forName("com.fastcampus.ch2.Hello"); 
		
		// Class객체가 가진 정보로 객체 생성 -> Object를 반환하기때문에, Hello 로 형변환 필요 
		Hello hello = (Hello)helloClass.newInstance();
		
		// Class객체가 가진 정보로 method를 참조하기
		Method main = helloClass.getDeclaredMethod("main");
		
		// private한 method에 접근 가능하도록 설정 변경 (default = false)
		main.setAccessible(true);
		
		// method 호출하기: hello.main(arg) == main.invoke(hello, arg); 
		main.invoke(hello);
	}

}
