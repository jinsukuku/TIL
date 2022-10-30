import sys

command = list("()(((()())(())()))(())")
# command = list(sys.stdin.readline().rstrip())

pipe = []
count = 0

i = 0
while i < len(command):
    if command[i] == "(" and command[i+1] == ")":
        count += len(pipe)
        i += 2
    elif command[i] == "(":
        pipe.append(i)
        i += 1
    elif command[i] == ")":
        pipe.pop()
        i += 1
        count += 1

print(count)
