# [문제] ROT13
# 입력:   Baekjoon Online Judge
# 출력:   Onrxwbba Bayvar Whqtr

# ord()를 통해 문자를 10진법으로 변환 후 +13 혹은 -13 => 다시 문자로
# (예1) B -> 66 + 13 = 79 -> O
# (예2) a -> 97 + 13 = 110 -> n
# (예3) n -> 110 - 13 = 97 -> a

# 대문자 범위:   A~Z => 65~90
# 소문자 범위:   a~z => 97~122
# 13을 더했을 때, 알파벳 범위를 벗어나지 않는 마지노선  M(m), 77(109) => Z(z), 90(122)
# N(n) 부터는 13을 더해주는 것이 아니라 빼주어야한다   N(n), 78(110) => A(a), 65(97)


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