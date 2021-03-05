#include <stdio.h>

int main(){
    //문제01065 / 2021.03.05
    //1부터 입력한 숫자까지의 숫자 중
    //모든 자릿수가 등차수열을 이루는 경우를 카운트해 출력
    int n, cnt=0;
    int n1,n2;
    scanf("%d",&n);
    for(int i=1; i<n+1; i++){
        if(i<100) {
            cnt++;
            continue;
        }else if(i<1000){
            n1 = (i/100) - ((i%100)/10) ;
            n2 = ( (i%100)/10 ) - (i%10) ;
            if(n1==n2){
                cnt++;
            }
        }
    }
    printf("%d\n",cnt);
    return 0;
}
