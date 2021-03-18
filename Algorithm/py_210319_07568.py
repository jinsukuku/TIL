n = int(input())
info = []
for i in range(n) :
    temp = list(map(int, input().split()))
    info.append(temp)

for i in info :
    rank = 1
    for j in info :
        if i[0]<j[0] and i[1]<j[1] :
            rank+=1
    print(rank,end=' ') 
