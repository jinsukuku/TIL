# 1978. 소수 찾기

import sys

n = int(sys.stdin.readline().rstrip())
nums = list(map(int, sys.stdin.readline().rstrip().split()))
count = 0

def check(num):
    if num < 2:
        return 0
    for i in range(2, num):
        if num % i == 0:
            return 0
    return 1

for num in nums:
    count += check(num)

print(count)