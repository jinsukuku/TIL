# 1929. 소수 구하기

import sys

n, m = map(int, sys.stdin.readline().rstrip().split())

def check(num):
    if num == 1:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

for i in range(n, m+1):
    if(check(i)):
        print(i)

