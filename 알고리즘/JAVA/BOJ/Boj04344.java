package algorithm;

import java.util.Scanner;

public class Bj04344 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		float []res = new float[n];	//��� �Ѵ� �л� ����
		int cnt;	//�л� ��
		int sum=0;	//�л� ������ ��
		float avg;	//�л� ������ ���
		int num=0;	//����� �Ѵ� �л��� ��
		
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
			//res�� ���� : ����� �Ǽ������ϹǷ� ����ȯ
			res[i]=(num/(float)cnt)*100;
			//����� ���� �ʱ�ȭ
			sum=0; num=0;
		}
		
		for(float i : res) {
			System.out.printf("%.3f%%\n",i);
		}
	}

}
