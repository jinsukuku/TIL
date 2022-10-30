#include <stdio.h>
#include <string.h>

int main(void)
{
    //문제05622 / 2021.03.11
    //while문 사용
    char str[16];
    scanf("%s", str);
    int i=0, sum=0, len=strlen(str);    
    
    while(len>0){
        if(str[i]<'P'){
            sum += (str[i]-'A')/3 + 3;
        }else if(str[i]<'T'){
            sum += 8;
        }else if(str[i]<'W'){
            sum += 9;
        }else{
            sum += 10;
        }

        i++;
        len--;
    }

    printf("%d\n",sum);
}
