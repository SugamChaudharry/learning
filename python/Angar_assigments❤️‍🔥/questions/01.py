l = list(map(int,input().split()))
print(l)
ans = [0,0]
for i,e in enumerate(l):
    if e > ans[0]:
        ans = [e , i]
print(ans)