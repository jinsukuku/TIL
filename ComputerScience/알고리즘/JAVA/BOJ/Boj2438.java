package algorithm;

import java.util.Scanner;

public class Bj2438 {

	public static void main(String[] args) {
		// ����� 1
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i=0; i<n; i++) {
			for(int j=0; j<i+1; j++) {
				System.out.printf("*");
			}System.out.println();
		}
	}

}
