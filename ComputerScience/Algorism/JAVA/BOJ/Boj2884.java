package algorithm;

import java.util.Scanner;

public class Bj2884 {

	public static void main(String[] args) {
		//if�� -�˶��ð� : 45�� ���� �˶� ���߱�
		Scanner sc = new Scanner(System.in);
		int h = sc.nextInt();
		int m = sc.nextInt();
		if(h==0){
			if(m<45) {
				h=23; m+=15;
			}else {
				m-=45;
			}
		}else if(m<45) {
			h--;
			m+=15;
		}else {
			m-=45;
		}
		System.out.println(h+" "+m);
	}

}
