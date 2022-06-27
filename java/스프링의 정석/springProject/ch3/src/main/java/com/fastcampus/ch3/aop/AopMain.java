package com.fastcampus.ch3.aop;
import java.lang.reflect.Method;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AopMain {
	public static void main(String[] args) throws Exception{
		MyAdvice myAdvice = new MyAdvice();
		// MyClass객체를 동적으로 생성 
		Class myClass =Class.forName("com.fastcampus.ch3.aop.MyClass"); 
		Object obj = myClass.newInstance();
		
		for(Method m:myClass.getDeclaredMethods()) {
			myAdvice.invoke(m, obj, null);
		}

	}
}

class MyAdvice{
	Pattern p = Pattern.compile("a.*"); // 정규식 패턴 
	boolean matches(Method m) { // 패턴을 확인하는 메서드 
		Matcher matcher = p.matcher(m.getName());
		return matcher.matches();
	}
    void invoke(Method m, Object obj, Object... args) throws Exception{
    	if(matches(m)) // 패턴에 부합하는 메서드에서만 출력하도록 분기점 
    		System.out.println("BEFORE"); // 중복코드
        m.invoke(obj,args); // ReflectionAPI로 메서드 호출
    	if(matches(m)) // 패턴에 부합하는 메서드에서만 출력하도록 분기점 
	        System.out.println("AFTER\n========"); // 중복코드
    }
}
class MyClass{
//	@Transactional
    void aaa() {System.out.println("aaa() is called");}
    void aaa2() {System.out.println("aaa2() is called");}
    void bbb() {System.out.println("bbb() is called");}
}