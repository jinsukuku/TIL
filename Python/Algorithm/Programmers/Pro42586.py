import math

def solution(progresses, speeds):
    answer = []

    # 작업 소요 일자 계산
    # progresses = [93, 30, 55] , speeds = [1, 30, 5] 라면
    # 93% 진행 작업은 하루에 1% 진행 -> (100 - 93) / 1 = 7일 소요
    # 30% 진행 작업은 하루에 30% 진행 -> (100 - 30) / 30 = 3.33333333 -> 올림 -> 4일 소요

    days = list(map(lambda p, s: math.ceil((100 - p) / s), progresses, speeds))

    work = days[0]
    count = 1
    for i in range(1, len(days)):
        if work >= days[i]:
            count += 1
        else:
            answer.append(count)
            work = days[i]
            count = 1
    answer.append(count)
    return answer
