package algorithm;

import java.util.Scanner;

public class Bj01546 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		float []arr = new float[n];
		float max=0, sum=0;
		
		for(int i=0; i<n; i++) {
			arr[i] = sc.nextFloat();
			if(max<arr[i]) max=arr[i];
		}
		
		for(int i=0; i<n; i++) {
			arr[i] = arr[i]/max*100;
			sum+=arr[i];
		}
		
		System.out.printf("%f\n", sum/n);

	}

}
