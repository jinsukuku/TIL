## 백준 17298. 오큰수
## 두번째 방법 O(n2)

import sys
input = sys.stdin.readline

count = int(input())
nums = list(map(int, input().rstrip().split()))[::-1]
result = [-1] * count

for i, n in enumerate(nums):
    for j in range(i+1, count):
        if nums[j] < n:
            result[j] = n

for n in result[::-1]:
    print(n, end=" ")