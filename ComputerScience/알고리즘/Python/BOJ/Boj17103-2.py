import sys

cnt = int(sys.stdin.readline().rstrip())
nums = [int(sys.stdin.readline().rstrip()) for _ in range(cnt)]
max_val = max(nums)
prime = [1] * (max_val+1) # 소수면 1, 아니면 0

# 소수 구하기
for i in range(2, max_val//2+1):
    if prime[i]:
        j = 2
        while i * j <= max_val:
            prime[i*j] = 0
            j += 1
        
# 골드바흐 파티션 확인
for num in nums:
    answer = 0
    for i in range(2, num//2+1):
        if prime[i] and prime[num-i]:
            answer += 1
    print(answer)

