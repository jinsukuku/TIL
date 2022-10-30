package com.algorithm.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.EmptyStackException;
import java.util.Stack;


public class Boj1406 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Stack<Character> left = new Stack<>();
        Stack<Character> right = new Stack<>();

        char[] str = br.readLine().toCharArray();
		for(char s : str) {
			left.push(s);
		}

        int n = Integer.parseInt(br.readLine());

        for(int i = 0; i < n ; i++){
            String command = br.readLine();
            try {
				if(command.contains("L")) {
					right.push(left.pop());
				}else if(command.contains("D")) {
					left.push(right.pop());
				}else if(command.contains("B")) {
					left.pop();
				}else if(command.contains("P")) {
					left.push(command.charAt(command.length()-1));
				}
            } catch (EmptyStackException e) {
            }
        }

		StringBuffer sb = new StringBuffer();
		while(!left.isEmpty()) {
            right.push(left.pop());
        }
        while(!right.isEmpty()) {
            sb.append(right.pop());
        }

        System.out.println(sb.toString());
        br.close();
    }
}