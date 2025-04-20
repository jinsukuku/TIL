package com.algorithm.today;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Boj1158 {

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		Queue<Integer> arr = new LinkedList<>();
		
		int n = sc.nextInt();
		int k = sc.nextInt();
		
		for(int i = 1; i < n+1; i++) {
			arr.add(i);
		}
		
		StringBuilder sb = new StringBuilder();
		sb.append('<');
		
		while(arr.size() > 1) {
			for(int i = 0; i < k - 1; i++) {
				arr.offer(arr.poll());
			}			
			sb.append(arr.poll()).append(", ");
		}
		sb.append(arr.poll()).append('>');
		System.out.println(sb);
	}
}
