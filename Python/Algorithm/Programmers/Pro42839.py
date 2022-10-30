import math
import itertools


def solution(numbers):
    cases = get_cases(numbers)  # 경우의 수 구하기
    answer = get_prime_numbers(cases)  # cases 중, 소수의 개수 구하기
    return answer


def get_cases(numbers):
    nums = [int(num) for num in numbers]
    nCr = []

    # 경우의 수를 모두 구한다
    # (1,0) 과 (0,1) 은 다르다 → 10 != 1 → 중복이 허용되는 순열을 사용
    for i in range(1, len(nums) + 1):
        nCr += list(itertools.permutations(nums, i))

    # (1,0) 의 형태를 숫자로 변경 → 10
    cases = list(set(int(''.join([str(t) for t in temp])) for temp in nCr))

    print("nCr :", nCr)
    print("cases :", cases)

    return cases


def get_prime_numbers(cases):
    answer = 0
    primeNumber = ""
    if 0 in cases: cases.remove(0)  # 0은 소수가 아니므로 제거
    if 1 in cases: cases.remove(1)  # 1은 소수가 아니므로 제거

    for case in cases:
        check = True  # 소수인지 확인
        sqrt = int(math.sqrt(case))  # 제곱근 구하기

        # 2 이상, 제곱근 이하의 숫자로 나누어떨어지는 지 확인
        for s in range(2, sqrt + 1):
            if case % s == 0:
                check = False
                break

        # 소수라면 answer +1
        if check :
            answer += 1
            primeNumber += str(case)+" "

    print("prime number :",primeNumber)
    return answer


if __name__ == "__main__":
    print("case1 :", solution("17"))
    print()
    print("case2 :", solution("011"))
