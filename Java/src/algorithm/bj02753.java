package algorithm;

import java.util.Scanner;

public class bj02753 {
	//¹®Á¦2753. À±³â
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int y=sc.nextInt();
		if(y%4==0&&y%100!=0||y%400==0) System.out.println(1);
		else System.out.println(0);
		
	}

}
