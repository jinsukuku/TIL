n = int(input('정수 입력 : '))
cnt = int(input('rs 횟수 입력 : '))

temp = n
check = 0x8000000000000000

while cnt > 0 :
    if temp>=0 :                #양수
        if temp&1==0 :          #마지막 비트 0 (0&1 = 0)
            temp = temp>>1
        else :                  #마지막 비트 1 (1&1 = 1)
            temp = temp>>1      
            temp = temp|check   #부호 비트 0 → 1 (0|1=1 / 다른 자리 그대로)
    else :                      #음수
        if temp&1==0 :          #마지막 비트 0 (0&1 = 0) 
            temp = temp>>1      #첫번째 비트 1 → 0 (1|0=0 / 다른 자리 그대로)
            temp = temp&(~check)
        else :                  #마지막 비트 1 (1&1 = 1)
            temp = temp>>1
    cnt-=1

temp=n
i = 0

while i<64 :
    if temp&check==0 :         # 1 | 0 = 0
        print('0',end='')
    else :
        print('1',end='')
    temp=temp<<1
    i+=1