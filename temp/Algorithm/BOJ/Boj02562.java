package algorithm;

import java.util.Scanner;

public class Bj02562 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int max, idx;
		int []arr = new int[9];
		
		idx = -1;
		max = -1;
		
		for(int i=0; i<9; i++) {
			arr[i] = sc.nextInt();
			if(max<arr[i]) {
				max=arr[i];
				idx=i+1;
			}
		}		

		System.out.println(max);
		System.out.println(idx);
	}

}
