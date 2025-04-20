#3kg 봉지, 5kg 봉지
#5kg로 나누었을 때 나머지가 3의 배수
#몫에서 -1씩 하고 나머지+5했을 때, 나머지가 3의 배수가 되는 경우

#역의 경우

import copy

n = int(input())
n1 = int(n/5) #몫
n2 = n%5 #나머지
res = 0 #봉지개수
cnt = copy.deepcopy(n1)

while cnt>-1 :
    if n2%3==0 :
        res=n1+int(n2/3)
        break
    n1-=1
    n2+=5
    cnt-=1

if res==0 and n1==-1:
    res=-1

print(res)