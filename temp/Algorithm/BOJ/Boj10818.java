package algorithm;

import java.util.Scanner;

public class Bj10818 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int min, max;
		int n = sc.nextInt();
		int []arr = new int[n];
		
		min = 1000000;
		max = -1000000;
		
		for(int i=0; i<n; i++) {
			arr[i] = sc.nextInt();
			if(min>arr[i]) min=arr[i];
			if(max<arr[i]) max=arr[i];
		}		
		
		System.out.println(min+" "+max);
	}

}
