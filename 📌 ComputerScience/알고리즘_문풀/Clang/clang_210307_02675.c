#include <stdio.h>
#include <string.h>

int main(){
    //문제02675 / 2021.03.07
    int t, r;
    scanf("%d", &t);
    char s[20];

    for(int i=0; i<t; i++){        
        scanf("%d %s", &r, s);
        for(int j=0; j<strlen(s); j++){
            for(int k=0; k<r; k++){
                printf("%c",s[j]);
            }
        }printf("\n");
    }
    return 0;
}
