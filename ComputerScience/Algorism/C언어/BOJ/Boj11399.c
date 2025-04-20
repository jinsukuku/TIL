#include <stdio.h>
#include <stdlib.h>

void input(int size, int *arr);     //입력
void sort(int size, int *arr);      //정렬
int result(int size, int *arr);     //결과

int main(void){
    //문제11399 / 2021.02.21 
    //입력  5 \n 3 1 4 3 2
    //출력  32

    int size;
    scanf("%d",&size);
    int *arr = (int *)malloc(sizeof(int)*size); //동적 메모리 할당
    
    input(size,arr);    //입력
    sort(size,arr);     //정렬
    printf("%d",result(size,arr));   //결과 출력

    free(arr);          //동적 메모리 해제
    return 0;
}

void input(int size, int *arr){
    for(int i=0; i<size; i++){
        scanf("%d", (arr+i));
    }
    return;
}
void sort(int size, int *arr){
    int temp;
    for(int i=0; i<size-1; i++){
        for(int j=1; j<size; j++){
            if(arr[i]>=arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
int result(int size, int *arr){
    int sum=0;
    for(int i=0; i<size; i++){
        for(int j=0; j<size; j++){
            sum+=arr[j];
            printf("%d\t",sum);
            if(i==j) {break;}
        }
    }
    return sum;
}
