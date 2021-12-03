# 21.12.02(목)
# 단어 뒤집기

count = int(input())

for i in range(count):
    arr = input().split()
    answer = ""

    for s in arr:
        answer += s[::-1]+" "
    print(answer)