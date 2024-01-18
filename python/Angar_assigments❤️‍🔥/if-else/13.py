# -> Write a program to accept two numbers and mathematical operators and perform operation (+, -, *, /, %, //, **) accordingly.

num1 = int(input("enter first number : "))
print("select opraters by prassing number \n1. +\n2. -\n3. *\n4. /\n5. %\n6. //\n7. **\n")

oprations = int(input("select opraters : "))

num2 = int(input("enter second number : "))

if oprations == 1 : print(num1,"+",num2,"=",num1+num2)
elif oprations == 2 : print(num1,"-",num2,"=",num1-num2)
elif oprations == 3 : print(num1,"*",num2,"=",num1*num2)
elif oprations == 4 : print(num1,"/",num2,"=",num1/num2)
elif oprations == 5 : print(num1,"%",num2,"=",num1%num2)
elif oprations == 6 : print(num1,"//",num2,"=",num1//num2)
elif oprations == 7 : print(num1,"**",num2,"=",num1**num2)
else : print("invalid opraters")