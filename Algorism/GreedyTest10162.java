package baekjoon.algorithm.test;
import java.util.Scanner;

// 전자레인지
/*
*  A = 5분 = 300초 , B = 1분 = 60초 , C = 10
*  
*  1. 시간 정보를 입력할 배열 option에 초기화
*  2. 선택 횟수를 입력할 배열 select 생성  
*  3. input이 10으로 나누어 떨어지는지 확인 
*  	3-1. 나누어 떨어지는 경우 4번으로 이동
*  	3-2. 나누어 떨어지지 않는 경우 -1 출력 후, 7번으로 이동
*  4. input이 300보다 큰 숫자인지 확인 
*  	4-1. 300으로 나누어 떨어지면 300초 선택 횟수를 input/300으로 변경 후, 6번으로 이동
*	4-2. 300보다 크면  300초 선택 횟수를 input/300으로 변경 후, 5번으로 이동
*  	4-3. 300보다 작으면 5번으로 이동
*  5. input이 60으로 나누어 떨어지는지 확인
*  	5-1. 60으로 나누어 떨어지면 60초 선택 횟수를 input/60으로 변경 후, 6번으로 이동
*	5-2. 60보다 크면 10초 선택 횟수 +1, temp -10 하고 5번으로 이동 
*  	5-3. 60보다 작으면 10초 선택 횟수 + (input/10) 하고 6번으로 이동
*  6. 선택 횟수를 입력한 배열 select의 값을 모두 출력
*  7. 프로그램 종료
*  
*/

public class GreedyTest10162 {
	
	// select 출력을 위한 메서드
	static void print(int[] arr) {
		for(int i : arr) {
			System.out.print(i+" ");
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);	
		
		int input = sc.nextInt();
		
		int[] option = {300, 60, 10};	// 1. 시간 정보 입력할 배열 option
		int[] select = {0, 0, 0};		// 2. 선택 횟수 입력할 배열 select
		
		if(input % 10 != 0) {
			System.out.println(-1);
			System.exit(0);
		}
		
		for(int i = 0; i < option.length; i++) {
			select[i] = input / option[i];
			input = input % option[i];			
		}
		
		print(select);
	}
}




























