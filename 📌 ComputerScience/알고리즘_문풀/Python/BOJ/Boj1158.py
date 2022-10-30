import sys
n, k = map(int, sys.stdin.readline().rstrip().split())
arr = list(range(1, n+1))
answer = []

i = 0
while len(arr) > 0:
    i = (i+(k-1))
    if i > len(arr)-1:
        i %= len(arr)
    answer.append(arr.pop(i))

print("<", ", ".join(map(str, answer)), ">", sep="")
