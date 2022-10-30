#include <stdio.h>

//시간 초과
int main(void){
    //문제01712 / 2021.03.14
    int a, b, c;
    int n = 0;
    scanf("%d %d %d", &a, &b, &c);
    if(c<b){
        n=-1;
        printf("%d\n",n);
    }else{
        while(n>=0){  
            n++;
            if(c*n-(a+(b*n))>0){
                printf("%d\n",n);
                break;
            }                
        }
    }
    return 0;
}
