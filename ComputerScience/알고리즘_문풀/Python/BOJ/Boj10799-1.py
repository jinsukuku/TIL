# 시간초과

import sys

# cmd = list("()(((()())(())()))(())")
cmd = sys.stdin.readline().rstrip()
temp = dict()

for i, x in enumerate(cmd):
    temp[i] = x

laser = []
pipes = []
used = 0
left = []
answer = 0

i = 0
while len(used) != len(temp):
    # print("i = ", i)
    try:
        if i >= len(temp):
            i = 0
        elif temp[i] == "(" and temp[i+1] == ")":
            used += 2
            # laser.append((i, i+1))
            laser.append(i+1)
            i += 2
        elif temp[i] == "(":
            left.append(i)
            used += 1
            i += 1
        elif temp[i] == ")" and len(left) > 0:
            pipes.append((left.pop(), i))
            used += 1
            i += 1

        # used.sort()
        # print("laser : ", laser)
        # print("pipe : ", pipe)
        # print("used : ", used)
        # print("left : ", left)
        # print()
    except:
        pass

for pipe in pipes:
    count = 1
    temp = (range(pipe[0], pipe[1]+1))
    for l in laser:
        if l in temp:
            count += 1
    answer += count

print(answer)