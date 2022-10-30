def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = [0] * bridge_length
    while len(bridge) != 0:
        answer += 1
        bridge.pop(0)
        if len(truck_weights) != 0:
            if sum(bridge) + truck_weights[0] <= weight:
                bridge.append(truck_weights.pop(0))
            else:
                bridge.append(0)
    return answer


#  main method
if __name__ == "__main__":
    caseA = [2, 10, [7, 4, 5, 6]] # 8
    caseB = [100, 100, [10]] # 101
    caseC = [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]] #110

    print(solution(caseA[0], caseA[1], caseA[2]))
    # print(solution(caseB[0], caseB[1], caseB[2]))
    # print(solution(caseC[0], caseC[1], caseC[2]))