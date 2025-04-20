#include <stdio.h>
#include <string.h>

int main(){
    //문제02675_fail / 2021.03.07
    int t;
    scanf("%d", &t);
    int r[t];
    char s[t][20];
    for(int i=0; i<t; i++){
        scanf("%d %s", &r[i], s[i]);
    }

    for(int i=0; i<t; i++){
        for(int j=0; j<strlen(s[i]); j++){
            for(int k=0; k<r[i]; k++){
                printf("%c",s[i][j]);
            }
        }printf("\n");
    }

    return 0;
}
