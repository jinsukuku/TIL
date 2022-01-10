def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

if __name__ == "__main__":
    n = int(input())
    ans = str(factorial(n))[::-1]
    for i, x in enumerate(ans):
        if x != "0":
            print(i)
            break
