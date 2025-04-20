#include <stdio.h>

int check(int a, int b);

int main(void){    
    //문제02908 / 2021.03.10
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\n", check(a,b));
    return 0;
}

int check(int a, int b){
    int numA=0, numB=0;
    numA = (a%10)*100 + ((a%100)/10)*10 + (a/100); 
    numB = (b%10)*100 + ((b%100)/10)*10 + (b/100);

    if(numA>numB) return numA;
    else if(numA<numB) return numB;
    else return 0;
}
