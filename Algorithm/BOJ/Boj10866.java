package com.algorithm.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;

public class Boj10866 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Deque <Integer> deq = new LinkedList<>();
		
		int count = Integer.parseInt(br.readLine());
		
		while(count-- > 0) {
			String command = br.readLine();
			
			if(command.contains("push_front")) {
				int x = Integer.parseInt(command.split(" ")[1]);
				deq.addFirst(x);
			}else if(command.contains("push_back")) {
				int x = Integer.parseInt(command.split(" ")[1]);
				deq.addLast(x);
			}else if(command.contains("pop_front")) {
				System.out.println(deq.isEmpty() ? -1 : deq.pollFirst());			
			}else if(command.contains("pop_back")) {
				System.out.println(deq.isEmpty() ? -1 : deq.pollLast());				
			}else if(command.contains("size")) {
				System.out.println(deq.size());
			}else if(command.contains("empty")) {
				System.out.println(deq.isEmpty() ? 1 : 0);
			}else if(command.contains("front")) {
				System.out.println(deq.isEmpty() ? -1 : deq.getFirst());
			}else if(command.contains("back")) {
				System.out.println(deq.isEmpty() ? -1 : deq.getLast());				
			}
		}
	}

}
