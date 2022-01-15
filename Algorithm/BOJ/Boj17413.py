import sys

case = sys.stdin.readline().rstrip()

answer = []
temp = ""

for i, c in enumerate(case):
    temp += c
    try:
        if c == ">":
            answer.append(temp.rstrip())
            temp = ""
        elif case[i + 1] == "<":
            answer.append(temp[::-1])
            temp = ""
        if "<" not in temp and c == " ":
            answer.append(temp[::-1].strip() + " ")
            temp = ""
    except:
        pass

if "<" not in temp:
    temp = temp[::-1]
answer.append(temp)

print("".join(map(str, answer)))
