# 10872.팩토리얼
# https://www.acmicpc.net/problem/10872

n = int(input())
res = 1
for i in range(1, n+1):
    res *= i
print(res)