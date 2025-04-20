# 1676.팩토리얼 0의 개수
# https://www.acmicpc.net/problem/1676

from math import factorial

n = int(input())
cnt = 0
ans = str(factorial(n))
for x in ans[::-1]:
    if x != "0":
        break
    cnt += 1

print(cnt)