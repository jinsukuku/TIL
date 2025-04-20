#include <stdio.h>
#include <string.h>

int main(void)
{
    //문제05622 / 2021.03.11
    //switch문 사용
    int sum=0;
    char str[15];
    scanf("%s", str);
    
    for(int i=0; i<strlen(str); i++){
        switch(str[i]) {
            case 'A': case 'B': case 'C':
                sum+=3; break; 
            case 'D': case 'E': case 'F':
                sum+=4; break;
            case 'G': case 'H': case 'I':
                sum+=5; break;
            case 'J': case 'K': case 'L':
                sum+=6; break;
            case 'M': case 'N': case 'O':
                sum+=7; break;
            case 'P': case 'Q': case 'R': case 'S': 
                sum+=8; break;
            case 'T': case 'U': case 'V': 
                sum+=9; break;
            case 'W': case 'X': case 'Y': case 'Z':
                sum+=10; break;
            default:
                sum+=11; break;
            }
    }
    printf("%d\n",sum);
}
