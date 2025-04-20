# 6588. 골드바흐의 추측
# *통과
# *값을 입력받아 n에 저장
# *n보다 작은 홀수 중, 소수인 경우
#   *n - 소수 = 소수 인지 확인, 참이라면 break

import sys


def check(num):
    if num < 2:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

res = ""

while True:
    n = int(sys.stdin.readline().rstrip())
    if n == 0:
        break

    for i in range(1, int(n ** 1/2) + 1, 2):
        if check(i) and i % 2 == 1 and check(n-i):
            res += str(n) + " = " + str(i) + " + " + str(n-i) + "\n"
            break
    if res == "":
        print("Goldbach's conjecture is wrong.")

print(res)


