def arrange(list) :
    # map() 사용해서 입력받으면 
    # 원하는 개수보다 더 많이 입력받아왔었을 수도 있으니까
    # 필요없는 요소 삭제하기(삭제하면 계속 idx가 n과 같다)
    for i in range(n,len(list)) :
        del list[n]
    list.sort()

### 메인 루트 ###
#split는 문자열 메소드
n, m = input().split()   
n, m = int(n), int(m)
res, temp = 0, 0
list = list(map(int, input().split()))
arrange(list)

for i in range(n) :
    for j in range(i+1,n) :
        for k in range(j+1,n) :
            temp = list[i]+list[j]+list[k]
            if temp>res and temp<=m :
                res = temp

print(res)
