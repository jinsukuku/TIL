# [문제] 접미사 배열

import sys

str = sys.stdin.readline().rstrip()
arr = []

for i in range(len(str)):
    arr.append(str[i:])

arr.sort()
for res in arr:
    print(res)
