# 21.12.16(목) 오등큰수

import sys
from collections import Counter

n = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().rstrip().split()))
answer = [-1] * n

# 1. F(A)를 구한다
fa = Counter(arr)

# 2. 오등큰수 구하기
for i in range(n):
    temp = [False] * (i+1)
    temp += list(map(lambda j : fa[arr[j]] > fa[arr[i]] and i < j, range(i+1, len(arr))))

    if True in temp:
        answer[i] = arr[temp.index(True)]

print(*answer)
