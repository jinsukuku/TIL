package com.algorithm.programmers;

import java.util.Collections;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;


public class Pro42579 {

	public static void main(String[] args) {
		String [] genres = { "classic", "pop", "classic", "classic", "pop" };
		int [] plays = { 500, 600, 150, 800, 2500 };
		
		Integer[] result = solution(genres, plays);
		
		// 확인용 출력
		for(Integer i : result) {
			System.out.println(i);
		}
	}

	// 프로그래머스에서의 초기 설정 수정함 
	// 1. solution(..) 의 return type : int[] -> Integer[]
	// 2. answer의 데이터 타입 : int[] -> Integer[]
	
	static Integer[] solution(String[] genres, int[] plays) {
		Integer[] answer = new Integer[genres.length];

	    // 0. 장르별 고유번호 정리
	    // key = genres, value = index
		Map<String, List<Integer>> info = new HashMap<>();
		
		for(int i = 0; i < genres.length; i++) {
			List<Integer> temp = new ArrayList<>();
			if(info.containsKey(genres[i])) {
				temp = info.get(genres[i]);
				temp.add(i);
				info.put(genres[i], temp);
			}else {
				temp.add(i);
				info.put(genres[i], temp);
			}
		}
		
	    // 1. 인기 장르 찾기
		// 1-1. 장르별로 재생수 합산해 hashMap에 저장
		Map<String, Integer> popular = new HashMap<>();
		for(int i = 0; i < genres.length; i++) {
			if(popular.containsKey(genres[i])) {
				popular.put(genres[i], popular.get(genres[i]) + plays[i]);
			}else {
				popular.put(genres[i], plays[i]);				
			}			
		}
		
		// 1-2 ~ 1-3. 인기 장르 순 배열 얻기
		List<String> popular_sort = new ArrayList<>(popular.keySet());
		Collections.sort(popular_sort, (value1, value2) -> (popular.get(value2).compareTo(popular.get(value1)))); 
		
		// 2. 재생 순 정렬	
		int idx = 0;
		for(String genre : popular_sort) {
	        // 인기 장르 -> 재생 횟수 순으로 정렬
			Map<Integer, Integer> tempMap = new HashMap<>();
			for(Integer i : info.get(genre)) {
				tempMap.put(i, plays[i]);
			}
			List<Integer> tempList = new ArrayList<>(tempMap.keySet());
			Collections.sort(tempList, (value1, value2) -> (tempMap.get(value2).compareTo(tempMap.get(value1)))); 
			
			// 장르에 속한 곡 개수에 따라, 베스트 앨범에 추가
			if(tempList.size() == 1) {
				answer[idx++] = tempList.get(0);
			}else {
				answer[idx++] = tempList.get(0);
				answer[idx++] = tempList.get(1);				
			}
		}
		
		// answer의 길이가 geners.length이므로, 
		// 베스트 앨범 수록곡의 인덱스가 저장된 배열을 잘라 반환하기 위함
		return Arrays.copyOfRange(answer, 0, idx);
	}

}


















