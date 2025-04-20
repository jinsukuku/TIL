
# 시간초과

import sys

cnt = int(sys.stdin.readline().rstrip())
nums = [int(sys.stdin.readline().rstrip()) for _ in range(cnt)]
max_val = max(nums)

prime = [1] * (max_val+1) # 소수가 아니면 1->0

for i in range(2, max_val):
    j = i + i
    for j in range(j, max_val+1, i):
        prime[j] = 0 if prime[j] != 0 else prime[j]
        
# 골드바흐 파티션 확인
for num in nums:
    answer = 0
    for i in range(2, (num//2)+1):
        answer = answer + 1 if prime[i] and prime[num-i] else answer
    print(answer)
