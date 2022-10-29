import sys
import math

arr = list(map(int, sys.stdin.readline().rstrip().split()))
print(math.gcd(arr[0], arr[1]))   # gcd : 최대공약수
print(math.lcm(arr[0], arr[1]))   # lcm : 최소공배수