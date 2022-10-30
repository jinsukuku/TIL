#include <stdio.h>
#include <string.h>

int main(void){
    //문제1157 / 2021.02.25 

    char str[1000000];              //주어지는 단어의 길이는 1,000,000을 넘지 않는다.
    int arr[26] = { 0, };           //알파벳의 개수를 확인하기위한 배열 (0=a, 1=b, ... 25=z) → 대문자 65=0=A, 소문자 97=0=a
    
    scanf("%s",str);        
    unsigned int size = strlen(str);

    for(int i=0; i<size; i++){
        if(str[i]<96){          //대문자
            arr[str[i]-65]++;
        }else if(str[i]>96){    //소문자
            arr[str[i]-97]++;
        }
    }

    int max=0;    //알파벳 개수의 최대값 구하기
    char c;       //가장 많은 알파벳 저장하기위한 변수

    //가장 많이 사용된 알파벳 찾기위한 반복문
    for(int i=0; i<26; i++){
        if(arr[i]!=0 && max<arr[i]){
            max=arr[i];
            c = i+65;
        }
    }

    //max와 같은 개수로 사용된 알파벳이 있다면 ? 출력
    for(int i=0; i<26; i++){
        if(arr[i]!=0 && max==arr[i] && i!=c-65){
            c = '?';
            break;
        }
    }

    //결과 출력
    printf("%c\n", c);
    return 0;
}
