from math import factorial

n = int(input())
cnt = 0
ans = str(factorial(n))[::-1]
for x in ans:
    if x != "0":
        break
    cnt += 1

print(cnt)