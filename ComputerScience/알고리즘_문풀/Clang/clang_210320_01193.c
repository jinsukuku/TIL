#include <stdio.h>
int main(void){
    int n;
    scanf("%d",&n);

    int cnt=1;
    while(n>cnt){
        n-=cnt;
        cnt++;
    }

    int n1,n2;
    if(cnt%2==0){
        n1=n;
        n2=cnt-n+1;
    }else{
        n1=cnt-n+1;
        n2=n;
    }

    printf("%d/%d",n1,n2);
}
