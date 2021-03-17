#include <stdio.h>

int main(void){
    //문제8958 / 2021.02.24 
    int cnt;
    int score=0, num=0, total=0;
    char c;

    scanf("%d",&cnt);
    getchar();
    int result[cnt];

    for(int i=0; i<cnt; i++){
        score=0, num=0, total=0;
        while(1){
            scanf("%c",&c); //버퍼에 테스트 케이스 입력
            if(c=='\n'){
                break;
            }else if(c=='O'){
                num++;
                score+=num;
            }else{
                total+=score;
                num=0, score=0;
            }
        }
        result[i]=total+score;
    }

    for(int i=0; i<cnt; i++){
        printf("%d\n",result[i]);
    }

    return 0;
}
