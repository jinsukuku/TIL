package algorithm;

import java.util.Scanner;

public class Bj04344 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		float []res = new float[n];	//평균 넘는 학생 비율
		int cnt;	//학생 수
		int sum=0;	//학생 점수의 합
		float avg;	//학생 점수의 평균
		int num=0;	//평균을 넘는 학생의 수
		
		for(int i=0; i<n; i++) {
			cnt = sc.nextInt();
			int []arr = new int[cnt];
			for(int j=0; j<cnt; j++) {
				arr[j] = sc.nextInt();
				sum+=arr[j];
			}
			avg = sum/(float)cnt;
			for(int j=0; j<cnt; j++) {
				if(avg<arr[j]) num++;
			}
			//res에 저장 : 결과가 실수여야하므로 형변환
			res[i]=(num/(float)cnt)*100;
			//사용한 변수 초기화
			sum=0; num=0;
		}
		
		for(float i : res) {
			System.out.printf("%.3f%%\n",i);
		}
	}

}
