def solution(people, limit):
    answer = 0
    start = 0
    end = len(people) - 1
    people.sort(reverse=True)  # 내림차순 정렬

    while start <= end:
        if people[start] + people[end] <= limit:
            end -= 1
        start += 1
        answer += 1

    return answer