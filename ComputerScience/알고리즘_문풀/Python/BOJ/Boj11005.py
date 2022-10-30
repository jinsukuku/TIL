import sys 

N, B = map(int, sys.stdin.readline().rstrip().split())
answer = ""

while N != 0:
    temp = N % B
    N = N // B
    
    if temp >= 10 and temp <= 36:
        temp = chr(temp+55)
    answer += str(temp)
    
print(answer[::-1])