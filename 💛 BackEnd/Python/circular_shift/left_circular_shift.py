n = int(input('정수 입력 : '))
cnt = int(input('lcs 횟수 입력 : '))

temp = n
check = 0x8000000000000000
i = 0

while cnt>0 :
    if n>=0 :
        temp=temp<<1
    else :
        temp<<1
        temp=temp|1
    cnt-=1


while i<64 :
    if temp&check==0 :   
        print('0',end='')
    else :
        print('1',end='')
    temp=temp<<1
    i+=1