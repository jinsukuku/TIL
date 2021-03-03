package algorithm;

import java.util.Scanner;

public class Bj2439 {

	public static void main(String[] args) {
		// º°Âï±â 2
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i=0; i<n; i++) {
			for(int j=0; j<n-(i+1); j++) {
				System.out.printf(" ");
			}
			for(int j=0; j<i+1; j++) {
				System.out.printf("*");
			}
			System.out.println();
		}
	}

}
