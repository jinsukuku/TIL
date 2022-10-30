#include <stdio.h>

void sort(int size, int *arr); //정렬
int find_min(int size, int *arr, int sum); //최소비용 반환

int main(void){
    //문제11508 / 2021.02.23

    //입력
    int size, sum=0;
    scanf("%d", &size);
    int arr[size];
    for(int i=0; i<size; i++){
        scanf("%d", &arr[i]);
        sum+=arr[i];
    }

    //정렬
    sort(size, arr);
    //최소비용찾기 + 출력
    printf("%d", find_min(size, arr, sum));

    return 0;
}

void sort(int size, int *arr){
    int temp;
    for(int i=0; i<size-1; i++){
        for(int j=i; j<size; j++){
            if(arr[i]<=arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}

int find_min(int size, int *arr, int sum){
    for(int i=2; i<size; i+=3){
        sum-=arr[i];
    }
    return sum;
}