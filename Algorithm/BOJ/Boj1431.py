# 시리얼 번호

# function
def get_sum(x):
    res = 0
    for i in x:
        if i.isdigit():
            res+=int(i)
    return res

# main
if __name__ == "__main__":
    n = int(input())
    arr = []

    for i in range(n):
        arr.append(input())

    arr.sort(key = lambda x:(len(x), get_sum(x), x))
    for i in arr:
        print(i)