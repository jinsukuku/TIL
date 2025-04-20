# 21.12.01(수)
# 스택

stack = []

cnt = int(input())
command = []
for i in range(cnt):
    command.append(input())

for func in command:
    if "push" in func:
        temp = func.split(" ")
        stack.append(temp[-1])
    elif func == "pop":
        if len(stack) == 0 :
            print(-1)
        else :
            print(stack.pop())
    elif func == "size":
        print(len(stack))
    elif func == "empty":
        if len(stack) == 0 :
            print(1)
        else :
            print(0)
    elif func == "top":
        if len(stack) == 0 :
            print(-1)
        else :
            print(stack[-1])