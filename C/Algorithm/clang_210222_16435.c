#include <stdio.h>

void sort(int size, int *arr); //정렬

int main(void){
    //문제16435 / 2021.02.22 

    //입력
    int size, h;
    scanf("%d %d", &size, &h);
    int arr[size];
    for(int i=0; i<size; i++){
        scanf("%d", &arr[i]);
    }

    //정렬
    sort(size, arr);

    //과일 먹고 키크기
    for(int i=0; i<size; i++){
        if(h>=arr[i]){
            h++;
        }else{
            break;
        }
    }
    
    //출력
    printf("%d",h);
    return 0;
}

void sort(int size, int *arr){
    int temp;
    for(int i=0; i<size-1; i++){
        for(int j=i; j<size; j++){
            if(arr[i]>=arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
