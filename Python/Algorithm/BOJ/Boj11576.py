# 11576. Base Conversion

import sys
input = sys.stdin.readline

A, B = map(int, input().rstrip().split())
m = int(input().rstrip())
nums = list(map(int, input().rstrip().split()))[::-1]
# 가장 뒤에 있는 숫자가 0제곱 이므로, i와 맞춰주기 위해 뒤집어주어야한다
# 뒤집지 않으면 2은 1제곱, 16는 0제곱이 된다

de = 0          # 10진법으로 바꾸어 저장
res = []        # B진법으로 바꾸어 나가며 저장

# A진법 -> 10진법
for i, n in enumerate(nums):
    de += (A**i) * n

# 10진법 -> B진법
while de:
    res.append(str(de % B))
    de //= B

# 역순으로 출력
print(' '.join(res[::-1]))
