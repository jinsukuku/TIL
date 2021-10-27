package baekjoon.algorithm.test;
import java.util.Scanner;

/*
 * 1. input이 5의 배수인지 확인
 *     1-1. YES : 5로 나눈 몫을 count에 초기화하고 break
 *     1-2. NO : 2번으로 이동
 * 2. input에 -3
 * 3. count를 +1 
 * 4. input이 0보다 작은지 확인
 *     4-1. YES : count에 -1을 대입하고 break
 *     4-2. NO : 1번으로 이동
 * 5. while문을 빠져나와 count 출력
 */

public class GreedyTest2839 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int input = sc.nextInt();
		int count = 0;
		
		while(true) {
			if(input % 5 == 0) {
				count += input / 5;
				break;
			}
			
			input -= 3;
			count++;
			
			if(input < 0) {
				count = -1;
				break;
			}
		}
		
		System.out.println(count);
	}
}







