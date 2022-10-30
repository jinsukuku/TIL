# 6588. 골드바흐의 추측
# *시간초과
# *값을 입력받아 n에 저장
# *n보다 작은 홀수 중, 소수를 구해 리스트(primeNum)에 저장해서 사용

import sys


def check(num):
    if num < 2:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


primeNum = []
res = ""

while True:
    n = int(sys.stdin.readline().rstrip())
    if n == 0:
        break

    for i in range(1, n, 2):
        if check(i) and i % 2 == 1:
            primeNum.append(i)

    for i in primeNum:
        if n - i in primeNum and i < n:
            res += str(n) + " = " + str(i) + " + " + str(n-i) + "\n"
            break
        if i >= n:
            break
    if res == "":
        print("Goldbach's conjecture is wrong.")

print(res)


