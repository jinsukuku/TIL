// 21.12.03(금) : 괄호

package com.algorithm.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj9012 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// instance 
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuffer sb = new StringBuffer();
		
		// repeat count
	    int n = Integer.valueOf(br.readLine());
	    
	    // input
	    for(int i = 0; i < n; i++) {
	    	String str = br.readLine();
	    	sb.append(solution(str)+"\n");
	    }
	    
	    // print
	    System.out.println(sb.toString());
	    
	    // close
	    br.close();
	}

	// solution
	public static String solution(String str) {
		String no = "NO";
		String yes = "YES";
		
		int left = 0;
		
		for(int i = 0; i < str.length(); i++) {
			char now = str.charAt(i);
			if(now == '(') {
				left++;
			}else if(now == ')' && left <= 0) {
				return no;
			}else if(now == ')' && left > 0) {
				left--;
			}
		}
		
		if(left == 0) {
			return yes;
		}else {
			return no;
		}
	}
}











