# 21.12.16(목) 오등큰수

# 1. F(A)를 구한다
# 2. 오등큰수를 찾는다
#  - 현재 요소보다 index가 크다(오른쪽에 위치한다)
#  - 현재 요소의 F(A)보다 더 크다
#  - 그 중, index가 가장 빠르다
#  - 위의 조건을 모두 만족하는 값이 없다면 -1
# 3. 출력

import sys

n = int(sys.stdin.readline().rstrip())
answer = [-1] * n
arr = list(map(int, sys.stdin.readline().rstrip().split()))
fa = {}

# 1. F(A)를 구한다

# 1 1 2 3 4 2 1 -> 1 2 3 4

for i in set(arr):
    fa[i] = arr.count(i)

# 2. 오등큰수를 찾는다
for i in range(len(arr)):
    for j in range(i+1, len(arr)):
        if fa[arr[i]] < fa[arr[j]]:
            answer[i] = arr[j]
            break

# 3. 출력
print(*answer)
