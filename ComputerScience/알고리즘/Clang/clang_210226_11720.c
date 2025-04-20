#include <stdio.h>

int main() {
    //문제11720 / 2021.02.26

    int cnt, sum=0;
    char n;
    scanf("%d",&cnt);
    getchar();
    for(int i=0; i<cnt; i++){
        scanf("%c", &n);
        sum+=(n-48);
    }
    printf("%d\n",sum);
    return 0;
}
