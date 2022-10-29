a, b, v = map(int,input().split())
res=0

if (v-b)%(a-b)!=0 :
    res = ((v - b) // (a - b)) + 1
else : 
    res = ((v - b) // (a - b))

print(res)