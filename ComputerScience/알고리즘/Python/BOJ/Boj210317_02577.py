n = []
check = [0 for i in range(10)]

num = 1
for i in range(3) :
    n.append(int(input()))

num = n[0] * n[1] * n[2]
str = str(num)

for i in str :
    check[int(i)] += 1

for i in check :
    print(i)