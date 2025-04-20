package com.algorithm.programmers;

import java.util.Arrays;

public class Pro42586 {

	public static void main(String[] args) {
		int[][] case1 = {{93, 30, 55}, {1, 30, 5}};
		int[][] case2 = {{95, 90, 99, 99, 80, 99}, {1, 1, 1, 1, 1, 1}};
		
		int[] answer = solution(case2[0], case2[1]);
		for(int a : answer) {
			System.out.println(a);
		}
	}

    static int[] solution(int[] progresses, int[] speeds) {
        int[] answer = new int[progresses.length];
        Arrays.fill(answer, -1);
        
        int[] days = new int[progresses.length];
        
        // 작업 소요 일자 계산
        for(int i = 0; i < progresses.length; i++) {
        	days[i] = (int)(Math.ceil((100-progresses[i])/(double)speeds[i]));
        }
        
        // 배포 일자 확인
        int work = days[0];
        int count = 1;
        int idx = 0;
        for(int i = 1; i < days.length; i++) {
        	if(work >= days[i]) {
        		count++;
        	}
        	else {
        		answer[idx++] = count;
        		work = days[i];
        		count = 1;
        	}
        }
        answer[idx] = count;
        return Arrays.copyOfRange(answer, 0, idx+1);
    }
	

}
