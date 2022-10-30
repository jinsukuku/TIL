package baekjoon.algorithm.test;
import java.util.Scanner;

public class Problem2902 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String answer = "";
		String[] str = sc.next().split("-");
		for(String s : str) answer += s.charAt(0);
		System.out.println(answer);
	}
}


















