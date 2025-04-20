#include <stdio.h>

int main(void){
    //문제02292 / 2021.03.15
    int n;
    scanf("%d",&n);

    int cnt = 1; //층수
    int check = 1; //이번 층의 방 개수
    int range = 1; //check까지 모든 층의 방 개수

    while(1){
        if(range >= n) break;
        check = 6*(cnt++);
        range+=check;
    }
    printf("%d",cnt);
    return 0;
}
