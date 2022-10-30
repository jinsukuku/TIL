# 1. 8진수를 10진수로 만든다
# 2. 10진수를 2진수로 만든다
# 3. 8진수 접두사 제거 후 출력

import sys

on = "0o" + sys.stdin.readline().rstrip()
dn = int(on, 8)
print(str(bin(dn))[2:]) # string으로 형변환 후, 접두사 제거하고 출력