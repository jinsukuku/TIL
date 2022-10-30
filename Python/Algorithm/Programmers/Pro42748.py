def solution(array, commands):
    answer = []

    for comm in commands:
        temp = sorted(array[comm[0] - 1: comm[1]])
        answer.append(temp[comm[2] - 1])

    return answer