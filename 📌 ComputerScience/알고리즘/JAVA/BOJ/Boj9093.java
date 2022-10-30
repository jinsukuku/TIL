// 21.12.02(목) : 단어 뒤집기

package com.algorithm.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj9093 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// instance 
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // for input
	    StringBuilder sb = new StringBuilder(); // for answer
		
		// repeat count
	    int n = Integer.valueOf(br.readLine());
	    
	    // input 
	    for (int i = 0; i < n; i++) {
		  String[] input = br.readLine().split(" ");
		  
		  // reverse
		  for (int j = 0; j < input.length; j++) {
		      sb.append(reverse(input[j])+" ");
		  }
		  sb.append("\n");
	    }
	    
	    // print
	    System.out.println(sb.toString());
	    
	    // close
	    br.close();
	}
	
	static String reverse(String str) {
	    StringBuilder sb = new StringBuilder(str);
		return sb.reverse().toString();
	}
}


