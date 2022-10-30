# 21.12.03(금)
# 위장
# https://programmers.co.kr/learn/courses/30/lessons/42578?language=python3


def solution(clothes):
    answer = 1
    m = {}

    # 종류별로 분류하기
    for temp in clothes:
        if temp[1] in m:
            m[temp[1]] += 1
        else:
            m[temp[1]] = 1

    # get answer
    for v in list(m.values()):
        answer *= (v + 1)
    return answer - 1

    # 경우의 수 구하기 : 1개 이상만 챙겨입으면 된다
    # case1
    # headgear 2개, eyewear 1개
    # 착용 방법은 2 x 1 = 2가지 -> 착용하지 않는 경우는 염두에 두지 X
    # [y_h, b_s] / [g_t, b_s]
    # 착용하지 않는 경우의 수까지 고려하면
    # [] / [y_h] / [g_t] / [b_s] / [y_h, b_s] / [g_t, b_s]
    # 위와 같아야 하므로, (2+1) x (1+1) = 6가지
    # 최소 하나 이상 입어야하니까 총 경우의 수 -1 이 answer