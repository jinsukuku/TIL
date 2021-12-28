import sys

str = sys.stdin.readline().rstrip()
arr = []

for i in range(len(str)):
    arr.append(str[i:])

arr.sort()
for str in arr:
    print(str)
