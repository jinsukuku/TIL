## 백준 2745. 진법변환
## 2022.01.25(화)

import sys

# A~Z 의 문자를 숫자로 바꾸기 위한 함수
def change(n):
    if "A" <= n and n <= "Z":
        n = ord(n) - 55
    return int(n)

inputText = sys.stdin.readline().rstrip().split()   # 입력 받기
BN, B = inputText[0][::-1], int(inputText[1])       # 문자열은 reverse해서 사용
res = 0

for i, n in enumerate(BN):
    res += (B**i) * change(n)

print(res)