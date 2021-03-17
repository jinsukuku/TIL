#include <stdio.h>
#include <string.h>

int main(void){
    //문제02941 / 2021.03.12
    char str[100];
    scanf("%s",str);
    int cnt = 0;
    for(int i=strlen(str)-1; i>-1; i--){
        if(i == 0) {
            cnt++; 
            break;
        }
        switch (str[i]){
            case '=':
                if(i>1 && str[i-1] =='z' && str[i-2] =='d' ){
                    i-=2;
                }else if(str[i-1] =='c' || str[i-1] =='s' || str[i-1] =='z'){
                    i--;
                }break;
            case '-':
                if(str[i-1] =='c' || str[i-1] =='d'){
                    i--;
                }break;
            case 'j':
                if(str[i-1] =='l' || str[i-1] =='n'){
                    i--;
                }break;
            default : break;
        } cnt++;
    }
    printf("%d", cnt);
}