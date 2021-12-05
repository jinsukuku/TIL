stack = []
answer = ""

cnt = int(input())

# 1. 스택에 push할 값을 담을 변수 i 를 선언하고, 1로 초기화한다
i = 1

# 2. cnt번의 입력이 일어난다 -> for문
for _ in range(cnt):
    n = int(input())

    # push가 되어있어야 pop할 수 있으므로 n이 push될 때 까지 스택에 push한다
    # [while문 조건] i <= n 의 경우에는 스택에 push
    while i <= n:
        stack.append(i)
        answer += '+\n'
        i += 1

    # 3. 스택은 LIFO(Last Input First Out) 구조이므로 스택의 마지막 요소가 n 과 같은 경우 pop 한다
    if stack[-1] == n:
        # pop을 하고 "-" 를 출력한다
        stack.pop()
        answer += '-\n'
    else:
        # 만약 같지 않다면, 원하는 순서로 작동할 수 없으므로 "NO" 를 출력한다
        answer = 'NO'
        break

print(answer)