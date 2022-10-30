#include <stdio.h>
#include <string.h>

int main(void){
    //문제01157 / 2021.03.09
    char str[1000000];
    scanf("%[^\n]",str);

    //단어 개수 확인하기
    // 1. 공백이 아닌 경우 단어 개수 +1
    // 2. while문을 사용해서 공백일때까지 i++
    int cnt=0 ;
    // here : 
    for(int i=0; i<strlen(str); i++){
        if(str[i]!=' ') cnt++;
        while(str[i]!=' '){
            i++;
        }
    }

	//단어 개수 출력하기
    printf("%d\n",cnt);
    return 0;
}
