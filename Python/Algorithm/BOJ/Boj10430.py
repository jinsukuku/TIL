import sys

a,b,c = map(int, sys.stdin.readline().rstrip().split())
print((a+b)%c, (a%c+b%c)%c, (a*b)%c, (a%c*b%c)%c, sep = "\n")