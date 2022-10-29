# 21.12.16(목) 오등큰수

import sys
from collections import Counter

n = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().rstrip().split()))
stack = []
answer = [-1] * n

# 1. F(A)를 구한다
fa = Counter(arr)

# 2. 오등큰수 구하기
for i in range(n):
    while stack and fa[arr[stack[-1]]] < fa[arr[i]]:
        answer[stack[-1]] = str(arr[i])
        stack.pop()
    stack.append(i)

print(*answer)
