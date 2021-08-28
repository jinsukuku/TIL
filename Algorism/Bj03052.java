package algorithm;

import java.util.Scanner;

public class Bj03052 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num[] = new int[10];
		int arr[] = new int[42];
		int temp, cnt=0;
		
		for(int i=0; i<10; i++) {
			num[i] = sc.nextInt();
			temp = num[i]%42;
			arr[temp]++;
		}
		
		for(int i:arr) {
			if(i!=0) cnt++;
		}
		
		System.out.println(cnt);
		
	}

}
