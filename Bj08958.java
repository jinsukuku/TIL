package algorithm;

import java.util.Scanner;

public class Bj08958 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int []score = new int[n];
		String []str = new String[n];
		
		sc.nextLine(); 	//버퍼지우기
		int cnt=0;		//연속 횟수 확인용
		int temp=0;		//획득한 점수
		
		
		for(int i=0; i<n; i++) {
			str[i] = sc.nextLine();
			for(int j=0; j<str[i].length(); j++) {
				if(str[i].charAt(j)=='O') {
					cnt++;
					temp+=cnt;
				}else {
					score[i]+=temp;
					cnt=0; temp=0;
				}
			}
			if(temp!=0) {
				score[i]+=temp;
				cnt=0; temp=0;
			}
		}
		
		for(int i:score) {
			System.out.println(i);
		}
	}
}
