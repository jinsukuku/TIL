def fac(n) :
    if n == 1 :
        return 1
    return n * fac(n-1)

n = int(input())
print(fac(n))

#재귀 쓰면 런타임 에러
# n = int(input())
# res = 1
# for i in range(1,n+1) :
#     res*=i
# print(res)