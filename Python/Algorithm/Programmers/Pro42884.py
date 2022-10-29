def solution(routes):
    answer = 1
    routes.sort(key=lambda route: route[0], reverse=True)

    camera = routes[0][0]
    for route in routes[1:]:
        if camera <= route[1]:
            continue
        else:
            camera = route[0]
            answer += 1
    return answer