cnt = int(input())

l = []
for i in range(cnt) :
    n = int(input())
    l.append(n)

l = sorted(l)

for i in l :
    print(i)