package algorithm;

import java.util.Scanner;

public class Bj08958 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int []score = new int[n];
		String []str = new String[n];
		sc.nextLine(); //버퍼지우기
		
		for(int i=0; i<n; i++) {
			str[i] = sc.nextLine();
			for(int j=0; j<str[i].length()-1; j++) {
				if(str[i].charAt(j)=='O') {
					score[i]++;
					if(str[i].charAt(j+1)=='O') {
						score[i]++;
					}
				}
			}
		}
		
		
		System.out.println(score[0]);
	}

}
