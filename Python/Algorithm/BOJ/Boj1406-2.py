import sys

left = list(sys.stdin.readline().rstrip())
right = list()

n = int(sys.stdin.readline().rstrip())

for i in range(n):
    command = sys.stdin.readline().rstrip()

    try :
        if "L" in command:
            right.append(left.pop())
        elif "D" in command:
            left.append(right.pop())
        elif "B" in command:
            left.pop()
        elif "P" in command:
            left.append(command.split()[1])
    except:
        pass

print("".join(left+right[::-1]))