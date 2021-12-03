package algorithm;

import java.util.Scanner;

public class Bj02577 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int []arr = new int[3];
		int []num = new int[10];


		for(int i=0; i<3; i++) {
			arr[i] = sc.nextInt();
		}		
		
		int result = arr[0] * arr[1] * arr[2];
		int temp;

		while(result!=0) {
			temp = result%10;
			num[temp]++;
			result/=10;
		}
		
		for(int i : num) {
			System.out.println(i);
		}
	}

}
