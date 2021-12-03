# 21.12.03(금)
# 괄호

cnt = int(input())
result = []

for i in range(cnt):
    arr = list(input())
    check = 0
    right = []
    while len(arr) != 0:
        if arr[-1] == ')':
            arr.pop()
            right.append(')')
        elif arr[-1] == '(' and len(right) > 0:
            right.pop()
            arr.pop()
        elif arr[-1] == '(' and len(right) == 0:
            check = 1
            break
    if (check == 0 and len(right) == 0):
        result.append("YES")
    else:
        result.append("NO")

for res in result:
    print(res)