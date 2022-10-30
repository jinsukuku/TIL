#include <stdio.h>
#include <string.h>

int main(){
    //문제10809 / 2021.03.06

    char str[100];
    scanf("%s", str);

    int arr[26];
    int n;

    //배열 초기화
    for(int i=0; i<26; i++){
      arr[i] = -1;
    }

    //알파벳 위치 확인
    for(int i=0; i<strlen(str); i++){
        n = str[i]-'a';
        if(arr[n]==-1) arr[n]=i;
    }

    //결과 출력
    for(int i=0; i<26; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}
