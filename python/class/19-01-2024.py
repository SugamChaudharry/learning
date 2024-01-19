km = int(input("enter km : "))
print(km*1000)

print("enter value of equation D = a*b^2 - 4*a*c ")

b = int(input("enter b : "))
a = int(input("enter a : "))
c = int(input("enter c : "))

d = b**2 - 4*a*c
print("D = a*b^2 - 4*a*c = " , d)

if d > 0 : print("+ve")
elif  d < 0 : print("-ve")
else : print("0")

if a>b : 
    if a>c : print(a , "is gratest")
    else : print(c , "is gratest")
else :
    if b>c : print(b , "is gratest")
    else : print(c , "is gratest")
    
grade = int(input("enter grade : "))
    
if grade >= 90 : print("v.v.good")
elif grade <= 90 and grade >= 70 : print("v.good")
elif grade <= 70 and grade >= 30 : print("good")
else : print("good luck next time")


num = int(input("enter num : "))

if num%10 % 3 == 0 : print("yes")
else : print("no")

if num >= 18 : print(num,"is eligible")
else : print(num, "is not eligible")

weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

num = int(input("enter a num : "))

if num >= 1 and num <= 7 : print(weeks[num-1])
else : print("invalid week number")

year = int(input("enter year : "))


if year % 400 == 0 and year % 100 == 0 : print("yes it is leep year")
elif year % 4 == 0 and year % 100 != 0 : print("yes it is leep year")
else : print("not a leep year")