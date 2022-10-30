# 9613.GCD 합
# https://www.acmicpc.net/problem/9613


import sys

def my_gcd(a, b):
    if b == 0:
        return a
    return my_gcd(b, a % b)


cnt = int(sys.stdin.readline().rstrip())
answer = []

for _ in range(cnt):
    arr = list(map(int, sys.stdin.readline().rstrip().split()))
    res = 0

    for i in range(1, len(arr)):
        for j in range(i+1, len(arr)):
            res += my_gcd(arr[i], arr[j])

    answer.append(res)

for ans in answer:
    print(ans)