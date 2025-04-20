# 21.12.16(목) 오등큰수
# list보다 dictionary가 더 빠른 이유는 hash 기반이기 때문
import sys
from collections import Counter

def find_answer(i):
    for j in range(i+1, len(arr)):
        if fa[arr[i]] < fa[arr[j]]:
            return arr[j]
    return -1

if __name__ == "__main__":
    n = int(sys.stdin.readline().rstrip())
    arr = list(map(int, sys.stdin.readline().rstrip().split()))
    answer = [-1] * n

    # 1. F(A)를 구한다
    fa = Counter(arr)

    # 2. 오등큰수를 찾는다
    answer = list(map(lambda i : find_answer(i), arr))

    # 3. 출력
    print(*answer)
