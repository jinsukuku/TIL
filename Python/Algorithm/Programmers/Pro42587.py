def solution(priorities, location):
    idx = list(range(len(priorities)))
    res = []

    while len(priorities) != 0:
        if priorities[0] == max(priorities):
            res.append(idx.pop(0))
            priorities.pop(0)
        else:
            priorities.append(priorities.pop(0))
            idx.append(idx.pop(0))
    return res.index(location) + 1


#  main method
if __name__ == "__main__":
    caseA = [[2, 1, 3, 2], 2]
    caseB = [[1, 1, 9, 1, 1, 1]	, 0]

    print("CaseA: ", solution(caseA[0], caseA[1]))
    print("CaseB: ", solution(caseB[0], caseB[1]))
