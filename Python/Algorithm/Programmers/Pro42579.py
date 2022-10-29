def solution(genres, plays):
    answer = []

    # 0. 장르별 고유번호 정리
    # key = genres, value = index
    info = {}
    for i in range(len(genres)):
        if genres[i] in info.keys():
            info[genres[i]] = info[genres[i]] + [i]
        else:
            info[genres[i]] = [i]
    print("0. 장르별 고유번호 정리\n", info)
    print("===")

    # 1. 인기 장르 찾기
    # 1-1. 장르별로 재생수 합산해 dict(map)에 저장
    # popular : key = genres, value = sum(play)
    popular = {}
    for i in range(len(genres)):
        if genres[i] in popular:
            popular[genres[i]] += plays[i]
        else:
            popular[genres[i]] = plays[i]
    print("1-1. 장르별로 재생수 합산해 dict(map)에 저장\npopular \t\t:" ,popular)

    # 1-2. 장르별 재생 수를 기준으로 장르 정렬
    # popular_sort : popular의 value순으로 정렬 -> 재생 순으로 정렬
    # 정렬 기준이 동일한 경우, index순으로 정렬되는 내장 함수를 사용했기 때문에
    # 만약 재생 횟수가 동일하면, index순으로 정렬된다
    popular_sort = sorted(popular.items(), key=lambda item: item[1], reverse=True)
    print("\n1-2. 장르별 재생 수를 기준으로 장르 정렬\npopular_sort \t:" ,popular_sort)

    # 1-3. popular_genre : 장르만 꺼내서 저장 = 인기 장르 순 배열
    popular_genre = list(map((lambda x: x[0]), popular_sort))
    print("\n1-3. popular_genre : 장르만 꺼내서 저장 = 인기 장르 순 배열")
    print("popular_genre \t:" ,popular_genre)
    print("===")

    # 2. 재생 순 정렬
    for genre in popular_genre:
        # 인기 장르 -> 재생 횟수 순으로 정렬
        temp = sorted(info[genre], key = lambda x: plays[x], reverse = True)

        if 1 == len(info[genre]):
            # 장르에 속한 곡이 하나라면, 하나의 곡만 선택
            answer += temp
        else :
            # 장르 별로 가장 많이 재생된 노래를 두 개 선택
            answer += temp[:2]
        print(genre,":", temp, "-> answer : ", answer)
    return answer

#  main method
if __name__ == "__main__":
    genres = ["classic", "pop", "classic", "classic", "pop"]
    plays = [500, 600, 150, 800, 2500]

    print("===\nfinal_answer : ",solution(genres, plays))