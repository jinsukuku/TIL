# 6588. 골드바흐의 추측
# *시간초과
# *입력받은 값 중 가장 큰수까지의 홀수인 소수를 구해 리스트(primeNum)에 저장해서 사용

import sys


def check(num):
    if num < 2:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


inputNum = []
while True:
    n = int(sys.stdin.readline().rstrip())
    if n == 0:
        break
    inputNum.append(n)

maxNum = max(inputNum)
primeNum = []

for i in range(maxNum):
    if check(i) and i % 2 == 1:
        primeNum.append(i)

for i in inputNum:
    res = ""
    for j in primeNum:
        if i - j in primeNum and j < i:
            res += str(i) + " = " + str(j) + " + " + str(i-j)
            print(res)
            break
        if j >= i:
            break
    if res == "":
        print("Goldbach's conjecture is wrong.")



