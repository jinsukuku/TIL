package baekjoon.algorithm.test;
import java.util.Scanner;

public class Problem2455 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int inputCnt = 8;
		int[] sum = new int[inputCnt/2];
		int idx = 0;
		
		for(int i = 0; i < inputCnt; i+=2) {
			sum[idx++] = (sc.nextInt()*-1) + sc.nextInt();
		}
		
		System.out.println(sum[0]+sum[1] >= sum[3]*-1 ? sum[0]+sum[1] : sum[3]*-1);
	}
}


















