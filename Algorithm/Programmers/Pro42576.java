// 21.12.01(수) : 완주하지 못한 선수

package com.algorithm.programmers;

import java.util.Arrays;

public class Pro42576 {	
	// solution
	public static String solution(String[] participant, String[] completion) {
        Arrays.sort(participant);
        Arrays.sort(completion);
            
        for(int i=0; i<completion.length; i++){
            if(!participant[i].equals(completion[i])){
			    System.out.println(participant[i]);		
                return participant[i];
            }
        }
        return participant[participant.length - 1];
    }
}
