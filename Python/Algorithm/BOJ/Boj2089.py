# 2089.-2진수
# https://www.acmicpc.net/problem/2089

# 2진법과 동일하게 주어진 수를 -2로 계속 나눈다. 나머지는 항상 양수어야한다
# -2로 계속 나누다보면 나머지가 -1 또는 0으로만 나온다
# 나머지가 -1인 경우 나머지에 +2 를 해주어야 나머지가 양수인 1이 된다. 나머지를 양수인 1로 만들기 위해 몫에 +1 한다
# if else문이 필요한 이유는 입력값이 0인 경우 while문이 동작하지 않으므로 이를 대응하기 위함

num = int(input())
ans = ""

if num == 0:
    print("0")
else:
    while num:
        if num % -2:
            ans += "1"
            num = num // -2 + 1
        else:
            ans += "0"
            num = num // -2
    print(ans[::-1])