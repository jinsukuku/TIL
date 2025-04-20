# 1. 2진수를 10진수로 만든다
# 2. 10진수를 8진수로 만든다
# 3. 8진수 접두사 0o가 있으므로, 접두사 제거 후 출력 

import sys

bn = sys.stdin.readline().rstrip()
dn = int(bn, 2)


print(str(oct(dn))[2:]) # string으로 형변환 후, 접두사 제거하고 출력 
