#include <stdio.h>
#include <string.h>

int func(int num);
void reset(int*check, int*arr);

int main(void){
    //문제01316 / 2021.03.14
    //정답!
    int num;
    scanf("%d", &num);
    printf("%d",func(num));
    return 0;
}

int func(int num){
    int arr[26] = {0};
    char str[100];
    int idx, check=1, cnt=0;
    //check 그룹단어이면 1, 아니면 0
    for(int i=0; i<num; i++){
        scanf("%s", str);
        for(int j=0; j<strlen(str); j++){
            // 문자-'a' 를해서 해당 숫자를 idx에 저장
            idx = str[j]-'a';
            // arr[idx]가 0이면 arr[idx]에 +1
            // arr[idx]가 0이 아니면 check를 0으로 바꾸고 전체 반복 끝
            if(arr[idx]==0) arr[idx]++;
            else {
                check=0;
                break;
            }
            // j++ 을 하고, idx와 문자-'a'를 비교
            // 같으면 다시 j++부터 반복
            // 다르면 j-- 하고 for문 상단으로 이동
            while(j<strlen(str)){
                j++;
                if(idx != str[j]-'a'){
                    j--;
                    break;
                }
            }
        }
        cnt+=check;    
        reset(&check,arr);
    }
    return cnt;
}
void reset(int*check, int*arr){
    *check=1;
    for(int i=0; i<26; i++){
        arr[i]=0;
    }
}