package com.algorithm.programmers;

import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;

public class Pro42587 {

	public static void main(String[] args) {
		int [] prioritiesA = { 2, 1, 3, 2 };
		int locationA = 2;
		int [] prioritiesB = { 1, 1, 9, 1, 1, 1 };
		int locationB = 0;
		
		System.out.println("CaseA : " + solution(prioritiesA, locationA) + "\n");
		System.out.println("CaseB : " + solution(prioritiesB, locationB));
		
	}
	
	static int solution(int[] priorities, int location) {
        int answer = 0; 	       
        
        Queue<Integer> result = new LinkedList<>();
        Queue<Integer> prioritiesQue = new LinkedList<>();
        Queue<Integer> index = new LinkedList<>();
        for(int i = 0; i < priorities.length;i++) {
        	index.add(i);
        	prioritiesQue.add(priorities[i]);
        }
        
        while(prioritiesQue.size() != 0) {
        	if(prioritiesQue.peek() == Collections.max(prioritiesQue)) {
        		result.add(index.remove());
        		prioritiesQue.remove();
        	}else {
        		index.add(index.remove());
        		prioritiesQue.add(prioritiesQue.remove());        		
        	}        	
        }
        
        
        System.out.println(result);
        
        while(result.size() != 0) {
        	if(result.remove() == location) {
        		break;
        	}
        	answer++;
        }
        
        return answer+1;
    }

}
