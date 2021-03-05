#include <stdio.h>

int find(int);
int main(){
    //문제01065 / 2021.03.05
    //1부터 입력한 숫자까지의 숫자 중
    //모든 자릿수가 등차수열을 이루는 경우를 카운트해 출력
    int n;
    scanf("%d",&n);
    printf("%d\n",find(n));
    return 0;
}

int find(int n){
    int n1,n2,cnt=0;
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
    return cnt;
}
