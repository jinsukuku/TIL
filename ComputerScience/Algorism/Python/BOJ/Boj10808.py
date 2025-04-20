import sys

word = sys.stdin.readline().rstrip()
alpha = [0] * (ord('z') - ord('a') + 1)

for w in word:
    alpha[ord(w) - ord('a')] += 1

print(" ".join(str(a) for a in alpha))


