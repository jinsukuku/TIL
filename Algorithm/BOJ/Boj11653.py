## 백준 11653. 소인수분해
## 2022.01.27(목)

import sys

n = int(sys.stdin.readline().rstrip())
i = 2

while n != 1:
    if n % i == 0:
        while n % i == 0:
            n //= i
            print(i)
    i += 1