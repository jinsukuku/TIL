# 커서를 * 로 시각적으로 표시한 풀이 -> 시간초과
import sys

str = list(sys.stdin.readline().rstrip() + "*")
n = int(sys.stdin.readline().rstrip())
commands = []

for i in range(n):
    commands.append(input())

cursor = str.index("*")
for i in range(n):
    command = commands[i]
    if "L" in command and cursor != 0:
        str[cursor], str[cursor-1] = str[cursor-1], str[cursor]
    elif "D" in command and cursor != len(str)-1:
        str[cursor], str[cursor+1] = str[cursor+1], str[cursor]
    elif "B" in command and cursor != 0:
        str = str[:cursor-1] + str[cursor:]
    elif "P" in command:
        str = str[:cursor] + [command.split()[1]] + str[cursor:]
    cursor = str.index("*")
    # print(command + "\t\t" + "".join(str)) # 커서 위치 확인용 출력
print("".join(str).replace("*", ""))