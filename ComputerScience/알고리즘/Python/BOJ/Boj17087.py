# 17087.숨바꼭질 6
# https://www.acmicpc.net/problem/17087\
import sys

def my_gcd(a, b):
    if b == 0:
        return a
    return my_gcd(b, a % b)

N, S = map(int, sys.stdin.readline().rstrip().split())
temp = list(map(int, sys.stdin.readline().rstrip().split()))
arr = list()

for n in temp:
    arr.append(abs(S-n))

if len(arr) > 1:
    g = my_gcd(arr[0], arr[1])
    try:
        for i in range(2, len(arr)):
            g = my_gcd(g, arr[i])
    except:
        pass
else:
    g = arr[0]

print(g)