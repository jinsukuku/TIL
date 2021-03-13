#include <stdio.h>

int main(void){
    //문제01712 / 2021.03.14
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    if(c<=b){
        printf("-1\n");
    }else{
        int num = a/(c-b);
        printf("%d\n",num+1);
    }
    return 0;
}
