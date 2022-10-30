## 백준 17298. 오큰수

import sys
input = sys.stdin.readline

count = int(input())
nums = list(map(int, input().rstrip().split()))
result = []

for i, n in enumerate(nums):
    temp = nums[i+1:count]
    res = list(filter(lambda x: n < x, nums[i+1:count]))
    try:
        result.append(str(min(res)))
    except:
        result.append(str(-1))

print(" ".join(result))