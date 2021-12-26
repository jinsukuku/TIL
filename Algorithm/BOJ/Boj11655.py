import sys
S = sys.stdin.readline().rstrip()
answer = ""

for s in S:
    if ord("a") <= ord(s) < ord("n") or ord("A") <= ord(s) < ord("N"):
        s = chr(ord(s)+13)
    elif ord("n") <= ord(s) <= ord("z") or ord("N") <= ord(s) <= ord("Z"):
        s = chr(ord(s)-13)
    answer += s

print(answer)

