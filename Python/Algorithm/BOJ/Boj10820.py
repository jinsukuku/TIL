while True:
    try:
        case = list(input())
        lower, upper, digit, space = 0,0,0,0
        for c in case:
            if c == " ":
                space += 1
            elif c.isdigit():
                digit += 1
            elif ord('a') <= ord(c) <= ord('z'):
                lower += 1
            else:
                upper += 1
        print(lower, upper, digit, space)
    except EOFError:
        break