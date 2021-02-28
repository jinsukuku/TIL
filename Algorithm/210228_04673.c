#include <stdio.h>

int d(int i);

int main() {
    //문제04673 / 2021.02.28
    int arr[10001] = {0,};  //모두 0으로 초기화, 생성자가 있는 경우 +1
    
    for(int i=1; i<10001; i++){
        arr[d(i)]+=1;
    }
    for(int i=1; i<10001; i++) {
        if(arr[i]==0) {
           printf("%d\n", i);
        }
    }
    return 0;
}

int d(int i){    
    int sum = i, n = i;
    while(n!=0) {
        sum+=n%10;    
        n/=10;   
    }		
    if (sum<10001) return sum;
    else return 0;
}
