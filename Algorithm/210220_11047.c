#include <stdio.h>

int main(void){     
    //문제11047 / 2021.02.20 

    int n, k;
    scanf("%d %d", &n, &k);
    int arr[n];

    //입력
    for(int i=0; i<n; i++){
      scanf("%d", &arr[i]);
    }

    //k가 0이 아니라면 반복
    int cnt=0, idx=n-1;
    while(k!=0){
        if(k>=arr[idx]){
            k-=arr[idx];
            cnt++;
        }else{
            idx--;
        }
    }

    //출력
    printf("%d",cnt);
    return 0; 
}
