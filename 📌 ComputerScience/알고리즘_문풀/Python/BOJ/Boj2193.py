# 이친수
## 첫 2글자는 10이어야한다
## n=0 ~ n=n-2 합을 구한다

import sys
input = sys.stdin.readline

# 입력
n = int(input())
cnt = 0

dp = [0] * 91
dp[0] = 1   # 0
dp[1] = 1   # 1
dp[2] = 1   # 10

for i in range(3, n+1):
    dp[i] = sum(dp) - dp[i-1]

print(dp[n])