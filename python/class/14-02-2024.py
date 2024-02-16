import math
a = int(input())
print("prime" if all(a % i != 0 for i in range(2, a)) else "not prime")
print("perfect" if sum(i for i in range(1, a) if a % i == 0) == a else "not perfect")
print("Strong" if sum( math.prod(j for j in range(1 ,int(str(a)[-i])+1)) for i in range(1,len(str(a))+1 )) == a else "not strong")
print( "arm strong" if sum (pow(int(str(a)[-i])  , len(str(a))) for i in range(1,len(str(a))+1 )) == a else "not a arm strong")
n1,n2 = 0,1
print(n1,n2, sep="," , end = ",")
for i in range(a): 
    n1,n2 = n2,(n1+n2)
    print(n2, end = "," if i < a-1 else "\n") 
print("palindrome" if str(a)[::-1] == str(a) else "not palindrome")