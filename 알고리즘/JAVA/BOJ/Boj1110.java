package algorithm;

import java.util.Scanner;

public class Bj1110 {

	public static void main(String[] args) {
		// ���ϱ� ����Ŭ
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int temp=n;
		int cnt=0;
		do {
			temp = ((temp%10)*10)+((temp/10)+(temp%10))%10;
			cnt++;
		}while(temp!=n);
		System.out.println(cnt);
	}

}
