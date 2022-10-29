## 백준 17298. 오큰수
## stack사용

import sys
input = sys.stdin.readline

count = int(input())
nums = list(map(int, input().rstrip().split()))[::-1]

res = [-1] * count
index = [0]

for i in range(1, count):
    while index and nums[index[-1]] < nums[i]:
        idx = index.pop()
        res[idx] = nums[idx]
    idx.append(i)