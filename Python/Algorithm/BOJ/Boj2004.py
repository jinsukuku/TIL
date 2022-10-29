# 2004.조합 0의 개수
# https://www.acmicpc.net/problem/2004

def getCnt(n,sub):
    cnt = 0
    while n != 0:
        n = n // sub
        cnt += n
    return cnt

n, m = map(int, input().split())

cnt2 = getCnt(n, 2) - getCnt(m, 2) - getCnt(n-m, 2)
cnt5 = getCnt(n, 5) - getCnt(m, 5) - getCnt(n-m, 5)
print(min(cnt2, cnt5))
