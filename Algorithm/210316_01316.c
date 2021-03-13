#include <stdio.h>
#include <string.h>

int func(int num);
void reset(int*check, int*arr);

int main(void){
    //문제01316 / 2021.03.13
    //푸는 중..
    int num;
    scanf("%d", &num);
    printf("%d",func(num));
    return 0;
}

int func(int num){
    int arr[26] = {0};
    char str[100];
    int idx, check=1, cnt=0;
    //check 0이면 그룹체커, 1이면 그룹체커x    
    for(int i=0; i<num; i++){
        scanf("%s", str);
        for(int j=1; j<strlen(str); j++){
            //사용한 알파벳 확인
            idx = str[j]-'a';
            if(arr[idx]==0){
                arr[idx]++;
                while(j<strlen(str)){
                    j++;
                    if(idx != str[j]-'a'){
                        j--;
                        printf("%d\n",j);
                        break;
                    }
                }
            }else{
                check=0;
                break;
            }
        }
        printf("check=%d\n",check);
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







