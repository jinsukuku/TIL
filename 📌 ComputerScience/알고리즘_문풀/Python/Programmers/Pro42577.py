# 21.12.02(목)
# 전화번호 목록
# https://programmers.co.kr/learn/courses/30/lessons/42577?language=python3

def solution(phone_book):
    answer = True
    m = {}

    # map에 저장
    for num in phone_book:
        m[num] = 1

    # 번호를 하나씩 꺼내기
    for phone_num in phone_book:
        temp = ""

        # 번호 한글자씩 꺼내서 temp 더하기
        for num in phone_num:
            temp += num

            # map에 있고, 전체 길이가 아닌 경우 접두사가 된다 return false
            if temp in m and temp != phone_num:
                return False
    return answer

# 오답
# def solution(phone_book):
#     answer = True
#
#     phone_book.sort(key=len)
#
#     for i in range(len(phone_book) - 1):
#         for j in range(i + 1, len(phone_book)):
#             if phone_book[j].startswith(phone_book[i]):
#                 return False
#     return answer
