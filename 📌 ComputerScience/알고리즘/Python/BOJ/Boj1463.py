# 1463. 1로 만들기

import sys
input = sys.stdin.readline

n = int(input().rstrip())
d = [0]*(10**6)
for i in range(2, n+1):
    d[i] = d[i-1] + 1
    if i % 3 == 0:
        d[i] = min(d[i//3]+1, d[i])
    if i % 2 == 0:
        d[i] = min(d[i//2]+1, d[i])

print(d[n])

