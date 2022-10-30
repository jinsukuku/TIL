// 21.12.02(목) : 전화번호 목록

package com.algorithm.programmers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 *  list.contains(s) : list가 s를 요소로 갖는 경우 true, 그렇지 않은 경우 false 반환
 *  new ArrayList<String>( Arrays.asList(arr)) : 일반 배열을 Collection으로  
 *  str.substring(start, end) : 문자열 slicing
 *  
 *  collectionAPI 메서드 시간 복잡도 : https://www.grepiu.com/post/9
 * 	collectionAPI 구조, 성능, 요약 : https://gem1n1.tistory.com/97
 * 
 *  가령 해시함수 내부 로직이 
 *  f(x) = x % 10 이고, 
 *  찾고자 하는 값이 119 이면 
 *  9 = 110 % 10 이므로, 9번지만 확인하면 된다
 *  그러므로 HashSet의 contains() 시간복잡도는 O(1)
 *  
 */


public class Pro42577 {

	public static void main(String[] args) {		
		String [] case1 = { "119", "97674223", "1195524421" };
		String [] case2 = { "123","456","789" };
		String [] case3 = { "12","123","1235","567","88" };
		
		System.out.println("Case1. " + solution(case1));
		System.out.println("Case2. " + solution(case2));
		System.out.println("Case3. " + solution(case3));
	}
	
	// solution
	static public boolean solution(String[] phone_book) {
        boolean answer = true;
        
        List<String> pb = new ArrayList<String>(Arrays.asList(phone_book));
        
        for(String num : pb) {
    		for(int i = 0; i < num.length(); i++) {
    			String temp = num.substring(0,i);
    			if(pb.contains(temp)) {
    				return false;
    			}
    		}
        }
        return answer;
    }

}
