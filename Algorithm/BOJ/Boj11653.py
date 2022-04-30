# 11653. 소인수분해

import sys
input = sys.stdin.readline

n = int(input().rstrip())
i = 2
while n != 1:
    if n % i == 0:
        while n % i == 0:
            n //= i
            print(i)
    i += 1