def solution(answers):
    answer = []
    supo1 = [1, 2, 3, 4, 5]                 # 수포자1 : 12345 반복
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5]        # 수포자2 : 21 23 24 25 반복
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]  # 수포자3 : 33 11 22 44 55 반복
    cnt = [0] * 4  # 정답 개수 저장할 배열

    # 정답 개수 세기
    for i in range(len(answers)):
        if supo1[i % len(supo1)] == answers[i]: cnt[1] += 1
        if supo2[i % len(supo2)] == answers[i]: cnt[2] += 1
        if supo3[i % len(supo3)] == answers[i]: cnt[3] += 1

    # 점수 비교
    for i, v in enumerate(cnt):
        if v == max(cnt): answer.append(i)
    answer.sort()

    return answer