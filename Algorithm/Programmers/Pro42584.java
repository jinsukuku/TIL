package com.algorithm.programmers;

public class Pro42584 {

	public static void main(String[] args) {
		int [] prices = {1, 2, 3, 2, 3};
		int [] answer = solution(prices);
        
        for(int ans : answer) {
        	System.out.print(ans+" ");
        }
	}
	

    static int[] solution(int[] prices) {
        int [] answer = new int[prices.length];
        
        int seconds = 0;
        int idx = 0;
        for(int i = 0 ; i < prices.length; i++){
            seconds = 0;
            for(int j = i+1; j < prices.length; j++){
                seconds += 1;
                if(prices[i] > prices[j]){
                    break;
                }
            }
            answer[idx++] = seconds;
        }        
        return answer;
    }

}
