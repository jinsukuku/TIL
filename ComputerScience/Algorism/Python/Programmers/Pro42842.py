import math

def solution(brown, yellow):
    answer = []
    total = brown + yellow

    for i in range(3, int(math.sqrt(total)) + 1):
        if total % i != 0: continue
        a, b = i, int(total / i)
        if a <= b and (2 * a) + (2 * (b - 2)) == brown:
            return [b, a]
        elif a > b and (2 * b) + (2 * (a - 2)) == brown:
            return [a, b]

    return answer