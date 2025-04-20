import sys

n = int(sys.stdin.readline())
arr = []
for i in range(n):
    temp = list(map(int, sys.stdin.readline().split()))
    arr.append(temp)
arr.sort()

for i in range(len(arr)):
    print(arr[i][0], arr[i][1])