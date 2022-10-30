// 21.12.03(금) : 위장

package com.algorithm.programmers;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Pro42578 {

	public static void main(String[] args) {
		// case 
		String[][] case1 = {{"yellow_hat", "headgear"}, {"blue_sunglasses", "eyewear"}, {"green_turban", "headgear"}};
		String[][] case2 = {{"crow_mask", "face"}, {"blue_sunglasses", "face"}, {"smoky_makeup", "face"}};
		
		System.out.println("Case1: "+solution(case1));;
		System.out.println("Case2: "+solution(case2));;
	}
	
    static public int solution(String[][] clothes) {
        int answer = 1;
        
        // 뒤에는 생략해도 된ㄷㅏ고 했었나요..?
        Map <String, Integer> map = new HashMap<String, Integer>();
        
        // map에 저장
        for(int i = 0; i < clothes.length; i++) {
        	String key = clothes[i][1];
        	if(map.keySet().contains(key)) {
        		map.put(key, map.get(key) + 1);
        	}else {
        		map.put(key, 1);
        	}
        }
        
        // 경우의 수 구하기
        for(int n : map.values()) {
        	answer *= (n+1);
        }
        
        return answer-1;
    }
}
	