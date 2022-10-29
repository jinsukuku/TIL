import sys

word = sys.stdin.readline().rstrip()
alpha = [-1] * (ord('z') - ord('a') + 1)

for i in range(len(word)):
    if alpha[ord(word[i]) - ord('a')] == -1:
        alpha[ord(word[i]) - ord('a')] = i

print(" ".join(str(a) for a in alpha))


