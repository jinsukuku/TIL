def solution(prices):
    answer = []

    for i in range(len(prices) - 1):
        seconds = 0  # 유지되는 시간
        for j in range(i + 1, len(prices)):
            if prices[i] <= prices[j]:
                seconds += 1
            else:
                seconds += 1
                break
        answer.append(seconds)
    answer.append(0)
    return answer

if __name__ == "__main__":
    prices = [1, 2, 3, 2, 3]
    print(solution(prices))