## 백준 11576. Base Conversion
## 2022.01.26(수)

import sys
input = sys.stdin.readline

f, now = map(int, input().rstrip().split())
count = int(input().rstrip())
nums = list(map(int, input().rstrip().split()))[::-1] # 꼭 뒤집기

de = 0      # 미래 진법으로 표현된 값을 10진법으로 바꿔 값을 저장할 변수
res = []    # 현재 진법으로 표현된 값을 담을 배열

for i, n in enumerate(nums):
    de += (f**i) * n

while de:
    res.append(str(de % now))
    de //= now

print(' '.join(res[::-1]))